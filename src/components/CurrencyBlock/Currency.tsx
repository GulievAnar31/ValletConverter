import React from 'react';
import { LogicComponent } from '../LogicComponent';
import styles from './Currency.module.scss';
import Usd from '../../images/usd.svg.png';
import ChangeVallet from '../../images/bitcoin.svg';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useDebounceEffect } from '../../hooks/useDebounceEffect';

const TARGET_ASSET_ID = "b2384bf2-b14d-4916-aa97-85633ef05742";

export interface DataType {
  id: string;
  source_currency: string;
  target_crypto_asset_id: string;
  source_amount: string;
  target_amount: string;
  fiat_blockchain_fee: string;
  absolute_iternal_fee: string;
  iternal_fee_percent: string;
  total_fee: string;
  expires_at: Date;
}

export const CurrencyComponent: React.FC = () => {
  const [pay, setPay] = React.useState(100);
  const [recive, setRecive] = React.useState(0);

  async function fetchCreateQuote(value: number, isSource: boolean) {
    try {
      const { data }: any = await axios.post<DataType>('https://api-qjoa5a5qtq-uc.a.run.app/quotes', {
        source_currency: "USD",
        target_crypto_asset_id: TARGET_ASSET_ID,
        [isSource ? 'source_amount' : 'target_amount']: `${value}`,
      });
      console.log(data);
      if (isSource) setRecive(Number(data.target_amount))
      else setPay(Number(data.source_amount));
    } catch (err) {
      console.warn(err);
      alert('Error creating');
    }
  }

  React.useEffect(() => {
    fetchCreateQuote(pay, true);
  }, []);

  useDebounceEffect({
    callback: () => {
      console.log(pay);
    },
    delay: 500,
    deps: [pay]
  });

  return <>
    <div className={styles.root}>
      <h1>Select Your Ammount</h1>
      <LogicComponent
        subtitle='You Pay'
        currencyName='Usd'
        currencyIcon={Usd}
        value={pay}
        onChangeValue={setPay}
      />
      <LogicComponent
        subtitle='You Recive'
        currencyName='Usdc Evmos'
        currencyIcon={ChangeVallet}
        value={100}
        onChangeValue={setRecive}
      />
      <button>Buy Now</button>
    </div>
  </>
};
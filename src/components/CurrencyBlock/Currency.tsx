import React from 'react';
import { LogicComponent } from '../LogicComponent';
import styles from './Currency.module.scss';
import Usd from '../../images/usd.svg.png';
import ChangeVallet from '../../images/bitcoin.svg';

export const CurrencyComponent: React.FC = () => {

  return <>
    <div className={styles.root}>
      <h1>Select Your Ammount</h1>
      <LogicComponent
        subtitle='You Pay'
        currencyName='Usd'
        currencyIcon={Usd}
        value={100}
      />
      <LogicComponent
        subtitle='You Recive'
        currencyName='Usdc Evmos'
        currencyIcon={ChangeVallet}
        value={100}
      />
      <button>Buy Now</button>
    </div>
  </>
};
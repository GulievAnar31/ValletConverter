import React from 'react';
import styles from './Currency.module.scss';

interface CurrencyBlockProps {
  subtitle: string;
  currencyName: string;
  currencyIcon: string;
  value: number;
  onChangeValue?: (val: number) => void;
}

export const CurrencyComponent: React.FC<CurrencyBlockProps> = (props) => {
  const { subtitle, currencyName, currencyIcon, value } = props;

  return <>
    <div className={styles.root}>
      <h3>Select Your Ammount</h3>
      <p>{subtitle}</p>
      <div className={styles.bottom}>
        <input defaultValue={value} className={styles.input} />
        <div className={styles.currencyInfo}>
          <h5>{currencyName}</h5>
          <img src={currencyIcon} alt="Language" width={45} height={45} />
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  </>
};
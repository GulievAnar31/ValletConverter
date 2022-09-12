import React from 'react';
import styles from './Currency.module.scss';

interface CurrencyBlockProps {
  subtitle: string;
  twoSubtitle: string;
  currencyName: string;
  twoCurrencyName: string;
  currencyIcon: string;
  twoIcon: string;
  value: number;
  onChangeValue?: (val: number) => void;
}

export const CurrencyComponent: React.FC<CurrencyBlockProps> = (props) => {
  const { subtitle, twoSubtitle, currencyName, twoCurrencyName, currencyIcon, twoIcon, value } = props;

  return <>
    <div className={styles.root}>
      <div className={styles.currency}>
        <h3>Select Your Ammount</h3>
        <p>{subtitle}</p>
        <div className={styles.bottom}>
          <input defaultValue={value} className={styles.input} />
          <div className={styles.currencyInfo}>
            <h5>{currencyName}</h5>
            <img src={currencyIcon} alt="Language" width={45} height={45} />
          </div>
        </div>
      </div>
      <div className={styles.currency}>
        <h3>Select Your Ammount</h3>
        <p>{twoSubtitle}</p>
        <div className={styles.bottom}>
          <input defaultValue={value} className={styles.input} />
          <div className={styles.currencyInfo}>
            <h5>{twoCurrencyName}</h5>
            <img src={twoIcon} alt="ChangeVallet" width={50} height={50} />
          </div>
        </div>
      </div>
      <button>Buy Now</button>
    </div>
  </>
};
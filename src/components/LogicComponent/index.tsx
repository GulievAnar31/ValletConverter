import React from 'react';
import styles from './LogicComponent.module.scss';

interface LogicBlockProps {
  subtitle: string;
  currencyName: string;
  currencyIcon: string;
  value: number;
  onChangeValue: (val: number) => void;
}

export const LogicComponent: React.FC<LogicBlockProps> = (props) => {
  const { subtitle, value, currencyName, currencyIcon, onChangeValue } = props

  return <div className={styles.currency}>
    <p>{subtitle}</p>
    <div className={styles.bottom}>
      <input type={'number'} onChange={(e) => onChangeValue(Number(e.target.value))} defaultValue={value} className={styles.input} />
      <div className={styles.currencyInfo}>
        <h5>{currencyName}</h5>
        <img src={currencyIcon} alt="ChangeVallet" width={50} height={50} />
      </div>
    </div>
  </div>
}
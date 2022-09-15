import React from 'react';
import styles from './LogicComponent.module.scss';
import Dollar from '../../images/dollar.svg';
import Euro from '../../images/euro.svg';
import Ruble from '../../images/ruble.svg';
import Tenge from '../../images/tenge.svg';

const ValletMenu = [
  { name: 'Dollar', img: Dollar },
  { name: 'Euro', img: Euro },
  { name: 'Ruble', img: Ruble },
  { name: 'Tenge', img: Tenge }
];


interface LogicBlockProps {
  subtitle: string;
  currencyName: string;
  currencyIcon: string;
  value: number;
  onChangeValue: (val: number) => void;
  changeIcon?: (value: string, type: string) => void;
}

export const LogicComponent: React.FC<LogicBlockProps> = (props) => {
  const { subtitle, value, currencyName, currencyIcon, onChangeValue, changeIcon } = props
  const [valletMenuActive, setValletMenuActive] = React.useState(false);
  const [typeBlock, setTypeBlock] = React.useState(subtitle);

  return <div className={styles.currency}>
    <p>{subtitle}</p>
    <div className={styles.bottom}>
      <input type={'number'} onChange={(e) => onChangeValue(Number(e.target.value))} defaultValue={value} className={styles.input} />
      <div className={styles.currencyInfo}>
        <h5>{currencyName}</h5>
        <img src={currencyIcon} alt="ChangeVallet" onClick={() => {
          setValletMenuActive(!valletMenuActive);
          setTypeBlock(subtitle === 'You Pay' ? 'vallet' : 'crypto');
        }} width={50} height={50} />
      </div>
      {valletMenuActive && <div className={styles.valletBlock}>
        {typeBlock === 'vallet' ? ValletMenu.map((item, index) => {
          return <div onClick={() => {
            changeIcon && changeIcon(item.name, 'vallet');
            setValletMenuActive(!valletMenuActive);
          }} className={styles.valletMenu}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        }) : <div></div>}
      </div>}
    </div>
  </div>
}
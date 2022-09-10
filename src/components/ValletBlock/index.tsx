import React from 'react';
import styles from './ValletBlock.module.scss';

type ValletBlockProps = {
  value: number;
  currentValueType: string;
  changeVallet: string;
}

export const ValletBlock: React.FC<ValletBlockProps> = (props) => {
  const { value, currentValueType, changeVallet } = props;


  return <>
    <div>
      <h3>You Recive</h3>
      <div className={styles.valueBlock}>
        <span>{value}</span>
      </div>
      <div className={styles.currentValueType}>
        <span>{currentValueType}</span>
      </div>
      <div className={styles.changeVallet}>
        <img
          src={changeVallet}
          alt="changeValletBtn"
          width={45}
          height={45}
          onClick={() => console.log(value)}
        />
      </div>
    </div>
  </>
};
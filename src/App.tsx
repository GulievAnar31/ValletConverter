import React from 'react';
import './App.css';
import { CurrencyComponent } from './components/CurrencyBlock/Currency';
import { ValletBlock } from './components/ValletBlock';
import Usd from './images/usd.svg.png';
import ChangeVallet from './images/bitcoin.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <CurrencyComponent
        subtitle='You Pay'
        currencyName='Usd'
        currencyIcon={Usd}
        value={100}
      />
      <ValletBlock
        value={100}
        currentValueType={'Bitcoin'}
        changeVallet={ChangeVallet}
      />
    </div>
  );
}

export default App;

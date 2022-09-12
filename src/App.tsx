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
        twoSubtitle='You Recive'
        currencyName='Usd'
        twoCurrencyName="Usdc Evmos"
        currencyIcon={Usd}
        twoIcon={ChangeVallet}
        value={100}
      />
    </div>
  );
}

export default App;

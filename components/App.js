import React from 'react';
import StockList from './StockList';
import Keypad from './Keypad';
import CoinsPad from './CoinsPad';

import {connect} from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column is-half">
        <StockList />
        </div>
        <div className="column">
        <Keypad />
        <CoinsPad />
        <p>DISPLAY</p>
        </div>
      </div>
    );
  }
}

export default App;


import React from 'react';
import StockList from './StockList';
import Keypad from './Keypad';

import {connect} from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div>
        <StockList />
        <Keypad />
      </div>
    );
  }
}

export default App;


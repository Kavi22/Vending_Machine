
import ReactDOM from 'react-dom';
import React from 'react';
import {reducer} from './reducer/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import 'bulma/css/bulma.css';

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
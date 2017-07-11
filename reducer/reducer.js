import * as types from '../actions/types';

export const initialState = {
  stock: {
    'A1': {
      name: 'MarsBar',
      quantity: 10,
      price: 0.85
    },
    'A2': {
      name: 'Kettle Chips',
      quantity: 10,
      price: 0.90
    },
    'A3': {
      name: 'Kitkat',
      quantity: 10,
      price: 0.75
    }
  },
  credit : [],
  change: {},
  float : {
    '0.10': 5,
    '0.20': 5,
    '0.50': 10,
    '1': 20
  },
  displayMessage: '',
  selection : '',
  productDispenser : '',
  dispenserDoorOpen: false,
  power: true
};

export function reducer(prevState = initialState, action) {
  if (!action) return prevState;
  if (!prevState.power) return prevState;

  if (action.type === types.INSERT_COIN) {
    const newState = Object.assign({}, prevState);
    newState.credit = newState.credit.concat([action.coin]);
    return newState;
  }


}
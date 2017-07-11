import * as types from '../actions/types';
import * as helper from './helperFunctions';

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

  if (action.type === types.REPLENISH_STOCK) {
    if (!action.code || !action.quantity) return prevState;
    const newState = Object.assign({}, prevState);
    newState.stock = Object.assign({}, newState.stock);
    newState.stock[action.code] = Object.assign({}, newState.stock[action.code]);
    newState.stock[action.code].quantity += action.quantity;
    return newState;
  }

    if (action.type === types.MAKE_SELECTION) {
    if (!action.code) return prevState;
    const newState = Object.assign({}, prevState);
    newState.selection = action.code;
    return newState;
  }

  if (action.type === types.CONFIRM_PURCHASE) {
    if (!action.pressed) return prevState;
    // check that credit is more than price
    const totalCredit = helper.sumCredit(prevState.credit);
    const itemPrice = prevState.stock[prevState.selection].price;
    const newState = Object.assign({}, prevState);

    if (totalCredit < itemPrice) {
      newState.displayMessage = 'PLEASE INSERT MORE MONEY';
      return newState
    }

    const quantity = prevState.stock[prevState.selection].quantity;
    const item =  prevState.stock[prevState.selection].name;


    if (quantity < 1) {
     newState.displayMessage = `${item} - OUT OF STOCK`;
     return newState
    }

    newState.stock = Object.assign({}, newState.stock)
    newState.stock[prevState.selection] = Object.assign({}, newState.stock[prevState.selection]);
    newState.stock[prevState.selection].quantity = newState.stock[prevState.selection].quantity -1;
    return newState
  


  }
 return prevState;
}
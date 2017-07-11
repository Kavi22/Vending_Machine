import * as types from './types';

export function insertCoin(coin) {
  return {
    type: types.INSERT_COIN,
    coin
  };
}

export function replenishStock(code, quantity) {
  return {
    type: types.REPLENISH_STOCK,
    code,
    quantity
  };
}

export function makeSelection(code) {
  return {
    type: types.MAKE_SELECTION,
    code
  };
}

export function confirmPurchase(pressed) {
  return {
    type: types.CONFIRM_PURCHASE,
    pressed
  };
}

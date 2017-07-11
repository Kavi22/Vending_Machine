import * as types from './types';

export function insertCoin(coin) {
  return {
    type: types.INSERT_COIN,
    coin
  };
}
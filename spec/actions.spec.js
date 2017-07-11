import {expect} from 'chai';
import * as actions from '../actions/actions';
import * as types from '../actions/types';

describe('Actions', ()=> {
  describe('INSERT_COINS', ()=> {
    it('returns correct action', ()=> {
      expect(actions.insertCoin(0.2)).to.eql({
        type: types.INSERT_COIN,
        coin: 0.2
      });
    });
  });
  describe('REPLENISH_STOCK', ()=> {
    it('returns correct action', ()=> {
      expect(actions.replenishStock('A1',10)).to.eql({
        type: types.REPLENISH_STOCK,
        code: 'A1',
        quantity: 10
      });
    });
  });
});
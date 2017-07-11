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
});
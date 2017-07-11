import {expect} from 'chai';
import {reducer, initialState} from '../reducer/reducer';
import * as actions from '../actions/actions';

describe('Reducer', ()=> {
  it('is a function', ()=> {
    expect(reducer).to.be.a('function');
  });
  describe('action: Insert coin', () => {
    it('updates the state correctly', () => {
      const action = actions.insertCoin(0.2);
      const newState = reducer(initialState, action);
      expect(newState.credit).to.eql([0.2]);
    });
    it('does not mutate the initial state', () => {
      const action = actions.insertCoin(0.2);
      const newState = reducer(initialState, action);
      expect(newState.credit).to.not.equal(initialState.credit);
    });
  });
});
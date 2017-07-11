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
  describe('action: Replenish Stock', () => {
    it('updates the state correctly', () => {
      const action = actions.replenishStock('A1', 10);
      const newState = reducer(initialState, action);
      expect(newState.stock[action.code].quantity).to.eql(20);
    });
    it('does not mutate the initial state', () => {
      const action = actions.replenishStock('A1', 10);
      const newState = reducer(initialState, action);
      expect(newState.stock).to.not.equal(initialState.stock);
      expect(newState.stock[action.code].quantity).to.not.equal(initialState.stock[action.code].quantity);
    });
  });
  describe('action: Make Selection', () => {
    it('updates the state correctly', () => {
      const action = actions.makeSelection('A1');
      const newState = reducer(initialState, action);
      expect(newState.selection).to.eql('A1');
    });
    it('does not mutate the initial state', () => {
      const action = actions.makeSelection('A1');
      const newState = reducer(initialState, action);
      expect(newState).to.not.equal(initialState);
      expect(newState.selection).to.not.equal(initialState.selection);
    });
  });
});
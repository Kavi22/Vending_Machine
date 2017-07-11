import {
  expect
} from 'chai';
import {
  reducer,
  initialState
} from '../reducer/reducer';
import * as actions from '../actions/actions';

describe('Reducer', () => {
  it('is a function', () => {
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
  describe('action: Confirm Purchase', () => {
    const initialState2 = {
      stock: {
        'A1': {
          name: 'MarsBar',
          quantity: 10,
          price: 0.85
        }
      },
      credit: [0.20, 0.20],
      change: {},
      float: {
        '0.10': 5,
        '0.20': 5,
        '0.50': 10,
        '1': 20
      },
      displayMessage: '',
      selection: 'A1',
      productDispenser: '',
      dispenserDoorOpen: false,
      power: true
    };
    it('should update the display message if more credit is required', () => {
      const initialState3 = {
        stock: {
          'A1': {
            name: 'MarsBar',
            quantity: 10,
            price: 0.85
          }
        },
        credit: [0.20, 0.20],
        displayMessage: '',
        selection: 'A1',
        power: true
      };
      const action = actions.confirmPurchase(true);
      const newState = reducer(initialState3, action);
      expect(newState.displayMessage).to.equal('PLEASE INSERT MORE MONEY');
    });
    it('should update the display message if item is out of stock', () => {
      const initialState4 = {
        stock: {
          'A1': {
            name: 'MarsBar',
            quantity: 0,
            price: 0.85
          }
        },
        credit: [0.5, 0.20, 0.20],
        displayMessage: '',
        selection: 'A1',
        power: true
      };
      const action = actions.confirmPurchase(true);
      const newState = reducer(initialState4, action);
      expect(newState.displayMessage).to.equal(`${initialState4.stock[initialState4.selection].name} - OUT OF STOCK`);
    });
    it('does not mutate the initial state', () => {
      const initialState5 = {
        stock: {
          'A1': {
            name: 'MarsBar',
            quantity: 0,
            price: 0.85
          }
        },
        credit: [0.5, 0.20, 0.20],
        displayMessage: '',
        selection: 'A1',
        power: true
      };
      const action = actions.confirmPurchase(true);
      const newState = reducer(initialState5, action);
      expect(newState).to.not.equal(initialState5);
      expect(newState.displayMessage).to.not.equal(initialState5.displayMessage);
    });
    it('updates the state with new stock levels', () => {
      const initialState5 = {
        stock: {
          'A1': {
            name: 'MarsBar',
            quantity: 10,
            price: 0.85
          }
        },
        credit: [0.5, 0.20, 0.20],
        displayMessage: '',
        selection: 'A1',
        power: true
      };
      const action = actions.confirmPurchase(true);
      const newState = reducer(initialState5, action);
      expect(newState.stock[initialState5.selection]).to.eql({
        name: 'MarsBar',
        quantity: 9,
        price: 0.85
      });
    });
    it('updates state of productDispenser with despensed item', () => {
      const initialState5 = {
        stock: {
          'A1': {
            name: 'MarsBar',
            quantity: 10,
            price: 0.85
          }
        },
        credit: [0.5, 0.20, 0.20],
        displayMessage: '',
        selection: 'A1',
        productDispenser: '',
        power: true
      };
      const action = actions.confirmPurchase(true);
      const newState = reducer(initialState5, action);
      expect(newState.productDispenser).to.equal('A1');
    });
  });
});
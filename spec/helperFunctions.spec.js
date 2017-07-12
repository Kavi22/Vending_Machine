import {
  expect
} from 'chai';
import * as helper from '../reducer/helperFunctions';


describe('Helper Functions', () => {
  describe('Sum Credit', () => {
    it('adds up the credit', () => {
      expect(helper.sumCredit([0.2, 0.2])).to.eql(0.4)
    });
  });
  describe('changeCalculator', () => {
    it('works out the change required', () => {
      expect(helper.changeCalculator(0.15)).to.eql({
        '0.05': 1,
        '0.10': 1
      });
    });
  });
  describe('checkFloat', () => {
    it('returns true if float has enough change to dispense', () => {
      const change = {
        '0.5': 1,
        '0.10': 1
      };
      const float = {
        '0.5': 5,
        '0.10': 5,
        '0.20': 5,
        '0.50': 10,
        '1': 20
      };
      expect(helper.checkFloat(change, float)).to.equal(true);
    });
    it('returns false if float has not got enough change to dispense', () => {
      const change = {
        '0.5': 1,
        '0.10': 1
      };
      const float = {
        '0.5': 0,
        '0.10': 0,
        '0.20': 5,
        '0.50': 10,
        '1': 20
      };
      expect(helper.checkFloat(change, float)).to.equal(false);
    });
  });
  describe('floatMinusChange', () => {
    it('returns an updated version of float', () => {
      const change = {
        '0.05': 1,
        '0.10': 1
      };
      const float = {
        '0.05': 5,
        '0.10': 5,
        '0.20': 5,
        '0.50': 10,
        '1': 20
      };
      expect(helper.floatMinusChange(change, float)).to.eql({
        '0.05': 4,
        '0.10': 4,
        '0.20': 5,
        '0.50': 10,
        '1': 20
      });
    });
  });
  describe('addCreditToFloat', () => {
    it('returns an updated version of float', () => {
      const credit = [0.10, 0.10];
      const float = {
        '0.05': 5,
        '0.10': 5,
        '0.20': 5,
        '0.50': 10,
        '1': 20
      };
      expect(helper.addCreditToFloat(credit, float)).to.eql({
        '1': 20,
        '0.10': 7,
        '0.20': 5,
        '0.05': 5,
        '0.50': 10
      });
    });
  });
});
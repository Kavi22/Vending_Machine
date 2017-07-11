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
});
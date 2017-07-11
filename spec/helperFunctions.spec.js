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
});
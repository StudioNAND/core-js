import {
  validURLS,
  invalidURLS,
} from '../constants';
import isURL from '../isURL';

describe('test url validation', () => {
  describe('test if valid urls are recognized', () => {
    validURLS.forEach((url) => {
      it(`${url} is valid`, () => {
        expect(isURL(url)).toBe(true);
      });
    });
  });
  describe('test if invalid urls are rejected', () => {
    invalidURLS.forEach((url) => {
      it(`${url} is invalid`, () => {
        expect(isURL(url)).toBe(false);
      });
    });
  });
});

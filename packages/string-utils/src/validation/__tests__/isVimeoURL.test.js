import {
  validURLS,
  invalidURLS,
  youtubeURLS,
  notSupportedURLS,
  vimeoURLS,
} from '../constants';
import isVimeoURL from '../isVimeoURL';

describe('test url validation', () => {
  describe('test if valid vimeo urls are recognized ', () => {
    vimeoURLS.forEach((url) => {
      it(`${url} is invalid`, () => {
        expect(isVimeoURL(url)).toBe(true);
      });
    });
  });
  describe('test if invalid urls are rejected from vimeo validation', () => {
    [...validURLS, ...invalidURLS, ...youtubeURLS, ...notSupportedURLS].forEach((url) => {
      it(`${url} is invalid`, () => {
        expect(isVimeoURL(url)).toBe(false);
      });
    });
  });
});

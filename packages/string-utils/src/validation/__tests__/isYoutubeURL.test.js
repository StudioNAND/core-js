import {
  validURLS,
  invalidURLS,
  youtubeURLS,
  notSupportedURLS,
  vimeoURLS,
} from '../constants';
import isYoutubeURL from '../isYoutubeURL';

describe('test url validation', () => {
  describe('test if youtube urls are recognized', () => {
    youtubeURLS.forEach((url) => {
      it(`${url} is valid`, () => {
        expect(isYoutubeURL(url)).toBe(true);
      });
    });
  });
  describe('test if invalid urls are rejected from youtube validation', () => {
    [...validURLS, ...invalidURLS, ...vimeoURLS, ...notSupportedURLS].forEach((url) => {
      it(`${url} is invalid`, () => {
        expect(isYoutubeURL(url)).toBe(false);
      });
    });
  });
});

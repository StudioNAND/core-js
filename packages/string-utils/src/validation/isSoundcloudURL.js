//FIXME: write tests and make proper regex for testing for soundcloud provider
export function isSoundcloud(url) {
  return url.indexOf('soundcloud') > -1 && isUrl(url);
}

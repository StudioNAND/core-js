//FIXME: write tests and make proper regex for testing for soundcloud provider
const isSoundcloudURL = (url) => {
  return url.indexOf('soundcloud') > -1 && isUrl(url);
}

export default isSoundcloudURL;
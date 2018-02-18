import isURL from './isURL';

/**
 * This function currently only doesn `isURL` and `.indexOf('soundcloud')`.
 * 
 * ##### FIXME: write tests and make proper regex for testing soudcloud urls.
 * @memberof StringUtils
 * @param  {String} url to validate
 * @return {Boolean} is valid soundcloud url
 */
const isSoundcloudURL = (url) => {
  return url.indexOf('soundcloud') > -1 && isURL(url);
}

export default isSoundcloudURL;
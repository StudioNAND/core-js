/**
 * This function validates if a string is a valid youtube url
 * @memberof StringUtils
 * @function isYoutubeURL
 * @param  {String} url to validate
 * @return {Boolean} true if valid youtube url 
 */
const isYoutubeURL = (url) => {
  return /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/.test(url);
}

export default isYoutubeURL;
/**
 * This function validates if a string is a valid vimeo url
 * @memberof StringUtils
 * @param  {String} url to validate
 * @return {Boolean} is valid vimeo url
 */
const isVimeoURL = (url) => {
  return /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/g.test(url);
}

export default isVimeoURL;

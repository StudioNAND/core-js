/**
 * This function transform the first letter of a string to an uppercase letter.
 * @memberof StringUtils
 * @param  {String} string to be capitalized
 * @return {String} capitalized string
 */
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalize;

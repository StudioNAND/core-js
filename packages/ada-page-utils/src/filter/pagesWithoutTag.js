/**
 * This function uses `tag` to return a filter function that returns `true` if a page does not have that tag.
 * @memberof AdaPageUtils
 * @property {string} tag
 * @returns {function} a filter function which can be used in Array.filter()
 */

 const pagesWithoutTag = tag => page => page.tags && (page.tags.indexOf(tag) === -1);

export default pagesWithoutTag;

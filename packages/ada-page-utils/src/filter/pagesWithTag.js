/**
 * This function uses `tag` to return a filter function that returns `true` if a page has that tag.
 * @property {string} tag
 * @returns {function} a filter function which can be used in Array.filter()
 */

const pagesWithTag = tag => page => page.tags && (page.tags.indexOf(tag) !== -1);

export default pagesWithTag;

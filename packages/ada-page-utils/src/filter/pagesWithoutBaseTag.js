
/**
 * This function uses `baseTag` to return a filter function that returns `true` if none of page's tags (partially) contain `baseTag`.
 * @memberof AdaPageUtils
 * @property {string} baseTag
 * @returns {function} a filter function which can be used in Array.filter()
 */

const pagesWithOutBaseTag = baseTag => (page) => {
  const correspondingTags = (page.tags && page.tags.filter(f => f.includes(baseTag))) || [];
  return correspondingTags.length === 0;
};

export default pagesWithOutBaseTag;

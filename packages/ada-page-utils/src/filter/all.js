/**
 * This function takes an array of one or more filter functions and returns a filter function that returns `true` if all of them are `true`.
 * @property {array} filterFunctions
 * @returns {function} a filter function which can be used in Array.filter()
 */

const all = filterFunctions => (page) => {
  const isTrue = filterFunctions.reduce((p, c) => {
    if (!p) {
      return false;
    }
    return c(page);
  }, true,
);
  return isTrue;
};

export default all;

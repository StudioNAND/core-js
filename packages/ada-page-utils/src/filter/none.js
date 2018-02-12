/**
 * This function takes an array of one or more filter functions and returns a filter function that returns `false` if any of them is `true`.
 * @property {array} filterFunctions
 * @returns {function} a filter function which can be used in Array.filter()
 */

const none = filterFunctions => (page) => {
  const isTrue = filterFunctions.reduce((p, c) => {
    if (p) {
      return true;
    }
    return c(page);
  }, false,
);
  return !isTrue;
};


export default none;

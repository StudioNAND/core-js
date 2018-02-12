/**
 * This function adds one to its input.
 * @returns {number} that number, plus one
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

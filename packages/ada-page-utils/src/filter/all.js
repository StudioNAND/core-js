// this function takes one or more functions and returns false if any of them returns false
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

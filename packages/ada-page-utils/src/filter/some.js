// this function takes one or more functions and returns true if any of them returns true
const some = filterFunctions => (page) => {
  const isTrue = filterFunctions.reduce((p, c) => {
    if (p) {
      return true;
    }
    return c(page);
  }, false,
);
  return isTrue;
};


export default some;

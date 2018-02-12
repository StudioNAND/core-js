// this function takes one or more functions and returns true if all of them are false
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

/**
 * @memberof AdaPageUtils
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
const sortPageAlphabetical = (pageA, pageB) => {
  // console.log('sortPageAlphabetical');
  if (pageA.title.toLowerCase() < pageB.title.toLowerCase()) return -1;
  if (pageA.title.toLowerCase() > pageB.title.toLowerCase()) return 1;
  return 0;
};

export default sortPageAlphabetical;

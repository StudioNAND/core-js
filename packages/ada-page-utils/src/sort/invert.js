/**
 * @memberof AdaPageUtils
 * @param  {[type]}
 * @return {[type]}
 */
const invert = sortFunction => (pageA, pageB) => sortFunction(pageA, pageB) * -1;

export default invert;

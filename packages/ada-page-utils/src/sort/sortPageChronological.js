import moment from 'moment';
/**
 * @memberof AdaPageUtils
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
const sortPageChronological = (pageA, pageB) => {
  // console.log('sortPageChronological');
  // this function is used to sort the cards inside each group
  const hasStartDateA = pageA.startDate && pageA.startDate !== '';
  const hasStartDateB = pageB.startDate && pageB.startDate !== '';
  const aDate = moment(hasStartDateA ? pageA.startDate : (pageA.createdAt || undefined));
  const bDate = moment(hasStartDateB ? pageB.startDate : (pageB.createdAt || undefined));
  if (aDate < bDate) return -1;
  if (aDate > bDate) return 1;
  return 0;
};

export default sortPageChronological;

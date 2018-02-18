import moment from 'moment';

/**
 * This function uses `dateAccessor` function to get a date, parses it with `moment()` and returns a function that returns `true` if the resulting date lies before the current date.
 * @memberof AdaPageUtils
 * @property {function} dateAccessor
 * @returns {function} a filter function which can be used in Array.filter()
 */

const pagesWithDateBeforeToday = dateAccessor => page => moment(dateAccessor(page)) >= moment();

export default pagesWithDateBeforeToday;

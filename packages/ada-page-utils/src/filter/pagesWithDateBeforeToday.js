import moment from 'moment';

const pagesWithDateBeforeToday = dateAccessor => page => moment(dateAccessor(page)) >= moment();

export default pagesWithDateBeforeToday;

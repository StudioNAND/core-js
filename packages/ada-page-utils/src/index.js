/**
 * @namespace  AdaPageUtils
 */
import {
  invert,
  sortPageAlphabetical,
  sortPageChronological,
} from './sort';
import {
  pagesWithDateBeforeToday,
  pagesWithTag,
  pagesWithoutTag,
  pagesWithBaseTag,
  pagesWithoutBaseTag,
  all,
  some,
  none,
} from './filter';

export default {
  pagesWithDateBeforeToday,
  pagesWithTag,
  pagesWithoutTag,
  pagesWithBaseTag,
  pagesWithoutBaseTag,
  all,
  some,
  invert,
  sortPageAlphabetical,
  sortPageChronological,
};

const pagesWithoutTag = tag => page => page.tags && (page.tags.indexOf(tag) === -1);

export default pagesWithoutTag;


const pagesWithBaseTag = baseTag => (page) => {
  const correspondingTags = page.tags && page.tags.filter(f => f.includes(baseTag));
  return correspondingTags.length > 0;
};

export default pagesWithBaseTag;

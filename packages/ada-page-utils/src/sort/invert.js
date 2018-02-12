
const invert = sortFunction => (pageA, pageB) => sortFunction(pageA, pageB) * -1;

export default invert;

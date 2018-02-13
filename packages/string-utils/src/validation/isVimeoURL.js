const isVimeoURL = (url) => {
  return /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/g.test(url);
}

export default isVimeoURL;

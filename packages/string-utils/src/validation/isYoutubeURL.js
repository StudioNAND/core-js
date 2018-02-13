const isYoutubeURL = (url) => {
  return /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/.test(url);
}

export default isYoutubeURL;
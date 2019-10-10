


// only accounts for height, but returns true when any part of the element is in the viewport:
function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  return ((top > 0 || bottom > 0) && top < vHeight);
}
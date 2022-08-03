
const execute = callback => {
  if (typeof callback === 'function') {
    callback()
  }
}

const exists = function(el) {
  return (el.length > 0)
};

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  }

  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);

  const floatTransitionDuration = parseFloat(transitionDuration);
  const floatTransitionDelay = parseFloat(transitionDelay);

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];

  return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * 1000;
}

const reflow = element => element.offsetHeight

export {
  execute,
  exists,
  getTransitionDurationFromElement,
  reflow
};

import $$ from '@utilities/selectors';
import { exists } from '@utilities/helpers'

const LazyLoad = function LazyLoad()
{
  const images = $$.body.querySelectorAll('[data-lazy]');
  if (!exists(images)) { return; }

  const options = {
    threshold: 0.5
  };

  const preloadImage = function preloadImage(img) {
    const src = img.dataset.lazy;
    img.src = src;
    img.classList.add('loaded');
  };

  const lazyLoad = new IntersectionObserver((entries, lazyLoad) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        lazyLoad.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach(image => {
    lazyLoad.observe(image);
  });
}();

export default LazyLoad;

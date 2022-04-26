import $$ from '@utilities/selectors';
import { exists } from '@utilities/helpers'

const LazyLoad = function LazyLoad()
{
  function lazyLoad() {
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
  }

  function lateLoad() {
    const images = $$.body.querySelectorAll('[data-lazy-late]');
    if (!exists(images)) { return; }

    images.forEach(image => {
      image.src = image.dataset.lazyLate;
    });
  }

  lazyLoad();
  lateLoad();
}();

export default LazyLoad;

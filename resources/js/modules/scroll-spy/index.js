import $$ from '@utilities/selectors';

const contactIndex = 4;

const checkPosition = () => {
  const fromTop = window.scrollY + 1;

  $$.navItems
    .forEach((link, index) => {
      if (link.hash === undefined || link.hash.length < 1) { return; }

      const section = document.querySelector(link.hash);

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (index === contactIndex) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } else  {
        if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
}

const ScrollSpy = function ScrollSpy() {
  window.addEventListener('scroll', _.throttle(checkPosition, 200));
}();

export default ScrollSpy;
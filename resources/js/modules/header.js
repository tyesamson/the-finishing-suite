const ClassName = {
  ACTIVE: 'active',
  BACKGROUND: 'header-bg'
}

const HeaderConfig = {
  duration: 30_000,
  transition: 2_000
}

export class Header {
  _slides = [].slice.call(document.getElementsByClassName(ClassName.BACKGROUND));

  constructor() {
    setInterval(() => {
      this._next();
    }, HeaderConfig.duration);
  }

  _getNextSlide(activeSlide) {
    const activeIndex = this._slides.indexOf(activeSlide);
    const nextIndex = (activeIndex + 1) % this._slides.length;
    return nextIndex === -1
      ? this._slides[this._slides.length - 1]
      : this._slides[nextIndex];
  }

  _next() {
    const activeSlide = document.getElementsByClassName(`${ClassName.BACKGROUND} ${ClassName.ACTIVE}`)[0];
    const nextSlide = this._getNextSlide(activeSlide);

    if (!activeSlide || !nextSlide) { return; }

    this._transition(activeSlide, nextSlide);
  }

  _transition(activeSlide, nextSlide) {
    nextSlide.classList.add(ClassName.ACTIVE);

    setTimeout(() => {
      activeSlide.classList.remove(ClassName.ACTIVE);
    }, HeaderConfig.transition);
  }

}

new Header();

export default Header;

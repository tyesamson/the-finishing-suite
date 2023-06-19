import { getTransitionDurationFromElement, reflow } from '@utilities/helpers'
import Swipe from '@utilities/swipe';

const DATA_KEY = 'tfs.services'
const EVENT_KEY = `.${DATA_KEY}`
const EVENT_DRAG_START = `dragstart${EVENT_KEY}`

const ClassName = {
  ACTIVE: 'active'
}

const Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
}

const services$$ = {
  carousel: {
    indicators: document.getElementsByClassName('services-list-indicator'),
    inner: document.getElementById('servicesInner'),
    next: document.getElementsByClassName('services-list-next'),
    prev: document.getElementsByClassName('services-list-prev'),
    slides: document.querySelectorAll('.services-slide'),
    slidePre: document.getElementById('servicesSlidePre'),
    slidesContainer: document.getElementById('servicesSlidesContainer')
  }
}

class ServicesCarousel {

  constructor() {
    this._isSliding =  false;
    this._swipeHelper = null;
    this._transitionDuration = getTransitionDurationFromElement(services$$.carousel.slidesContainer);

    this._addEventListeners();
  }

  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }

    super.dispose();
  }

  _addEventListeners() {
    const next = services$$.carousel.next;
    for (let i = 0; i < next.length; i++) {
      next[i].addEventListener('click', _ => this.next());
    }

    const prev = services$$.carousel.prev;
    for (let i = 0; i < prev.length; i++) {
      prev[i].addEventListener('click', _ => this.prev());
    }

    const indicators = services$$.carousel.indicators;
    for (let i = 0; i < indicators.length; i++) {
      const indicator = indicators[i];
      const slideNo = parseInt(indicator.dataset.slide, 10);
      indicator.addEventListener('click', _ => this.showSlide(target, slideNo));
    }

    if (Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    for (const slide of services$$.carousel.slides) {
      slide.addEventListener(EVENT_DRAG_START, e => e.preventDefault());
    }

    const swipeConfig = {
      leftCallback: () => this.prev(),
      rightCallback: () => this.next()
    };

    this._swipeHelper = new Swipe(services$$.carousel.inner, swipeConfig);
  }

  _doSlide(activeItem, nextItem, activeIndicator, nextIndicator, orderClassName, directionalClassName) {
    if (nextItem && nextItem.classList.contains(ClassName.ACTIVE)) {
      this._isSliding = false;
      return;
    }

    this._isSliding = true;

    nextItem.classList.add(orderClassName);

    reflow(nextItem);

    activeItem.classList.add(directionalClassName);
    nextItem.classList.add(directionalClassName);

    activeIndicator.classList.remove(ClassName.ACTIVE);
    nextIndicator.classList.add(ClassName.ACTIVE);

    const slidePreWidth = services$$.carousel.slidePre.offsetWidth; console.error('slidePreWidth', slidePreWidth);
    const nextItemOffset = nextItem.offsetLeft; console.error('nextItemOffset', nextItemOffset);
    const nextOffset = nextItemOffset - slidePreWidth; console.error('nextOffset', nextOffset);

    services$$.carousel.slidesContainer.style.left = `-${nextOffset}px`;

    setTimeout(() => {
      activeItem.classList.remove(ClassName.ACTIVE);
      nextItem.classList.add(ClassName.ACTIVE);

      this._isSliding = false;
    }, this._transitionDuration);
  }

  _getItemByDirection(direction, items, activeItem) {
    const activeIndex = items.indexOf(activeItem);
    const delta = direction === Direction.NEXT ? 1 : -1;
    const itemIndex = (activeIndex + delta) % items.length;

    return itemIndex === -1
      ? items[items.length - 1]
      : items[itemIndex];
  }

  _slide(direction) {
    const items = [].slice.call(services$$.carousel.slides);
    const activeItem = items.find(item => item.classList.contains(ClassName.ACTIVE));
    const nextItem = this._getItemByDirection(direction, items, activeItem);

    if (!activeItem && !nextItem) { return; }

    const indicators = [].slice.call(services$$.carousel.indicators);
    const activeIndicator = indicators.find(indicator => indicator.classList.contains(ClassName.ACTIVE));
    const nextIndicator = this._getItemByDirection(direction, indicators, activeIndicator);

    let directionalClassName;
    let orderClassName;

    if (direction === Direction.NEXT) {
      directionalClassName = ClassName.LEFT
      orderClassName = ClassName.NEXT;
    } else {
      directionalClassName = ClassName.RIGHT
      orderClassName = ClassName.PREV;
    }

    this._doSlide(activeItem, nextItem, activeIndicator, nextIndicator, orderClassName, directionalClassName);
  }

  next() {
    if (!this._isSliding) {
      this._slide(Direction.NEXT);
    }
  }

  prev() {
    if (!this._isSliding) {
      this._slide(Direction.PREV);
    }
  }

}

new ServicesCarousel();

export default ServicesCarousel;

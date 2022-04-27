import $$ from '@utilities/selectors';
import {
  getTransitionDurationFromElement,
  reflow
} from '@utilities/helpers'

const ClassName = {
  ACTIVE: 'active',
  CAROUSEL: 'carousel',
  INDICATOR: 'indicator',
  ITEM: 'carousel-item',
  LEFT: 'carousel-item-left',
  NEXT: 'carousel-item-next',
  PREV: 'carousel-item-prev',
  RIGHT: 'carousel-item-right',
  SHOW: 'show'
}

const Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
}

class Carousel  {

  constructor() {
    this._isSliding = false;

    this._addEventListeners();
  }



  // Private

  _addEventListeners() {
    const imagePrev = $$.portfolio.imagePrev;
    for (let i = 0; i < imagePrev.length; i++) {
      imagePrev[i].addEventListener('click', _ => this.prev());
    }

    const imageNext = $$.portfolio.imageNext;
    for (let i = 0; i < imageNext.length; i++) {
      imageNext[i].addEventListener('click', _ => this.next());
    }

    const indicators = $$.portfolio.indicators;
    for (let i = 0; i < indicators.length; i++) {
      const indicator = indicators[i];
      const slideNo = parseInt(indicator.dataset.slide, 10);
      const target = indicator.dataset.target;
      indicator.addEventListener('click', _ => this.showSlide(target, slideNo));
    }

    document.addEventListener('keyup', e => this._onKeyUp(e));
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

    const transitionDuration = getTransitionDurationFromElement(activeItem);

    setTimeout(() => {
      nextItem.classList.remove(directionalClassName, orderClassName);
      nextItem.classList.add(ClassName.ACTIVE);

      activeItem.classList.remove(ClassName.ACTIVE, orderClassName, directionalClassName);

      this._isSliding = false;
    }, transitionDuration);
  }

  _getItemByDirection(direction, items, activeItem) {
    const activeIndex = items.indexOf(activeItem);
    const delta = direction === Direction.PREV ? -1 : 1;
    const itemIndex = (activeIndex + delta) % items.length;

    return itemIndex === -1
      ? items[items.length - 1]
      : items[itemIndex];
  }

  _onKeyUp(event) {
    switch (event.key) {
      case 'Left':
      case 'ArrowLeft':
        this.prev();
        break;

      case 'Right':
      case 'ArrowRight':
        this.next();
        break;
    }
  }

  _slide(direction) {
    const activeCarousel = document.getElementsByClassName(`${ClassName.CAROUSEL} ${ClassName.SHOW}`)[0];
    const carouselItems = [].slice.call(activeCarousel.getElementsByClassName(ClassName.ITEM));

    if (carouselItems.length === 1) { return; }

    const activeItem = carouselItems.find(item => item.classList.contains(ClassName.ACTIVE));
    const nextItem = this._getItemByDirection(direction, carouselItems, activeItem);

    if (!activeItem && !nextItem) {
      return;
    }

    const carouselIndicators = [].slice.call(activeCarousel.getElementsByClassName(ClassName.INDICATOR));
    const activeIndicator = carouselIndicators.find(item => item.classList.contains(ClassName.ACTIVE));
    const nextIndicator = this._getItemByDirection(direction, carouselIndicators, activeIndicator);

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

  // Public
  //

  prev() {
    if (!this._isSliding) {
      this._slide(Direction.PREV);
    }
  }

  next() {
    if (!this._isSliding) {
      this._slide(Direction.NEXT);
    }
  }

  showSlide(target, slideNo) {
    if (this._isSliding) { return; }

    const activeCarousel = document.getElementById(target);
    const carouselItems = [].slice.call(activeCarousel.getElementsByClassName(ClassName.ITEM));
    const carouselIndicators = [].slice.call(activeCarousel.getElementsByClassName(ClassName.INDICATOR));

    const activeItem = carouselItems.find(item => item.classList.contains(ClassName.ACTIVE));
    const activeIndicator = carouselIndicators.find(item => item.classList.contains(ClassName.ACTIVE));

    const nextItem = carouselItems[slideNo - 1];
    const nextIndicator = carouselIndicators[slideNo - 1];

    const activeSlideNo = parseInt(activeItem.dataset.slide);

    let directionalClassName;
    let orderClassName;

    if (activeSlideNo < slideNo) {
      directionalClassName = ClassName.LEFT
      orderClassName = ClassName.NEXT;
    } else {
      directionalClassName = ClassName.RIGHT
      orderClassName = ClassName.PREV;
    }

    this._doSlide(activeItem, nextItem, activeIndicator, nextIndicator, orderClassName, directionalClassName);
  }

}

new Carousel();

export default Carousel;

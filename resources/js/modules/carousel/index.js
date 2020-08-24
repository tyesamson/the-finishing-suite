import $$ from '@utilities/selectors';

const ClassName = {
  ACTIVE: 'active',
  CAROUSEL: 'carousel',
  INDICATOR: 'indicator',
  ITEM: 'carousel-item',
  NEXT: 'carousel-item-next',
  PREV: 'carousel-item-prev',
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
  }

  _getItemByDirection(direction, items, activeItem) {
    const activeIndex = items.indexOf(activeItem);
    const delta = direction === Direction.PREV ? -1 : 1;
    const itemIndex = (activeIndex + delta) % items.length;

    return itemIndex === -1
      ? items[items.length - 1]
      : items[itemIndex];
  }

  _slide(direction) {
    const activeCarousel = document.getElementsByClassName(`${ClassName.CAROUSEL} ${ClassName.SHOW}`)[0];
    const carouselItems = [].slice.call(activeCarousel.getElementsByClassName(ClassName.ITEM));

    if (carouselItems.length === 1) { return; }

    const activeItem = carouselItems.find(item => item.classList.contains(ClassName.ACTIVE));
    const nextItem = this._getItemByDirection(direction, carouselItems, activeItem);

    const carouselIndicators = [].slice.call(activeCarousel.getElementsByClassName(ClassName.INDICATOR));
    const activeIndicator = carouselIndicators.find(item => item.classList.contains(ClassName.ACTIVE));
    const nextIndicator = this._getItemByDirection(direction, carouselIndicators, activeIndicator);

    let directionalClassName;
    let eventDirectionName;
    let orderClassName;

    if (direction === Direction.NEXT) {
      directionalClassName = ClassName.LEFT
      eventDirectionName = Direction.LEFT;
      orderClassName = ClassName.NEXT;
    } else {
      directionalClassName = ClassName.RIGHT
      eventDirectionName = Direction.RIGHT;
      orderClassName = ClassName.PREV;
    }

    if (nextItem && nextItem.classList.contains(ClassName.ACTIVE)) {
      this._isSliding = false;
      return;
    }

    this._isSliding = true;

    activeItem.classList.remove(ClassName.ACTIVE);
    activeIndicator.classList.remove(ClassName.ACTIVE);

    nextItem.classList.add(ClassName.ACTIVE);
    nextIndicator.classList.add(ClassName.ACTIVE);

    this._isSliding = false;
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
    const activeCarousel = document.getElementById(target);
    const carouselItems = [].slice.call(activeCarousel.getElementsByClassName(ClassName.ACTIVE));
    const carouselIndicators = [].slice.call(activeCarousel.getElementsByClassName(ClassName.INDICATOR));

    const activeItem = carouselItems.find(item => item.classList.contains(ClassName.ACTIVE));
    const activeIndicator = carouselIndicators.find(item => item.classList.contains(ClassName.ACTIVE));

    const nextItem = carouselItems[slideNo - 1];
    const nextIndicator = carouselIndicators[slideNo - 1];

    this._isSliding = true;

    activeItem.classList.remove(ClassName.ACTIVE);
    activeIndicator.classList.remove(ClassName.ACTIVE);

    nextItem.classList.add(ClassName.ACTIVE);
    nextIndicator.classList.add(ClassName.ACTIVE);

    this._isSliding = false;
  }

}

new Carousel();

export default Carousel;

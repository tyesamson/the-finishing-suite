import $$ from '@utilities/selectors';

const ClassName = {
  ACTIVE: 'active',
  NEXT: 'carousel-item-next',
  PREV: 'carousel-item-prev'
}

const Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
}

const Carousel = function Carousel() {

  // Declarations

  let _isSliding = false;

  // Private
  //

  function _addEventListeners() {
    const imagePrev = $$.portfolio.imagePrev;
    for (let i = 0; i < imagePrev.length; i++) {
      imagePrev[i].addEventListener('click', _ => prev());
    }

    const imageNext = $$.portfolio.imageNext;
    for (let i = 0; i < imageNext.length; i++) {
      imageNext[i].addEventListener('click', _ => next());
    }

    const indicators = $$.portfolio.indicators;
    for (let i = 0; i < indicators.length; i++) {
      const indicator = indicators[i];
      const slideNo = parseInt(indicator.dataset.slide, 10);
      const target = indicator.dataset.target;
      indicator.addEventListener('click', _ => showSlide(target, slideNo));
    }
  }

  function _getItemByDirection(direction, items, activeItem) {
    const activeIndex = items.indexOf(activeItem);
    const delta = direction === Direction.PREV ? -1 : 1;
    const itemIndex = (activeIndex + delta) % items.length;

    return itemIndex === -1
      ? items[items.length - 1]
      : items[itemIndex];
  }

  function _slide(direction) {
    const activeCarousel = document.getElementsByClassName('carousel in')[0];
    const carouselItems = [].slice.call(activeCarousel.getElementsByClassName('carousel-item'));

    if (carouselItems.length === 1) { return; }

    const activeItem = carouselItems.find(item => item.classList.contains('active'));
    const nextItem = _getItemByDirection(direction, carouselItems, activeItem);

    const carouselIndicators = [].slice.call(activeCarousel.getElementsByClassName('indicator'));
    const activeIndicator = carouselIndicators.find(item => item.classList.contains('active'));
    const nextIndicator = _getItemByDirection(direction, carouselIndicators, activeIndicator);

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
      _isSliding = false;
      return;
    }

    _isSliding = true;

    activeItem.classList.remove(ClassName.ACTIVE);
    activeIndicator.classList.remove(ClassName.ACTIVE);

    nextItem.classList.add(ClassName.ACTIVE);
    nextIndicator.classList.add(ClassName.ACTIVE);

    _isSliding = false;
  }

  // Public
  //

  function prev() {
    if (!_isSliding) {
      _slide(Direction.PREV);
    }
  }

  function next() {
    if (!_isSliding) {
      _slide(Direction.NEXT);
    }
  }

  function showSlide(target, slideNo) {
    const activeCarousel = document.getElementById(target);
    const carouselItems = [].slice.call(activeCarousel.getElementsByClassName('carousel-item'));
    const carouselIndicators = [].slice.call(activeCarousel.getElementsByClassName('indicator'));

    const activeItem = carouselItems.find(item => item.classList.contains('active'));
    const activeIndicator = carouselIndicators.find(item => item.classList.contains('active'));

    const nextItem = carouselItems[slideNo - 1];
    const nextIndicator = carouselIndicators[slideNo - 1];

    _isSliding = true;

    activeItem.classList.remove(ClassName.ACTIVE);
    activeIndicator.classList.remove(ClassName.ACTIVE);

    nextItem.classList.add(ClassName.ACTIVE);
    nextIndicator.classList.add(ClassName.ACTIVE);

    _isSliding = false;
  }

  // Init
  //

  _addEventListeners();
}()

export default Carousel

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
    $$.portfolio.imagePrev.addEventListener('click', _ => prev());
    $$.portfolio.imageNext.addEventListener('click', _ => next());
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
    // const activeItemIndex = carouselItems.indexOf(activeItem);
    const nextItem = _getItemByDirection(direction, carouselItems, activeItem);

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

    // nextItem.classList.add(orderClassName);
    // activeItem.classList.add(directionalClassName);
    // nextItem.classList.add(directionalClassName);

    activeItem.classList.remove(ClassName.ACTIVE);
    nextItem.classList.add(ClassName.ACTIVE);

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

  // Init
  //

  _addEventListeners();
}()

export default Carousel

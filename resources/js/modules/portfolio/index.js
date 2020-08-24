import $$ from '@utilities/selectors';
import {
  getTransitionDurationFromElement,
  reflow
} from '@utilities/helpers'

const CLASS_NAME_BACKDROP = 'portfolio-backdrop';
const CLASS_NAME_OPEN = 'portfolio-open';
const CLASS_NAME_SHOW = 'show';

class Portfolio {

  // Constructor

  constructor() {
    this._backdrop = null;
    this._container = $$.portfolio.slidesContainer;
    this._currentSlideNo = -1;
    this._element = $$.portfolio.slides;
    this._isShown = false;
    this._isSlideTransitioning = false;
    this._isTransitioning = false;
    this._slideCount = 0;

    this._addEventListeners();
  }



  // Public

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }

    this._isShown = false;
    this._isTransitioning = true;

    const transitionDuration = getTransitionDurationFromElement(this._container);

    this._container.classList.remove(CLASS_NAME_SHOW);
    this._element.classList.remove(CLASS_NAME_SHOW);

    setTimeout(() => {
      this._hideCurrentGridItem();

      this._element.style.display = 'none'
      this._isTransitioning = false;

      this._showBackdrop(() => {
        $$.body.classList.remove(CLASS_NAME_OPEN);
      });
    }, transitionDuration);
  }

  show(gridItem) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    this._isTransitioning = true;
    this._isShown = true;

    this._showBackdrop(() => {
      this._hideCurrentGridItem();
      this._showGridItem(gridItem);
    });
  }



  // Private

  _addEventListeners() {
    $$.portfolio.slides.addEventListener('click', (e) => {
      if (e.target === $$.portfolio.slides) {
        this.hide();
      }
    });
    $$.portfolio.close.addEventListener('click', _ => this.hide());
    $$.portfolio.next.addEventListener('click', _ => this._onPortfolioNext());
    $$.portfolio.prev.addEventListener('click', _ => this._onPortfolioPrev());

    const gridItems = $$.portfolio.grid.children;
    this._slideCount = gridItems.length;
    for (let i = 0; i < gridItems.length; i++) {
      const gridItem = gridItems[i];

      gridItem.addEventListener('click', (e) => {
        this.show(gridItem);
      });
    }
  }

  _hideCurrentGridItem() {
    if (this._currentSlideNo < 1) { return; }

    document.getElementById(`portfolioCarousel${this._currentSlideNo}`).classList.remove(CLASS_NAME_SHOW);
    document.getElementById(`portfolioText${this._currentSlideNo}`).classList.remove(CLASS_NAME_SHOW);

    this._currentSlideNo = -1;
  }

  _onPortfolioNext() {
    let next = this._currentSlideNo + 1;
    if (next > this._slideCount) { next = 1; }
    this._showSlideNo(next);
  }

  _onPortfolioPrev() {
    let prev = this._currentSlideNo - 1;
    if (prev < 1) { prev = this._slideCount; }
    this._showSlideNo(prev);
  }

  _removeBackdrop() {
    this._backdrop.parentNode.removeChild(this._backdrop)
    this._backdrop = null
  }

  _showBackdrop(callback) {
    if (this._isShown) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = CLASS_NAME_BACKDROP;

      document.body.appendChild(this._backdrop);
      $$.body.classList.add(CLASS_NAME_OPEN);

      reflow(this._backdrop);

      this._backdrop.classList.add(CLASS_NAME_SHOW);

      const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
      setTimeout(callback, backdropTransitionDuration + 5);
    } else {
      this._backdrop.classList.remove(CLASS_NAME_SHOW);

      const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

      setTimeout(() => {
        this._removeBackdrop();
        callback();
      }, backdropTransitionDuration);
    }
  }

  _showGridItem(gridItem) {
    const slideNo = parseInt(gridItem.id.substring(13), 10);
    this._showSlideNo(slideNo);
  }

  _showSlideNo(slideNo) {
    if (this._isSlideTransitioning) { return; }

    if (this._currentSlideNo === slideNo) { return; }

    this._isSlideTransitioning = true;

    if (this._currentSlideNo > 0) {
      this._hideCurrentGridItem();
    }

    document.getElementById(`portfolioCarousel${slideNo}`).classList.add(CLASS_NAME_SHOW);
    document.getElementById(`portfolioText${slideNo}`).classList.add(CLASS_NAME_SHOW);

    if (this._currentSlideNo < 1){
      this._element.style.display = 'block';

      reflow(this._element);

      const transitionDuration = getTransitionDurationFromElement(this._container);

      this._element.classList.add(CLASS_NAME_SHOW);
      this._container.classList.add(CLASS_NAME_SHOW);

      setTimeout(() => {
        this._currentSlideNo = slideNo;
        this._isTransitioning = false;
        this._isSlideTransitioning = false;
      }, transitionDuration);
    } else {
      this._currentSlideNo = slideNo;
    }
  }

}

new Portfolio();

export default Portfolio;

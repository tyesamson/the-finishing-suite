import $$ from '@utilities/selectors';

// Need to add .portfolio-open class to body when open
// Add .visible to #portfolioSlides

let slideCount = 0;
let currentSlide = -1;

function closePortfolio() {
  hideSlide(currentSlide);
  $$.body.classList.remove('portfolio-open');
  $$.portfolio.slides.classList.remove('visible');
}

const getSlideId = (slideNo) => `portfolioSlide${slideNo}`;

function hideSlide(slideNo) {
  document.getElementById(getSlideId(slideNo)).classList.remove('block');
  currentSlide = -1;
}

function onGridItemClicked(item) {
  showPortfolio();
  const slideNo = item.id.substring(13);

  if (currentSlide === slideNo) { return; }

  showSlide(slideNo);
}

function showPortfolio() {
  $$.body.classList.add('portfolio-open');
  $$.portfolio.slides.classList.add('visible');
}

function showSlide(slideNo) {
  document.getElementById(getSlideId(slideNo)).classList.add('block');
  currentSlide = slideNo;
}

const Portfolio = function Portfolio() {
  $$.portfolio.close.addEventListener('click', _ => closePortfolio());

  const gridItems = $$.portfolio.grid.children;

  slideCount = gridItems.length;

  for (let i = 0; i < gridItems.length; i++) {
    const gridItem = gridItems[i];

    gridItem.addEventListener('click', (e) => {
      onGridItemClicked(gridItem);
    });
  }
}();

export default Portfolio;

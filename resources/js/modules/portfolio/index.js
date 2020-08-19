import $$ from '@utilities/selectors';

let slideCount = 0;
let currentSlide = -1;

function closePortfolio() {
  hideSlide(currentSlide);
  $$.body.classList.remove('portfolio-open');
  $$.portfolio.slides.classList.remove('block');
}

function hideSlide(slideNo) {
  document.getElementById(`portfolioCarousel${slideNo}`).classList.remove('in');
  document.getElementById(`portfolioText${slideNo}`).classList.remove('in');
  currentSlide = -1;
}

function onGridItemClicked(item) {
  showPortfolio();
  const slideNo = parseInt(item.id.substring(13), 10);
  showSlide(slideNo);
}

function onPortfolioNext() {
  let next = currentSlide + 1;
  if (next > slideCount) { next = 1; }
  showSlide(next);
}

function onPortfolioPrev() {
  let prev = currentSlide - 1;
  if (prev < 1) { prev = slideCount; }
  showSlide(prev);
}

function showPortfolio() {
  $$.body.classList.add('portfolio-open');
  $$.portfolio.slides.classList.add('block');
}

function showSlide(slideNo) {
  if (currentSlide === slideNo) { return; }

  if (currentSlide > 0) { hideSlide(currentSlide); }

  document.getElementById(`portfolioCarousel${slideNo}`).classList.add('in');
  document.getElementById(`portfolioText${slideNo}`).classList.add('in');
  currentSlide = slideNo;
}

const Portfolio = function Portfolio() {
  $$.portfolio.close.addEventListener('click', _ => closePortfolio());
  $$.portfolio.next.addEventListener('click', _ => onPortfolioNext());
  $$.portfolio.prev.addEventListener('click', _ => onPortfolioPrev());

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

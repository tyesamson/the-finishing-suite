const $$ = {
  body          : document.querySelector('body'),
  nav           : document.getElementById('nav'),
  navItems      : document.querySelectorAll('#nav a'),
  navToggle     : document.getElementById('nav-toggle'),
  carousel: {
    item        : document.querySelectorAll('.carousel-item')
  },
  header: {
    backgrounds : document.querySelectorAll('.header .bg')
  },
  portfolio: {
    close       : document.getElementById('portfolioClose'),
    grid        : document.getElementById('portfolioGrid'),
    images      : document.getElementById('portfolioImages'),
    imageNext   : document.getElementsByClassName('portfolio-image-next'),
    imagePrev   : document.getElementsByClassName('portfolio-image-prev'),
    indicators  : document.getElementsByClassName('indicator'),
    next        : document.getElementById('portfolioNext'),
    prev        : document.getElementById('portfolioPrev'),
    slides      : document.getElementById('portfolioSlides'),
    slidesContainer : document.getElementById('portfolioSlidesContainer')
  },
  sections      : document.querySelectorAll('section')
}

export default $$

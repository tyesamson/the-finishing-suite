const $$ = {
  body      : document.querySelector('body'),
  nav       : document.getElementById('nav'),
  navItems  : document.querySelectorAll('#nav a'),
  navToggle : document.getElementById('nav-toggle'),
  portfolio: {
    close   : document.getElementById('portfolioClose'),
    grid    : document.getElementById('portfolioGrid'),
    next    : document.getElementById('portfolioNext'),
    prev    : document.getElementById('portfolioPrev'),
    slides  : document.getElementById('portfolioSlides')
  },
  sections  : document.querySelectorAll('section')
}

export default $$

const servicesSwiper = new Swiper('.services-swiper', {
  centeredSlides: true,
  autoHeight: false,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: '.swiper-pagination',
    clickable: false
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: 2
    },
    1200: {
      centeredSlides: true,
      slidesPerView: 3
    }
  }
});

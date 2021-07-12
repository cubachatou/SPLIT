let main_slider = new Swiper(".main-slider", {
  // effect: "fade",
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  preloadImages: false,
  lazy: true,
  pagination: {
    el: ".main-slider__pagination",
    type: "bullets",
    clickable: true,
  },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});
//======================================================================================
let popular_swiper = new Swiper(".popular__swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: ".popular__navigation .popular__arrow_r",
    prevEl: ".popular__navigation .popular__arrow_l",
  },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
//======================================================================================
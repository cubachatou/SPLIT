//======================================================================================
let mainTextSlider = new Swiper(".main-slider__text-slider", {
  speed: 800,
  spaceBetween: 600,
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

let mainImageSlider = new Swiper(".main-slider__img-slider", {
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  speed: 800,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  // pagination: {
  //   el: ".main-slider__pagination",
  //   type: "bullets",
  //   clickable: true,
  // },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});

mainTextSlider.controller.control = mainImageSlider;
mainImageSlider.controller.control = mainTextSlider;
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
  lazy: {
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
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
let productMainSlider = new Swiper(".product__slider_big", {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 4,
});
let productGallerySlider = new Swiper(".product__slider_gallery", {
  observer: true,
  observeParents: true,
  spaceBetween: 10,
  // centeredSlides: true,
  slidesPerView: 4,
  // touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  navigation: {
    nextEl: ".gallery-product__arrow_next",
    prevEl: ".gallery-product__arrow_prev",
  },
});
productMainSlider.controller.control = productGallerySlider;
productGallerySlider.controller.control = productMainSlider;

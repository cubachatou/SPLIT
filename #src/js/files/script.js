let main_slider = new Swiper(".main-slider", {
  // effect: "fade",
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  preloadImages: false,
  lazy: true,
  // Dotts
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
  // Arrows
  // navigation: {
  //   nextEl: ".about__more .more__item_next",
  //   prevEl: ".about__more .more__item_prev",
  // },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});

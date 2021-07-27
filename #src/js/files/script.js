$(document).ready(function () {
  $(".portfolio__item").click(function (e) {
    e.preventDefault();
    $(".portfolio__item").removeClass("_active");
    $(this).addClass("_active");
    let id = $(this).attr("data-id");
    if (id == 0) {
      $(".portfolio__img-block").show();
      return true;
    }
    $(".portfolio__img-block").hide();
    $(".portfolio__item_id_" + id).show();
  });
});
//=====================================================================================
// let folioItem = document.querySelector(".portfolio__item");
// if (folioItem != null) {
//   folioItem.addEventListener("click", function (e) {
//     e.preventDefault();
//     folioItem.classList.add("_active");
//   });
// };
//=====================================================================================
let langMenu = document.querySelector(".menu__lang-dropdown");
if (langMenu != null) {
  let langList = document.querySelector(".lang-dropdown__list");
	langMenu.addEventListener("click", function (e) {
    langMenu.classList.toggle("_active");
    langList.classList.toggle("_active");
  });
};
//======================================================================================
lightGallery(document.getElementById("animated-thumbnails"), {
  thumbnail: true,
  mode: "lg-fade",
});
//======================================================================================
let mainTextSlider = new Swiper(".main-slider__text-slider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
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
  speed: 800,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
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
  slidesPerGroup: 4,
  spaceBetween: 30,
  speed: 800,
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
      slidesPerGroup: 2,
      spaceBetween: 8,
    },
    540: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
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
  slidesPerView: 4,
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
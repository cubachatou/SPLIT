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
//=====================================================================================
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
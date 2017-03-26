var swiperSlider = document.querySelector(".slider");
var swiperBlockTitle = document.querySelector(".swiper-block__title");
var ebdContainerCol = document.querySelector(".ebd__block__container__col");
var dptContainerCol = document.querySelector(".departamento__block__container__col");

function transform(item, offset) {

    t = document.querySelector(item).offsetTop;
    t = ypos - t;
    t = t + offset;

    return t;

}

window.addEventListener("scroll", function() {
    ypos = window.pageYOffset;
    swiperSlider.style.transform = "translate3d(0px, -" + ypos / 2.5 + "px, 0px)";
    swiperBlockTitle.style.transform = "translate3d(0px, -" + ypos / 2 + "px, 0px)";

    ebd = transform('.ebd', 190);
    ebd <= 0 ? ebdContainerCol.style.transform = "translate3d(" + ebd + "px, 0px, 0px)" : false;

    d = document.querySelector(".departamento").offsetTop;
    d = ypos - d;
    d = d + 190;

    if(d <= 0) {
        dptContainerCol.style.transform = "translate3d(" + Math.abs(d) + "px, 0px, 0px)";
    }

});  
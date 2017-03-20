$(document).ready(function(){

	//initialize swiper when document ready
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'fade',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
		centeredSlides: true,
    autoplay: 3200,
    autoplayDisableOnInteraction: false,
		grabCursor: true
  });

  $(".navbar__container__col__navbar__items ul").mouseenter(function() {
    $(".navbar__container__col__navbar__items ul li").css("opacity", "0.5");
  });

  $(".navbar__container__col__navbar__items ul").mouseleave(function() {
    $(".navbar__container__col__navbar__items ul li").css("opacity", "1");
  });

	$(".btn-menu").click(function(){
			$('.megamenu').fadeIn().css('display', 'flex');
			$('body').css('overflow', 'hidden');
	});

	$('.megamenu').on('click', function(){
	    $(".megamenu").fadeToggle(200);
			$('body').css('overflow', 'auto');
	    open = false;
	});

	$('.btn-pray').magnificPopup({
	  removalDelay: 300,
	  mainClass: 'mfp-fade',
	  items: {
	      src: '#--popup__pray',
	      type: 'inline'
	  },
	  closeBtnInside: true
	});

});

var $ = document;
var btnMenu = $.querySelector(".btn-menu");

btnMenu.addEventListener("click", function() {
	if(btnMenu.textContent == "Menu") {
		btnMenu.textContent = "Fechar";
	} else {
		btnMenu.textContent = "Menu";
	}
});

var body = document.querySelector("body");
var btnMenu = document.querySelector(".btn-menu");
var megaMenu = document.querySelector(".megamenu");
var sliderSection = document.querySelector(".slider");

btnMenu.addEventListener("click", function() {

    this.classList.toggle("btn--active");

    /* megamenu closed */
	if(this.textContent == "Menu") {
		this.textContent = "Fechar";
        megaMenu.style.visibility = "visible";
        megaMenu.classList.add("appear");
        body.classList.add("overflow--hidden");
	} 

    /* megamenu open */
    else { 
        this.textContent = "Menu";
        megaMenu.classList.remove("appear");
        megaMenu.style.visibility = "hidden";
        body.classList.remove("overflow--hidden");
    }

});

var ypos, image;

window.addEventListener("scroll", function() {
    ypos = window.pageYOffset;
    s = sliderSection.style.opacity = 1 - ypos / 1000;
    console.log(s);
});   
var body = document.querySelector("body");
var btnMenu = document.querySelector(".btn-menu");
var megaMenu = document.querySelector(".megamenu");

btnMenu.addEventListener("click", function() {

    this.classList.toggle("btn--active");

    /* megamenu closed */
	if(this.textContent == "Menu") {
		this.textContent = "Fechar";
        megaMenu.style.display = "flex";
        megaMenu.classList.add("appear");
        body.style.overflow = "hidden";
	} 
    /* megamenu open */
    else { 
        this.textContent = "Menu";
        megaMenu.style.display = "none";
        megaMenu.classList.remove("appear");
        body.style.overflow = "auto";
    }

});
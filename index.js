const menuIcon= document.getElementById("menu-icon");
const closeIcon= document.getElementById("close-icon");
const mobileMenu= document.querySelector(".mobile-menu");
const overlay= document.querySelector(".overlay");

menuIcon.addEventListener('click' , function (){
   
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute('aria-hidden', 'false');
    overlay.classList.add("active");
});

closeIcon.addEventListener('click', function(){

    mobileMenu.setAttribute('aria-hidden', 'true');
    overlay.classList.remove("active");
    mobileMenu.classList.remove("open");
});
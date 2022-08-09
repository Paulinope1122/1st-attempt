var backdrop = document.querySelector(".backdrop");
var toogle = document.querySelector(".toogle .tg-omori");
var mobileNav = document.querySelector(".mobile-nav");
var closeIcon = document.querySelector('.close-icon')

// MainNav.addEventListener("click", function(){
//     MainNav.style.display = "block"
// } );
// console.dir(backdrop);
backdrop.addEventListener("click", closemodal);
closeIcon.addEventListener('click', closemodal)

function closemodal(){
    backdrop.style.display = "none";
    mobileNav.style.display = "none";
}
mobileNav.addEventListener("click", closemodal);

toogle.addEventListener("click", function() {
    mobileNav.style.display = "block";
    backdrop.style.display = "block";
    // toggle.classList.replace()

});
// nav-scroll
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-150px";
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    // hamburger rotated
    hamburger.classList.toggle("active");
    
    // mobile-slide
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        document.getElementsByTagName('body')[0].style = 'overflow-y: scroll';
    } else {
        navMenu.classList.add('active')
        document.getElementsByTagName('body')[0].style = 'overflow-y: hidden';

    }



  /* Toggle aria-expanded value */
//   let menuOpen = navMenu.classList.contains("active");
//   console.log(menuOpen)
//   let newMenuOpenStatus = menuOpen;
//   hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active").style = 'overflow-y: scroll';
// }))

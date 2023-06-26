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

// location
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }

      function showPosition() {
        let latitude = 23.7739437;
        let longitude = 90.4130913;

        let iframe = document.createElement("iframe");
        iframe.src =
          "https://maps.google.com/maps?q=" +
          latitude +
          "," +
          longitude +
          "&z=15&output=embed";
        iframe.width = "100%";
        iframe.height = "450";
        document.getElementById("mapContainer").appendChild(iframe);
}
    // modal 
let myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
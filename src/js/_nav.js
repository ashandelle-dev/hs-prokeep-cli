const mobileNavTrigger = document.getElementById("mobile-nav-trigger");
const mobileNavOpen = document.getElementById("mobile-nav-open");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mainNavMenu = document.getElementById("main-nav-menu");

const subMenus = Array.prototype.slice.call( document.querySelectorAll(".sub-menu") );


mobileNavTrigger.addEventListener("click", function() {
  mobileNavClose.classList.toggle("hidden");
  mobileNavOpen.classList.toggle("hidden");
  mainNavMenu.classList.toggle("active");
  document.body.classList.toggle("mobile-open");
});


subMenus.forEach(sub => {

  sub.addEventListener("click", function(e) {
    sub.querySelector(".sub-menu-caret").classList.toggle("rotate-180");
    sub.querySelector(".child-dropdown").classList.toggle("active");

  });
  
});
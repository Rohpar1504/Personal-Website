// hamburger menu on phones
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  var menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
});

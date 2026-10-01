// dark mode toggle, remembers your choice across pages.
// loaded in <head> so the theme is set before the page draws (no white flash).
var saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  saved = "dark";
}
document.documentElement.setAttribute("data-theme", saved || "light");

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("theme-btn");

  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    btn.setAttribute("aria-checked", t === "dark");
    try { localStorage.setItem("theme", t); } catch (e) {}
  }

  btn.setAttribute("aria-checked", document.documentElement.getAttribute("data-theme") === "dark");

  // hamburger menu on phones
  var nav = document.querySelector("nav");
  var menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  btn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    setTheme(cur === "dark" ? "light" : "dark");
  });
});

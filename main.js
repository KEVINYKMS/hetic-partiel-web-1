var scroll = window.scrollY;
var header = document.getElementById("navbar");

var toggle = function() {

  header.classList.toggle('navbar--hidden', scroll < scrollY);
  scroll = scrollY;
}

window.onscroll = toggle;
window.onload = toggle;
window.onrisize = toggle;

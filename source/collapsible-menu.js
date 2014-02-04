var nav = document.getElementsByTagName("nav")[0];

var slideIn = function() {
  nav.style.left="-120px";
}

var slideOut = function() {
  nav.style.left="0px";
}

nav.addEventListener("mouseenter", slideOut);
nav.addEventListener("mouseleave", slideIn);
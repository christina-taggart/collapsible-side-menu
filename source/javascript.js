$(document).ready(function() {

  navbar = $('nav');
  navbutton = $('#nav');
  navbutton.click(function() { 
    navbar.toggle(1500, buttonTextSwitcher);
  });

  var buttonTextSwitcher = function() { 
    if (navbutton.text() === "Hide") {
      navbutton.text("Show");
    } else {
      navbutton.text("Hide");
    }
  };
  
});
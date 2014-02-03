$(document).ready(function(){
  $('.toggle').click(toggleNav)
});

var toggleNav = function(){
  var nav = $('nav')
  if(nav.width() == 150){
    $('nav').animate({width: "-=130px"}, "slow", hideUl);
  } else {
    $('nav').animate({width: "+=130px"}, "slow", showUl);
  };
};


var hideUl = function(){
  $('nav ul').hide();
};

var showUl = function(){
  $('nav ul').show();
};
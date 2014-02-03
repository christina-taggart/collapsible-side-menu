// Shorthand for $( document ).ready()
$(function() {

  // Nav moves 120 pixels right on mouseover
  $('nav').on("mouseenter",
    function () {
      $(this).animate({left: "+=120"}, 300)
    }
  )

  // Nav moves 120 pixels left on mouseoff
  $('nav').on("mouseleave",
    function () {
      $(this).animate({left: "-=120"}, 300)
    }
  )

});
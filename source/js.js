// Shorthand for $( document ).ready()
$(function() {

  $('nav').on("mouseenter",
    function () {
      $(this).animate({left: "+=80"}, 600)
    }
  )

  $('nav').on("mouseleave",
    function () {
      $(this).animate({left: "-=80"}, 600)
    }
  )

  // $('.nav_button').on("click",
  //   function () {
  //     $('.nav').toggle({right: "100"}, 600)
  //   }
  // )



});

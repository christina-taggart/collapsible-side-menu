
  $('nav').on("mouseenter",
    function () {
      $(this).animate({left: "+=100"}, 600)
    }
  )

  $('nav').on("mouseleave",
    function () {
      $(this).animate({left: "-=100"}, 600)
    }
  )
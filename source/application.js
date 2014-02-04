$(function() {
  $( "#show" ).click(function() {
    $( "nav" ).toggle();
  });
});


$(function() {
  $( "#show").click(function() {
    $("nav").toggle(
      $( "nav" ).animate({
          width: "20px"

        }, 5000, function() {
          $("ul").hide();

        })
      );
  });
});


$(function() {
  $("#show").on("click", function() {
      if ($(this).text() == "Open Sesame")
         $(this).text("Close Sesame")
      else
         $(this).text("Open Sesame");
  });
});












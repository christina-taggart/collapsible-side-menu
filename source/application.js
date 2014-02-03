$(function() {
    $( "#show").click(function() {
      $("nav").toggle();
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

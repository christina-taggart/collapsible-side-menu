$(function() {
  $( "#show" ).click(function() {
    $( "nav" ).toggle();
  });
});


$(function() {
  $( "#show").dblclick(function() {
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
  $( "ul").click(function() {
      $( "nav" ).animate({
        width: "150px"

      }, 5000, function() {
          // $("ul").hide();
      })
  });
});


// $(function() {
//   $("#show").on("click", function() {
//       if ($(this).text() == "Open Sesame")
//          $(this).text("Close Sesame")
//       else
//          $(this).text("Open Sesame");
//   });
// });












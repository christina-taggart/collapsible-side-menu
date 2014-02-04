$( document ).ready(function() {
  $("nav").hover(function() {
    $( "nav" ).animate({
        width: "120px",
        height: "300px"}
    )(".hidden-ul").css("display", "block")
  });
});




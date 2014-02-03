$( document ).ready(function() {
  $(".toggle").click(function() {
    $( "nav ul" ).fadeToggle("slow")
    $(this).html($(this).html() == 'Open Sesame' ? 'Close Sesame' : 'Open Sesame');
  });
});



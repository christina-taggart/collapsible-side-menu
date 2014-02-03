$( document ).ready(function() {
  $(".toggle").click(function() {
    $( "nav ul" ).slideToggle("slow")
    $(this).html($(this).html() == 'Open Sesame &gt;&gt;&gt;' ? 'Close Sesame <<<' : 'Open Sesame >>>');
  });
});



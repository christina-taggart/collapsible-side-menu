$( document ).ready(function() {
  $('.nav_close').hide()
  $('nav').hide()

  $('.nav_open').on('click', function(e){
    e.preventDefault;
    $('.nav_open').hide()
    $('.nav_close').show()
    $('nav').fadeIn();
  })

  $('.nav_close').on('click', function(e){
    e.preventDefault;
    $('.nav_close').hide()
    $('.nav_open').show()
    $('nav').fadeOut();
  })


 });
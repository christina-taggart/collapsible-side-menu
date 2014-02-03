// $('#show_sidebar a').on('click', function() {$('nav').css('display', 'block');
// $('#show_sidebar').css('display', 'none');
// $('#hide_sidebar').css('display', 'block')});

// $('#hide_sidebar a').on('click', function() {$('nav').css('display', 'none');
// $('#hide_sidebar').css('display', 'none');
// $('#show_sidebar').css('display', 'block')});

$('#show_sidebar a').hover(
  function() {
    $('nav').css('display', 'block');
  },
  function() {
    $('nav').css('display', 'block');
  }
);

$('nav').hover(
  function() {
    $('nav').css('display', 'block');
  },
  function() {
    $('nav').css('display', 'none');
  }
);
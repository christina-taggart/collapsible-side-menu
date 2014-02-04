// $('#hide').on('click',



// function navHide() {
//     if ($('nav').css('display') != 'none'){
//         $('nav').css('display', 'none');
//         $('.container').css('padding-left', '20px');
//         $('#hidelink').html('Open Sesame >>');
//       }
//       else
//       {
//          $('nav').css('display', 'show');
//          $('.container').css('padding-left', '170px');
//          $('#hidelink').html('Close Sesame <<');
//       }
//     }
$(document).ready(function(){
    $('nav').hover(
      function(){
        if (hoverOn) {
          $(this).animate({left: '0px'});
        }
      },
      function(){
        if (hoverOn) {
          $(this).animate({left: '-130px'});
      }
      }
    )
  }
  )

var hoverOn = false;

function navHide() {
  if ($('nav').css('left') == '0px'){
    hoverOn = true;
    $('nav').css('left', '-130px');
    $('.container').css('padding-left', '20px');
    $('#hidelink').html('Open Sesame &gt;&gt;&gt;');
  }
  else
  {
    hoverOn = false;
   $('nav').css('left', '0px');
   $('.container').css('padding-left', '170px');
   $('#hidelink').html('Close Sesame &lt;&lt;&lt;');
 }
};






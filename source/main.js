$(document).ready(function(){
  $("nav").hide();
  $(".close").hide();
  $(".open").click(function(){
    $("nav").toggle("slide");
    $(".close").show();
    $(".open").hide();
  });
  $(".close").click(function(){
    $("nav").toggle("slide");
    $(".open").show();
    $(".close").hide();
  });
});
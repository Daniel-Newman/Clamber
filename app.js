var main = function(){
 $('.wraper').css({"filter": "blur(5px)"});
 $('body').append('<div class="locget"><form method="get"><input = type"text">Zip Code</input><input type ="submit" value="Go"></input></form></div>');
 $('.locget').css({
 "position":"fixed",
  "margin":"auto 0 0 0",
  "width":"100%",
  "text-align":"center" 
 });
$('#c2').on('click', function(){
 
  $('.clam').fadeOut(400);
 $('.row1').delay(400).fadeOut(1000);
$('.row2').delay(500).fadeOut(900);
$('.row3').delay(600).fadeOut(800);

});

}





$(document).ready(main);

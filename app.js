var main = function(){
$('#c2').on('click', function(){
 
  $('.clam').fadeOut(400);
 $('.row1').delay(400).fadeOut(1000);
$('.row2').delay(500).fadeOut(900);
$('.row3').delay(600).fadeOut(800);
 $('#c2').delay(400).animate({
 height:'1000px'
 
 });

});

}





$(document).ready(main);

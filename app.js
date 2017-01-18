var main = function(){
 $('.wraper').css({"filter": "blur(5px)"});
 $('body').append('<div class="locget"><form method="get"><input  placeholder="ZIP Code, City, Address"type="text" ></input><br/><br/><input type ="submit" value="Go"></input></form></div>');
 $('.locget').css({
 "position":"fixed",
  "margin":"auto 0 0 0",
  "width":"100%",
  "text-align":"center" 

 });
 $('.locget input[type=text]').css({
 "width":"120px",
  "padding":"12px 20px",
"margin":"8px", 
  "border-radius":"10px",
"border":"3px solid #347BE6",
  "background-color":"#99c2ff;",
 });
 $('.locget input[type=submit]').css({
  "background-color":"#2369d1",
  "border":"0px",
  "border-radius":"15px",
  
  
  )};
 
 
$('#c2').on('click', function(){
 
  $('.clam').fadeOut(400);
 $('.row1').delay(400).fadeOut(1000);
$('.row2').delay(500).fadeOut(900);
$('.row3').delay(600).fadeOut(800);

});

}





$(document).ready(main);

var main = function(){
 $('.wraper').css({"filter": "blur(5px)","filter":" brightness(35%)"});
 $('body').append('<div class="locget"><form method="get"><div class="back"><input  placeholder="ZIP Code, City, Address"type="text" ></input><br/><br/><input type ="submit" value="Go"></input></form></div></div>');
 $('.locget').css({
 "position":"absolute",
  "margin":"400px 0 0 0",
  "width":"100%"


 });
 $('.locget .back').css({

 "width":"200px",
  "margin":"0 auto",
   "text-align":"center" ,
  "filter": "drop-shadow(5px 5px 12px white, 4px)"
  
 });
 $('.locget .back input[type=text]').css({
 "width":"120px",
  "padding":"12px 20px",
"margin":"8px", 
  "border-radius":"10px",
"border":"3px solid #347BE6",
  "background-color":"#99c2ff"
 });
 $('.locget .back input[type=submit]').css({
  "background-color":"#2369d1",
  "border-radius":"15px",
  "border":"0px",
  "padding":"10px 16px",
  "box-shadow": "4px 4px 5px grey"
 });
 $('.locget .back input[type=submit]:hover').css({
  "background-color":"#1f5bb5"
 });
 
 
 
$('#c2').on('click', function(){
 
  $('.clam').fadeOut(400);
 $('.row1').delay(400).fadeOut(1000);
$('.row2').delay(500).fadeOut(900);
$('.row3').delay(600).fadeOut(800);

});

}





$('document').ready(main);

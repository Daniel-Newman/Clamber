$(function(){
var zip = function (){
  $('.wraper').css({"filter": "blur(5px) brightness(35%)"});
  $('.wraper .clam').css({"filter": "blur(5px) brightness(35%)"});
 $('body').append('<div class="locget"><a href="clamber/99114">Colville</a><a href="clamber/99202">Spokane</a><form method="get" action="99101"><div class="back"><select id ="locationselect" placeholder="Select A Country"><option value ="United States">United States</option><option value ="United Kingdoms">United Kingdoms</option><option value ="Canada">Canada</option></select><br/><br/><input type ="submit" value="Go"></input></form></div></div>');
 $('.locget').css({
 "position":"absolute",
  "margin":"400px 0 0 0",
  "width":"100%",
   "width":"200px",
  "margin":"0 auto",
   "text-align":"center" ,
  "filter": "drop-shadow(3px 3px 8px #DDD, 8px)",
    "width":"180px",
  "padding":"12px 20px",
"margin":"8px", 
  "border-radius":"5px",
"border":"3px solid #347BE6",
  "background-color":"#99c2ff"
 });
 $('.locget .back').css({
 "width":"200px",
  "margin":"0 auto",
   "text-align":"center" ,
  "filter": "drop-shadow(3px 3px 8px #DDD, 8px)"
  });
 $('.locget .back select').css({
 "width":"180px",
  "padding":"12px 20px",
"margin":"8px", 
  "border-radius":"5px",
"border":"3px solid #347BE6",
  "background-color":"#99c2ff"
 });
 $('.locget .back input[type=submit]').css({
  "background-color":"#2369d1",
  "border-radius":"5px",
  "border":"0px",
  "padding":"10px 16px",
  "box-shadow": "4px 4px 5px grey"
 });
 $('.locget .back input[type=submit]:hover').css({
  "background-color":"#1f5bb5"
 });
}
$('#c2').on('click', zip);
});

var visibleText= "Show Less";
var hiddenText= "Show More";



$(document).ready(function(){
    
   $(".info-box button").click(function(){
       $(this).toggleClass("visible");
       
       if($(this).hasClass("visible") ){
           $(this).html("Show Less");
       }else{
           $(this).html("Show More");
       }
       
       
      $(this).next().toggleClass(visibleText);
   });
});





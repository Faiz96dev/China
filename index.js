

$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    });
    return false;
    });


 
 $(function() {
  
 $(window).scroll(function() {
  
 if($(this).scrollTop() != 0) {
  
 $('#toTop').fadeIn();
  
 } else {
  
 $('#toTop').fadeOut();
  
 }
  
 });
  
 $('#toTop').click(function() {
  
 $('body,html').animate({scrollTop:0},800);
  
 });
  
 });
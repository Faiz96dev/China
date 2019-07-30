// menu.onclick = function myFunction() {
//     var x = document.getElementById('myTopnav');

//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else{
//         x.className = "topnav";
//     }
// }

// $('ul.nav').find('a').click(function(){
//     var $href = $(this).attr('href');
//     var $anchor = $('#'+$href).offset();
//     window.scrollTo($anchor.left,$anchor.top);
//     return false;
// });

console.log('Hui')

// $(function(){

//     $('.some_link').on('click', function(e){
//       $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
//       e.preventDefault();
//     });
    
//     });

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

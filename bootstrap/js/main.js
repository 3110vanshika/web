/* =================================
------------------------------------
	Photo Gallery HTML Template
	Version: 1.0
 ------------------------------------
 ====================================*/

 'use strict';


 $(window).on('load', function() {
   /*------------------
     Preloder
   --------------------*/
   $(".loader").fadeOut();
   $("#preloder").delay(400).fadeOut("slow");
 
 });
 
//  OWL.CRAOUSEL

            $(document).ready(function($) {
              $('.fadeOut').owlCarousel({
                items: 1,
                animateOut: 'fadeOut',
                loop: true,
                margin: 10,
              });
              $('.custom1').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                items: 1,
                margin: 30,
                stagePadding: 30,
                smartSpeed: 450
              });
            });
//backgorund set

$('set-bg').each(function(){
  var bg = $(this).data('setbg');
  $(this).css('background-img','url(' + bg + ')');
})
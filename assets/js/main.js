/**
* Template Name: Rapid - v2.1.0
* Template URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }

      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }

    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);

(function ($) {
  // USE STRICT
  "use strict";

  $(".form-radio .radio-item").click(function(){
      //Spot switcher:
      $(this).parent().find(".radio-item").removeClass("active");
      $(this).addClass("active");
  });

  $('#course_type').parent().append('<ul class="list-item" id="newcourse_type" name="course_type"></ul>');
  $('#course_type option').each(function(){
      $('#newcourse_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#course_type').remove();
  $('#newcourse_type').attr('id', 'course_type');
  $('#course_type li').first().addClass('init');
  $("#course_type").on("click", ".init", function() {
      $(this).closest("#course_type").children('li:not(.init)').toggle('slow');
  });

  $('#confirm_type').parent().append('<ul class="list-item" id="newconfirm_type" name="confirm_type"></ul>');
  $('#confirm_type option').each(function(){
      $('#newconfirm_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#confirm_type').remove();
  $('#newconfirm_type').attr('id', 'confirm_type');
  $('#confirm_type li').first().addClass('init');
  $("#confirm_type").on("click", ".init", function() {
      $(this).closest("#confirm_type").children('li:not(.init)').toggle('slow');
  });
  
  $('#hour_appointment').parent().append('<ul class="list-item" id="newhour_appointment" name="hour_appointment"></ul>');
  $('#hour_appointment option').each(function(){
      $('#newhour_appointment').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#hour_appointment').remove();
  $('#newhour_appointment').attr('id', 'hour_appointment');
  $('#hour_appointment li').first().addClass('init');
  $("#hour_appointment").on("click", ".init", function() {
      $(this).closest("#hour_appointment").children('li:not(.init)').toggle('slow');
  });

  var allOptions = $("#course_type").children('li:not(.init)');
  $("#course_type").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#course_type").children('.init').html($(this).html());
      allOptions.toggle('slow');
  });

  var FoodOptions = $("#confirm_type").children('li:not(.init)');
  $("#confirm_type").on("click", "li:not(.init)", function() {
      FoodOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#confirm_type").children('.init').html($(this).html());
      FoodOptions.toggle('slow');
  });

  var AppointmentOptions = $("#hour_appointment").children('li:not(.init)');
  $("#hour_appointment").on("click", "li:not(.init)", function() {
      AppointmentOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#hour_appointment").children('.init').html($(this).html());
      AppointmentOptions.toggle('slow');
  });
})(jQuery);

AOS.init({
  duration: 800,
  easing: 'slide',
  once: false
});

jQuery(document).ready(function($) {

 "use strict";

 

 var siteMenuClone = function() {

   $('.js-clone-nav').each(function() {
     var $this = $(this);
     $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
   });


   setTimeout(function() {
     
     var counter = 0;
     $('.site-mobile-menu .has-children').each(function(){
       var $this = $(this);
       
       $this.prepend('<span class="arrow-collapse collapsed">');

       $this.find('.arrow-collapse').attr({
         'data-toggle' : 'collapse',
         'data-target' : '#collapseItem' + counter,
       });

       $this.find('> ul').attr({
         'class' : 'collapse',
         'id' : 'collapseItem' + counter,
       });

       counter++;

     });

   }, 1000);

   $('body').on('click', '.arrow-collapse', function(e) {
     var $this = $(this);
     if ( $this.closest('li').find('.collapse').hasClass('show') ) {
       $this.removeClass('active');
     } else {
       $this.addClass('active');
     }
     e.preventDefault();  
     
   });

   $(window).resize(function() {
     var $this = $(this),
       w = $this.width();

     if ( w > 768 ) {
       if ( $('body').hasClass('offcanvas-menu') ) {
         $('body').removeClass('offcanvas-menu');
       }
     }
   })

   $('body').on('click', '.js-menu-toggle', function(e) {
     var $this = $(this);
     e.preventDefault();

     if ( $('body').hasClass('offcanvas-menu') ) {
       $('body').removeClass('offcanvas-menu');
       $this.removeClass('active');
     } else {
       $('body').addClass('offcanvas-menu');
       $this.addClass('active');
     }
   }) 

   // click outisde offcanvas
   $(document).mouseup(function(e) {
     var container = $(".site-mobile-menu");
     if (!container.is(e.target) && container.has(e.target).length === 0) {
       if ( $('body').hasClass('offcanvas-menu') ) {
         $('body').removeClass('offcanvas-menu');
       }
     }
   });
 }; 
 siteMenuClone();


 var sitePlusMinus = function() {
   $('.js-btn-minus').on('click', function(e){
     e.preventDefault();
     if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
       $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
     } else {
       $(this).closest('.input-group').find('.form-control').val(parseInt(0));
     }
   });
   $('.js-btn-plus').on('click', function(e){
     e.preventDefault();
     $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
   });
 };
 // sitePlusMinus();


 var siteSliderRange = function() {
   $( "#slider-range" ).slider({
     range: true,
     min: 0,
     max: 500,
     values: [ 75, 300 ],
     slide: function( event, ui ) {
       $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
     }
   });
   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
     " - $" + $( "#slider-range" ).slider( "values", 1 ) );
 };
 // siteSliderRange();


 var siteMagnificPopup = function() {
   $('.image-popup').magnificPopup({
     type: 'image',
     closeOnContentClick: true,
     closeBtnInside: false,
     fixedContentPos: true,
     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      gallery: {
       enabled: true,
       navigateByImgClick: true,
       preload: [0,1] // Will preload 0 - before current, and 1 after the current image
     },
     image: {
       verticalFit: true
     },
     zoom: {
       enabled: true,
       duration: 300 // don't foget to change the duration also in CSS
     }
   });

   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,

     fixedContentPos: false
   });
 };
 siteMagnificPopup();


 var siteCarousel = function () {
   if ( $('.nonloop-block-13').length > 0 ) {
     $('.nonloop-block-13').owlCarousel({
       center: false,
       items: 1,
       loop: true,
       stagePadding: 0,
       margin: 20,
       nav: false,
       dots: true,
       navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
       responsive:{
         600:{
           margin: 20,
           stagePadding: 0,
           items: 1
         },
         1000:{
           margin: 20,
           stagePadding: 0,
           items: 2
         },
         1200:{
           margin: 20,
           stagePadding: 0,
           items: 2
         }
       }
     });
   }

   if ( $('.slide-one-item').length > 0 ) {
     $('.slide-one-item').owlCarousel({
       center: false,
       items: 1,
       loop: true,
       stagePadding: 0,
       margin: 0,
       autoplay: true,
       pauseOnHover: false,
       nav: true,
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
     });
   }


   if ( $('.nonloop-block-4').length > 0 ) {
     $('.nonloop-block-4').owlCarousel({
       center: true,
       items:1,
       loop:false,
       margin:10,
       nav: true,
       navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
       responsive:{
         600:{
           items:1
         }
       }
     });
   }

 };
 siteCarousel();

 var siteStellar = function() {
   $(window).stellar({
     responsive: false,
     parallaxBackgrounds: true,
     parallaxElements: true,
     horizontalScrolling: false,
     hideDistantElements: false,
     scrollProperty: 'scroll'
   });
 };
 siteStellar();

 var siteCountDown = function() {

   if ( $('#date-countdown').length > 0 ) {
     $('#date-countdown').countdown('2020/10/10', function(event) {
       var $this = $(this).html(event.strftime(''
         + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
         + '<span class="countdown-block"><span class="label">%d</span> days </span>'
         + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
         + '<span class="countdown-block"><span class="label">%M</span> min </span>'
         + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
     });
   }
       
 };
 siteCountDown();

 var siteDatePicker = function() {

   if ( $('.datepicker').length > 0 ) {
     $('.datepicker').datepicker();
   }

 };
 siteDatePicker();

});

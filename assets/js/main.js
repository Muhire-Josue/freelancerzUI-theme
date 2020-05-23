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

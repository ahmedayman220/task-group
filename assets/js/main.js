/**
* Template Name: task group
* Template URL:
* Author:ِAhmed Ayman
* License: 
*/


!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });



  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#all-category').addClass('all-category-scrolled');
    } else {
      $('#all-category').removeClass('all-category-scrolled');
    }
  });

  if ($(window).scrollTop() > 200) {
    $('#all-category').addClass('all-category-scrolled');
  }


  // filter
  $(window).scroll(function() {
    if ($(this).scrollTop() > 350) {
      $('#filter').addClass('filter-navbar-js');
    } else {
      $('#filter').removeClass('filter-navbar-js');
    }
  });

  if ($(window).scrollTop() > 350) {
    $('#filter').addClass('filter-navbar-js');
  }
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




  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);



// js with me

document.querySelector(".three-line-h6").addEventListener("click", function () {
    this.classList.toggle("active");
    $(".menu").toggleClass("active");
    $(".line").toggleClass("active0");
    $(".line1").toggleClass("active1");
    $(".line2").toggleClass("active2");
    $(".line3").toggleClass("active3");
    
});

document.querySelector("#filter").addEventListener("click", function () {
  this.classList.toggle("left-1000");
  $(this).parent().find('.all-a-sidebar').addClass('left-100')
});


document.querySelector(".all-a-sidebar").addEventListener("click", function () {
  this.classList.toggle("left-0");
});





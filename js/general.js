$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('body').addClass('fixed');
    } else {
      $('body').removeClass('fixed');
    }
  });

  // Home Banner Slider  
  $(".hmbanner-slider").owlCarousel({
    autoplay: true,
    lazyLoad: false,
    loop: true,
    margin: 0,
    mouseDrag: false,
    touchDrag:false,
    pullDrag:false,
    responsiveClass: true,
    autoplayTimeout: 4000,
    smartSpeed: 1200,
    dots:true,
    nav: false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      }
    }
  });
  
  // Home Team Slider  
  $(".hmprojects-slider").owlCarousel({
    autoplay: true,
    lazyLoad: false,
    loop: true,
    margin: 0,
    mouseDrag: false,
    touchDrag:false,
    pullDrag:false,
    responsiveClass: true,
    autoplayTimeout: 4000,
    smartSpeed: 1200,
    dots:false,
    nav: true,
    animateOut: 'fadeOut',
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      }
    }
  });

  /*Navigation */
  if ($("#nav").length) {
    $("#nav li a").each(function () {
      if ($(this).next().length) {
        $(this).parent().addClass("parent");
      }
    });
    $("#nav li.parent").each(function () {
      if ($(this).has(".arrowclick").length <= 0) {
        $(this).append('<i class="arrowclick"></i>');
      }
    });
    $(".arrowclick").on('click', function () {
      $(this).parents(".parent").siblings().find(".sub-menu").slideUp();
      $(this).siblings(".sub-menu").slideToggle();
      $(this).parents(".parent").siblings().find(".arrowclick").removeClass("active");
      $(this).toggleClass("active");
    });
  };
  
  // Mobile Sidebar Menu
  $('.menu-toggle').click(function () {
    $("body").toggleClass("menu-open");
  });
  $('.menuclose-icon').click(function () {
    $("body").removeClass("menu-open");
  });

  // Mobile Sidebar Menu
  $('.headfindloc-toggle').click(function () {
    $(".headfindloc").toggleClass("active");
    $(".location_list").slideToggle();
  });

  // Nav icon menu
  if($(".header-menu").length) {
    $(".menu-toggle").click(function () {
      $(this).toggleClass("active");
      $(".menuoverlay").toggleClass("active");
      $(".header-menu").toggleClass("active");
    });
    $(".menuoverlay, .header-menu").click(function () {
      $('.menu-toggle').removeClass("active");
      $(".menuoverlay").removeClass("active");
      $(".header-menu").removeClass("active");
    });
  }
  // Counter
  if($(".countnum").length) {
    $('.countnum').each(function () {
      $(this).data('start', parseInt($(this).text())).prop('Counter', 0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text($(this).data('start') - Math.ceil(now));
          }
      });
    });
  }
  // Back to Top function
  if ($("#backtotop").length) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 120) {
        $('#backtotop').fadeIn('250').css('display', 'block');
      } else {
        $('#backtotop').fadeOut('250');
      }
    });
    $('#backtotop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, '200');
      return false;
    });
  }

  // Aos Initialize
  AOS.init({
    duration: 2000,
  });

});
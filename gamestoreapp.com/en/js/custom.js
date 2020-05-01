$(document).ready(function () {

    "use strict";

    /* ========================================================================= */
    /*  Navigation Bar
    /* ========================================================================= */

    // Navigation Section
    $('.navbar-collapse a').on('click', function() {
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on("scroll", function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // Navbar Smoothscroll js
    $(function() {
        $('.custom-navbar a, #home a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1000);
            event.preventDefault();
        });
    });

    // Navbar ScollSpy
    $("body").scrollspy({

        target: ".navbar-collapse",
        offset: 95

    });
    
    /* ========================================================================= */
    /*  Screenshots Full Screen Picture
    /* ========================================================================= */

    $(".screen-popup").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* ========================================================================= */
    /*  Screenshots Slider
    /* ========================================================================= */

    $('.screenshots-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* ========================================================================= */
    /*  Testimonials Slider
    /* ========================================================================= */

    $('#testimonial-slider').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    /* ========================================================================= */
    /*  Change Photo On Features
    /* ========================================================================= */
    
        $(".callimg").on("click", function() {
            
            var callme = $(this).attr('call-img');
            
            $(".img-service").fadeOut("fast", function() {
                $(".img-service").attr('src', callme);
            });

            $(".img-service").fadeIn("slow", function() {});
            
        });
    
    /* ========================================================================= */
    /*  Statistic Counter
    /* ========================================================================= */

    $('.statis-number').each(function() {
        $(this).appear(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });
    
    /* ========================================================================= */
    /*  Back To Top
    /* ========================================================================= */

    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 800) {
            $("#scroll-top").fadeIn();
        } else {
            $("#scroll-top").fadeOut();
        }
    });
    $("#scroll-top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });
    
    /* ========================================================================= */
    /*  WOW Plugin
    /* ========================================================================= */

    new WOW().init();

    // End
});
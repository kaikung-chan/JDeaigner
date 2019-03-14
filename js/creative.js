// Preloader
//====================================================================================
//var preloader = $('#preloader');
//preloader.delay(1500).fadeOut(200);
//$('body').delay(500).css({'overflow':'visible'});


// Smooth scrolling
//====================================================================================
// reset     | 滚动鼠标时，动画开关
// origin    | 动画开始的方向
// duration  | 动画持续时间
// delay     | 延迟
// rotate    | 过度到0的初始角度
// opacity   | 初始透明度
// scale     | 缩放
// easing    | 回调函数

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-nav-logo', {
        distance: '15px',
        origin: 'left',
        duration: 500,
        delay: 500,
    });
    sr.reveal('.sr-nav-1', {
        distance: '30px',
        origin: 'top',
        duration: 1000,
        delay: 200,
    });
    sr.reveal('.sr-nav-2', {
        distance: '30px',
        origin: 'top',
        duration: 1000,
        delay: 300,
    });
    sr.reveal('.sr-nav-3', {
        distance: '30px',
        origin: 'top',
        duration: 1000,
        delay: 400,
    });
    sr.reveal('.sr-nav-4', {
        distance: '30px',
        origin: 'top',
        duration: 1000,
        delay: 500,
    });
    sr.reveal('.sr-header-title', {
        duration: 500,
        delay: 200,
        scale: 0,
    });
    sr.reveal('.sr-header-hr', {
        duration: 500,
        delay: 300,
        scale: 0,
    });
    sr.reveal('.sr-header-sub', {
        distance: '30px',
        origin: 'bottom',
        duration: 500,
        delay: 400,
        scale: 0,
    });
    sr.reveal('.sr-header-button', {
        distance: '15px',
        origin: 'bottom',
        duration: 500,
        delay: 600,
    });
    sr.reveal('.sr-icon-1', {
        duration: 1000,
        delay: 200,
        scale: 0,
    });
    sr.reveal('.sr-icon-1-1', {
        distance: '30px',
        origin: 'bottom',
        duration: 2000,
        delay: 450,
    });
    sr.reveal('.sr-icon-2', {
        duration: 1000,
        delay: 400,
        scale: 0,
    });
    sr.reveal('.sr-icon-2-1', {
        distance: '30px',
        origin: 'bottom',
        duration: 2000,
        delay: 650,
    });
    sr.reveal('.sr-icon-3', {
        duration: 1000,
        delay: 600,
        scale: 0,
    });
    sr.reveal('.sr-icon-3-1', {
        distance: '30px',
        origin: 'bottom',
        duration: 2000,
        delay: 850,

    });

    sr.reveal('.sr-logo-1', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 300,
    });

    sr.reveal('.sr-logo-2', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 400,
    });

    sr.reveal('.sr-logo-3', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 500,
    });

    sr.reveal('.sr-logo-4', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 600,
    });

    sr.reveal('.sr-logo-5', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 700,
    });

    sr.reveal('.sr-logo-6', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 800,
    });

    sr.reveal('.sr-logo-7', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 900,
    });

    sr.reveal('.sr-logo-8', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1000,
    });

    sr.reveal('.sr-logo-9', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1100,
    });

    sr.reveal('.sr-logo-10', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1200,
    });

    sr.reveal('.sr-logo-11', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1300,
    });

    sr.reveal('.sr-logo-12', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1400,
    });

    sr.reveal('.sr-button', {
        distance: '15px',
        origin: 'bottom',
        duration: 500,
        delay: 200,
    });

    sr.reveal('.sr-services-1-title', {
        duration: 1000,
        delay: 200,
        scale: 0,
    });

    sr.reveal('.sr-services-2-title', {
        duration: 1000,
        delay: 400,
        scale: 0,
    });

    sr.reveal('.sr-services-3-title', {
        duration: 1000,
        delay: 600,
        scale: 0,
    });

    sr.reveal('.sr-services-4-title', {
        duration: 1000,
        delay: 800,
        scale: 0,
    });

    sr.reveal('.sr-services-5-title', {
        duration: 1000,
        delay: 1000,
        scale: 0,
    });
    sr.reveal('.sr-services-1', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 800,
    });

    sr.reveal('.sr-services-2', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1000,
    });

    sr.reveal('.sr-services-3', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1200,
    });

    sr.reveal('.sr-services-4', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1400,
    });
    sr.reveal('.sr-services-5', {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        delay: 1600,
    });

    sr.reveal('.sr-contact-1', {
        delay: 200,
        easing: 'ease',
        scale: 0
    });
    sr.reveal('.sr-contact-2', {
        delay: 400,
        easing: 'ease',
        scale: 0
    });
    sr.reveal('.sr-contact-3', {
        delay: 600,
        easing: 'ease',
        scale: 0
    });

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery);



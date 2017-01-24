/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});

/* ==============================================
 WOW plugin triggres animate.css
 =============================================== */
new WOW().init();

// Active isotope with jQuery code :
$('.main_work').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

// Isotope click function
$('.work_nav ul li').click(function() {
    $('.work_nav ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.main_work').isotope({
        filter: selector
    });
    return false;
});

/* ==============================================
 OWL Carousel
 =============================================== */
$(document).ready(function() {
    
    $("#testi-carousel").owlCarousel({
        //Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199,1],
        itemsDesktopSmall: [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile: [479,1],
        singleItem: false,
        startDragging: true
    });
});

/* ==============================================
 Background Video
 =============================================== */
$(document).ready(function() {
    "use strict";
    
    // Magnific Popup
    var videoBtn = $(".video-popup-btn");

    videoBtn.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 500,
        gallery: {
            enabled: true
        }
    });
});
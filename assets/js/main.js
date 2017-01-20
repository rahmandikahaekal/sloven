// Animation click function
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

// Counter Up
var options = {
    useEasing : true,
    useGrouping : false,
    separator : ',',
    decimal : '.',
    prefix : '',
    suffix : ''
};

var demo = new CountUp("counter1", 0, 1456, 0, 10, options);
demo.start();

var demo = new CountUp("counter2", 0, 2456, 0, 10, options);
demo.start();

var demo = new CountUp("counter3", 0, 3125, 0, 10, options);
demo.start();

var demo = new CountUp("counter4", 0, 2478, 0, 10, options);
demo.start();

//(function ($) {
//    'use strict';
// 
//    $('.video_btn').magnificPopup({
//        disableOn: 0,
//        type: 'iframe',
//        mainClass: 'mfp-fade',
//        removalDelay: 160,
//        preloader: true,
//        fixedContentPos: false
//    });
//
//    if ($.fn.mb_YTPlayer) {
//        $('.player').mb_YTPlayer();
//    }
//
//})(jQuery);
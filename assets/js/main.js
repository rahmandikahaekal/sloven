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
})
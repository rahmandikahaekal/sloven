(function($) {

jQuery(document).ready(function() {
  
  //lightbox
  $(document).ready(function(){
    $('a').nivoLightbox();
  });
	//this code for the croll animation
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
	

    //this code is for header
   jQuery(window).scroll(function() {
      var windowScrollPosTop = jQuery(window).scrollTop();

      if(windowScrollPosTop >= 250) {
        jQuery(".navbar-default").css({"margin-top": "0px", "margin-bottom": "0","background-color": "#000"});
        jQuery("#home .container .gallery .Logo").css({"margin": "170px auto 0px auto"});
      }
      else{
        jQuery(".navbar-default").css({"margin-top": "25px", "margin-bottom": "15px","background-color": "transparent"});
        jQuery("#home .container .gallery .Logo").css({"margin": "170px auto 0px auto"});    
      }
   });

});

}) (jQuery);
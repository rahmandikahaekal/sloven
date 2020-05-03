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


/* ==============================================
 Circle Chart
 =============================================== */

// Circle Progress Bar 1
var el = document.getElementById('bar1'); // get canvas

var options = {
    percent:  el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 175,
    lineWidth: el.getAttribute('data-line') || 8,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';
    
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
		ctx.lineWidth = lineWidth
		ctx.stroke();
};

drawCircle('rgba(255, 255, 255, 0.68)', options.lineWidth, 100 / 100);
drawCircle('#f1c40c', options.lineWidth, options.percent / 100);

// Circle Progress Bar 2
var el = document.getElementById('bar2'); //get canvas

var options = {
    percent: el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 175,
    lineWidth: el.getAttribute('data-line') || 8,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';

if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2);
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent ||  1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth
    ctx.stroke();
};

drawCircle('rgba(255, 255, 255, 0.68)', options.lineWidth, 100 / 100);
drawCircle('#f1c40c', options.lineWidth, options.percent / 100);

// Circle Progress Bar 3
var el = document.getElementById('bar3');

var options = {
    percent: el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 175,
    lineWidth: el.getAttribute('data-line') || 8,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';

if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2);
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent ||  1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth
    ctx.stroke();
};

drawCircle('rgba(255, 255, 255, 0.68)', options.lineWidth, 100 / 100);
drawCircle('#f1c40c', options.lineWidth, options.percent / 100);

// Circle Progress Bar 4
var el = document.getElementById('bar4');

var options = {
    percent: el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 175,
    lineWidth: el.getAttribute('data-line') || 8,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';

if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2);
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent ||  1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth
    ctx.stroke();
};

drawCircle('rgba(255, 255, 255, 0.68)', options.lineWidth, 100 / 100);
drawCircle('#f1c40c', options.lineWidth, options.percent / 100);
$(document).ready(function() {
    var num = 1;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }

        if ($(window).scrollTop() > num * 600) {
            $('.navbar').addClass('inview');
        } else {
            $('.navbar').removeClass('inview');
        }


    })
});

$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated animate__backInLeft');
}, {
    offset: '80%'

});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated animate__backInRight');
}, {
    offset: '80%'

});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated animate__backInUp');
}, {
    offset: '80%'

});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated animate__pulse');
}, {
    offset: '80%'

});
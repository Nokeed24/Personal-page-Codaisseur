$(document).ready(function() {


    /* For the sticky navigation */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-about').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });


    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    });


    /* Animations on scroll */
    /* Waypoint 1 */
    $('.js--section-musicandsports').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    /* Waypoint 2 */
    $('.js--section-hobbies').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
});

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
            }, 1000);
            return false;
          }
        }
      });
    });


    /* Animations on scroll */
    /* Waypoint 1 */
    $('.js--section-musicandsports').waypoint(function(direction) {
      if(direction == "down")
      {
        $('.js--wp-1').addClass('animated fadeInLeft');
        $('.js--wp-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInLeft');
        $(this).addClass('visible');
        });
      }
      else
      {
        $('.js--wp-1').addClass('animated fadeOutLeft');
        $('.js--wp-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeOutLeft');
        $(this).removeClass('visible');
        });
      }
    }, {
        offset: '0%'
    });


    /* Waypoint 2 */
    $('.js--section-hobbies').waypoint(function(direction) {
      if(direction == "down")
      {
        $('.js--wp-2').addClass('animated fadeInUp');
        $('.js--wp-2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
        $(this).addClass('visible');
        });
      }
      else
      {
        $('.js--wp-2').addClass('animated fadeOutDown');
        $('.js--wp-2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeOutDown');
        $(this).removeClass('visible');
        });
      }
    }, {
        offset: '0%'
    });

});

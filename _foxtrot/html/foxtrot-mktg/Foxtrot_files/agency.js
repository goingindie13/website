/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
/*
     FILE ARCHIVED ON 13:10:54 Jun 10, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:50:34 Jun 27, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 78.605 (3)
  esindex: 0.008
  captures_list: 95.865
  CDXLines.iter: 12.006 (3)
  PetaboxLoader3.datanode: 37.51 (4)
  exclusion.robots: 0.177
  exclusion.robots.policy: 0.166
  RedisCDXSource: 1.748
  PetaboxLoader3.resolve: 196.002 (2)
  load_resource: 166.672
*/
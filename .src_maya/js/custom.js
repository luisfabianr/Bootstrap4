// Javascript to enable link to tab
/** ======================================= */
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('.nav-tabs', function (e) {
    window.location.hash = e.target.hash;
})

// button up top
/** ======================================= */
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});


/** ANIMATION FADE======================================= */
jQuery(document).ready(function($) {

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

});

/** ANIMATION  GRID ======================================= */
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);


$(function(){
  
  var items = $(".add-animation");
   var u_os_top_read = $('body').offset().top;
  
  if ($(window).scrollTop() > u_os_top_read) {      
    //alert( "window loaded" );
    u_div_cn.addClass('animate');
  };
  $(window).scroll(function(event) {
    //alert( "window scroll" );
    items.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animate"); 
      } 
    });
  });


  $(window).load(function(event) {
    //alert( "window loaded" );
    $(".add-animation").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animate"); 
      } 
    });
  });

       
    
    
    if ($(window).scrollTop() > u_os_top_read) {      
        
    u_div_cn.addClass('set_position');};
  
 /* $('.item').slice(0).each(function(i, ele){
    $(ele).delay(500).addClass('comein');
  });*/
});





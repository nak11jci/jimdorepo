$(window).on('load resize', function(){
  var w = $(window).width();
  var h = $('.jtpl-navigation__inner').innerHeight();
  var navPadding = 33;
  var headerDefault = 215;

  if ( w > 480 ) {
    if ( h >= 160) {
      var headerHeight = h + navPadding +60;
      $('.jtpl-header').height(headerHeight);
    } else {
     $('.jtpl-header').height(215);
    }
  } else {
  $('.jtpl-header').height('auto');
  }
  

});
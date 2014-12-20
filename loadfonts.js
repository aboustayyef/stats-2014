$(document).ready(function() {
  console.log('trying to load fonts');
  WebFontConfig = {
    google: { families: [ 'Montserrat::latin' ] },

    // when the fonts download, beging masonry layout..
    fontactive: function(fontFamily, fontDescription) {
      $('body').addClass('fontLoaded');
    }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

});

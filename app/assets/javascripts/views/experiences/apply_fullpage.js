var applyFullpage = function() {
  $('html').removeClass('fp-enabled').promise().done(function(){
    $('#fullpage').fullpage({
    });
  })
};

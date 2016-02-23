var applyFullpage = function() {
	var fakeNavs = new Array
	for (var i = 0; i < 150; i++) { fakeNavs.push("panel") }
  $('html').removeClass('fp-enabled').promise().done(function(){
    $('#fullpage').fullpage({
    	scrollOverflow: true,
    	loopBottom: true,
    	anchors: fakeNavs,
		navigation: true,
		// navigationPosition: 'right',
		navigationTooltips: fakeNavs,
    });
  })
};

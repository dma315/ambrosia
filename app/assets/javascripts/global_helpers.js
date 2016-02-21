function clearMainFrame() {
  $allChildren = $('#main-frame').children()
  $allChildren.fadeOut();
  $allChildren.promise().done(function() {
    $allChildren.remove()
  })
}

function appendToMainFrame($element) {
  $element.hide()
  $('#main-frame').append($element)
  $element.fadeIn()
}

function slideIntoMF($element) {
	$element.hide();
	$('#main-frame').append($element);
	$element.slideDown();
}
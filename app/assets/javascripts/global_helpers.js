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

function mainFrameContains(idString) {
  var mainFrameDOM = $('#main-frame')[0]
  var elementToLookFor = $(idString)[0]
  return $.contains(mainFrameDOM, elementToLookFor)
}

function clearMainFrame() {
  $allChildren = $('#main-frame').children()
  $allChildren.fadeOut();
  return $allChildren.promise().done(function() {
    $allChildren.remove()
  });
}

function hideMainFrame() {
  $('#main-frame').hide()
}

function showMainFrame() {
  $('#main-frame').show()
}

function clearFullpage() {
  $('html').removeClass('fp-enabled')
  $allChildren = $('#fullpage').children()
  $allChildren.fadeOut();
  return $allChildren.promise().done(function() {
    removePanelNavigation();
    $allChildren.remove()
  });
}

function showFullpage() {
  $("#fullpage").show();
}

function hideFullpage() {
  $("#fullpage").hide();
}

function appendToMainFrame($element) {
  $element.hide()
  $('#main-frame').append($element)
  return $element.fadeIn().promise();
}

function appendToFullPage($element) {
  $element.hide()
  $('#fullpage').append($element)
  return $element.fadeIn().promise();
}

function slideIntoMF($element) {
	$element.hide();
	$('#main-frame').append($element);
	$element.slideDown();
}

function mainFrameContains(idString) {
  var mainFrameDOM = $('#main-frame')[0]
  var elementToLookFor = $(idString)[0]
  return $.contains(mainFrameDOM, elementToLookFor)
}

function getCurrentUser() {
  CURRENTUSER = $('#session').text()
  return CURRENTUSER
}

function setCurrentUser() {
  $.ajax({
      method: "get",
      url: "/sessions/uid"
    })
    .done(function(response) {
      $('#session').text(response)
      getCurrentUser()
    })
}

function clearCurrentUser() {
  $('#session').text("")
  CURRENTUSER = ""
}

function getExperienceByID(id) {
  return EXPERIENCES.find(function(experience) {
    if (experience.id === id) { return experience }
  })
}

function clearUserExperienceBubbles() {
  $('.experience-bubble').removeAttr('id');
  $('.experience-bubble').children().fadeOut(400, function() {
    $(this).remove()
  });
}


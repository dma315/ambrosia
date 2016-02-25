function removePanel(buttonClicked) {
  var experienceID = +$('.active-bubble').attr('id')
  var assets = []
  $thisPanel = $(buttonClicked).closest('.panel')
  $thisPanel.find('.draggable-image-box').each(function(index, asset) {
    assets.push(asset)
  })
  var panelID = $thisPanel.attr('id')
  $thisPanel.fadeOut(400, function() {
    $thisPanel.remove();
  })
  $.ajax({
    method: "delete",
    url: "/experiences/" + experienceID + "/panels/" + panelID
  })
  .done(function(response) {
    assets.forEach(function(asset) {
      $('.draggable-images-container').prepend(asset)
    })
  })
}

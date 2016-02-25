function panelSubmit(submitButton) {
  $thisPanel = $(submitButton).closest('.panel')
  var panelID = +$thisPanel.attr('id')
  var assetIDs = []
  var experienceID = +$('.active-bubble').attr('id')
  var method = $thisPanel.find('.selected').attr('id')
  $thisPanel.find('.draggable-image-box').each(function(index, value) {
    var assetID = +$(value).attr('id')
    assetIDs.push(assetID)
  })
  var data = {
    "panelID": panelID,
    "assetIDs": assetIDs,
    "experienceID": experienceID,
    "method": method
  }
  $.ajax({
    method: "post",
    url: "/experiences/" + experienceID + "/panels",
    data: data
  })
  .done(function(response) {
    // Response returns var message
    var currentText = $thisPanel.find('a').text()
    $thisPanel.find('a').text(currentText + " - " + message)
  })
}

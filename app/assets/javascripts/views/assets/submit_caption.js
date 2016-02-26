function submitCaption(form) {
  var $thisForm = $(form)
  var data = $thisForm.serialize();
  var url = $thisForm.attr('action')

  var assetID = +$thisForm.closest('.edit-image-caption-container').attr('id')
  var thisExperience = EXPERIENCES.find(function(experience) {
    return experience.assets.find(function(asset) {
      return asset.id === assetID
    })
  })
  var thisAsset = thisExperience.assets.find(function(asset) {
    return asset.id === assetID
  })
  var caption = $thisForm.find('#assets_caption').val()
  thisAsset.caption = caption

  // Update remotely
  $.ajax({
    method: "patch",
    url: url,
    data: data
  })
  .done(function(response) {
    var textToInject = response.replace(/"/g,"")
    $thisForm.find('.click-to-edit-text').text(textToInject)
    $thisForm.find('.edit-image-form').fadeOut();
  })
}

function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.$element = $("<div>").addClass('module')
  this.loadAssets()
  console.log(this.experience)
}

ExperienceView.prototype.loadAssets = function() {
  var $element = this.$element
  this.experience.assets.forEach(function(asset) {
    console.log(asset.direct_upload_url)
    var $img = $("<img>").attr('src', asset.direct_upload_url)
    var $div = $("<div>").attr('id', asset.id).addClass("sample-image").append($img)
    $element.append($div) // These need to be individual assetViews maybe?
  })
  return $element
}

ExperienceView.prototype.render = function() {
  clearMainFrame()
  this.$element.kinetic()
  appendToMainFrame(this.$element)
}

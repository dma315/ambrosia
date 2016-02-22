function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.$element = $("<div>").addClass('module')
  this.loadAssets()
  console.log(this.experience)
}

ExperienceView.prototype.loadAssets = function() {
  var $element = this.$element
  this.experience.assets.forEach(function(asset) {
    var $img = $("<img>").attr('src', asset.link)
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

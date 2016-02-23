function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.$element = $("<div>").addClass('module grid')
  this.loadAssets();
  this.masonify();

  console.log(this.experience)
}

ExperienceView.prototype.loadAssets = function() {
  var $element = this.$element
  var $gridSizer = $("<div>").addClass("grid-sizer")
  $element.append($gridSizer);
  this.experience.assets.forEach(function(asset) {
  var $img = $("<img>").attr('src', asset.direct_upload_url)
  var $div = $("<div>").attr('id', asset.id).addClass("sample-image grid-item").append($img)
  $element.append($div) // These need to be individual assetViews maybe?
  })
  return $element
}

ExperienceView.prototype.render = function() {
  var that = this
  clearMainFrame().done(function() {
    appendToMainFrame(that.$element).done(that.remasonify.bind(that));
  });
  this.$element.kinetic()
}

ExperienceView.prototype.gridify = function() {
  var $element = this.$element;
  console.log($element);
}

ExperienceView.prototype.masonify = function() {
  var that = this;
  this.$element.imagesLoaded(function() {
    that.$element.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 10,
      percentPosition: true
    });
  });
}

ExperienceView.prototype.remasonify = function() {
  this.$element.masonry("layout");
};

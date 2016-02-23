function ExperienceBubbleView(element, navCenterY) {
  this.navCenterY = navCenterY
  this.$element = $(element)
  this.element = element
  this.positionY = element.getBoundingClientRect().top
  this.distanceFromCenter = Math.abs(this.positionY - this.navCenterY)
  this.magnifyRatio = (1 - (this.distanceFromCenter / this.navCenterY))
  return this
};

ExperienceBubbleView.prototype.recalculate = function() {
  this.positionY = this.element.getBoundingClientRect().top
  this.distanceFromCenter = Math.abs(this.positionY - this.navCenterY)
  this.magnifyRatio = (1 - (this.distanceFromCenter / this.navCenterY) * 0.8)
  return this
};

ExperienceBubbleView.prototype.resizeToPosition = function(position) {
  var scaleFactor = 'scale(' + this.magnifyRatio + ')'
  this.$element.css({
    'transform': scaleFactor
  })
};

ExperienceBubbleView.prototype.loadExperience = function(experience) {
  if (experience.assets.length > 0) {
    var url = experience.assets[0].direct_upload_url
    var $img = $("<img>").attr('src', url)
    // var $experienceTitle = $("<span>").addClass("experience-title").text(experience.title).hide();
    this.experienceID = experience.id
    this.$element.attr('id', this.experienceID).hide()
    this.$element.append($img)
    // this.$element.append($experienceTitle)
    this.$element.fadeIn(800)
  };
}

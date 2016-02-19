$(document).ready(function() {
  $('nav').kinetic({x: false});
  var navHeight = $('nav').height()
  navCenterY = navHeight / 2

  var bubbles = []
  $('.experience-bubble').each(function(index, element) {
    var experienceBubble = new ExperienceBubbleView(element)
    bubbles.push(experienceBubble)
  })
  console.log(bubbles)

  $('nav').on('scroll', function(event) {
    for (var i in bubbles) {
      var currentBubble = bubbles[i]
      currentBubble.recalculate();
      currentBubble.resizeToPosition(currentBubble.positionY)
    }
  })
})

function ExperienceBubbleView(element) {
  this.$element = $(element)
  this.element = element
  this.positionY = element.getBoundingClientRect().top
  this.distanceFromCenter = Math.abs(this.positionY - navCenterY)
  this.magnifyRatio = (1 - (this.distanceFromCenter / navCenterY))
};

ExperienceBubbleView.prototype.recalculate = function() {
  this.positionY = this.element.getBoundingClientRect().top
  this.distanceFromCenter = Math.abs(this.positionY - navCenterY)
  this.magnifyRatio = (1 - (this.distanceFromCenter / navCenterY))
};

ExperienceBubbleView.prototype.resizeToPosition = function(position) {
  var scaleFactor = 'scale(' + this.magnifyRatio + ')'
  console.log(scaleFactor)
  this.$element.css({'transform': scaleFactor})
};

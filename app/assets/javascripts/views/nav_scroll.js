function NavScroll() {
  this.navHeight = $('nav').height();
  this.navCenterY = this.navHeight / 2;
  this.experienceBubbles =  [];
  this.loadBubbles = function() {
    var experienceBubbles = this.experienceBubbles
    var navCenterY = this.navCenterY
    $('.experience-bubble').each(function(index, element) {
      var experienceBubble = new ExperienceBubbleView(element, navCenterY)
      experienceBubbles.push(experienceBubble)
    })
  };
  this.resizeBubbles = function() {
    var experienceBubbles = this.experienceBubbles
    for (var i in experienceBubbles) {
      var currentBubble = experienceBubbles[i]
      currentBubble.recalculate();
      currentBubble.resizeToPosition(currentBubble.positionY)
    }
  };
  this.initialize = function() {
    $('nav').kinetic({x: false})
    this.loadBubbles()
    this.resizeBubbles()
    return this
  };
}

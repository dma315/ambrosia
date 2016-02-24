function ExperienceView(id) {
  this.experience = getExperienceByID(id);
  this.$element = $("<div>").addClass('module grid');
  this.id = id;
  this.masonify();
  // Some sort of object that holds "sections"
  // Some algorithm that determines which pictures go into which "section"
}

ExperienceView.prototype.viewSelector = function() {
  var $selector = $('<div>').attr('id', 'selector')

}

ExperienceView.prototype.render = function() {
  // Test image:
  var $bigPicSection = $("<div>").addClass("module grid-item").append($("<img src='http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg'>"));

  var that = this;
  var $gridSizer = $('<div>').addClass('grid-sizer');
  this.$element.append($gridSizer);
  var sectionifier = new Sectionify(this.id);
  // sectionifier.thingsToRender.push($bigPicSection.wrap("<div class='grid-item'></div>"));

  sectionifier.buildMasonryPage(sectionifier.assets);
  sectionifier.thingsToRender.forEach(function(renderable){
    that.$element.append(renderable);
    // appendToFullPage($bigPicSection);
  });

  clearFullpage().done(function(){
    appendToFullPage(that.$element.addClass("section")).done(that.remasonify.bind(that));
    // appendToFullPage($bigPicSection);
  });
  this.$element.kinetic();
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
  // applyFullpage();
};

// ExperienceView.prototype.fullScreenImage = function () {
//   var $bigPicSection = $("<div>").addClass("section")
//   $bigPicSection.append($("<img src='http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg'>"))
// }






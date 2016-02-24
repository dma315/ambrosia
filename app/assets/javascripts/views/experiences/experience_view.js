function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.panels = []
  // this.$element = $("<div>").addClass('module grid')
  // this.loadAssets();
  // this.masonify();
  // Some sort of object that holds "sections"
  // Some algorithm that determines which pictures go into which "section"
}

ExperienceView.prototype.loadAssets = function() {
  var assets = this.experience.assets
  var panels = this.panels
  assets.forEach(function(asset) {
    var panel = new PanelView([asset])
    panels.push(panel)
  })
  return panels
  // var $element = this.$element
  // var $gridSizer = $("<div>").addClass("grid-sizer")
  // $element.append($gridSizer);
  // this.experience.assets.forEach(function(asset) {
  // var $img = $("<img>").attr('src', asset.direct_upload_url)
  // var $div = $("<div>").attr('id', asset.id).addClass("sample-image grid-item").append($img)
  // $element.append($div) // These need to be individual assetViews maybe?
  // })
  // return $element
}


ExperienceView.prototype.render = function() {
  this.loadAssets()
  this.panels.forEach(function(panel) {
    console.log(panel.loadToSection())
    $('#fullpage').append(panel.loadToSection())
  })
  applyFullpage();
  // var that = this

  // var $bigPicSection = $("<div>").addClass("section").append($("<img src='http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg'>"))

  // var $fullpage = this.$fullpage
  //   clearFullpage().done(function() {
  //   var $section2 = $("<div>").addClass("section").append($("<p>").text("Hello, I should be on the first page"))
  //   appendToFullPage($section2)
  //   appendToFullPage(that.$element.addClass("section")).done(that.remasonify.bind(that));
  //   appendToFullPage($bigPicSection);
  //   })
  // this.$element.kinetic()
}

// ExperienceView.prototype.gridify = function() {
//   var $element = this.$element;
// }

// ExperienceView.prototype.masonify = function() {
//   var that = this;
//   this.$element.imagesLoaded(function() {
//     that.$element.masonry({
//       itemSelector: '.grid-item',
//       columnWidth: '.grid-sizer',
//       gutter: 10,
//       percentPosition: true,
//     });
//   });
// }

// ExperienceView.prototype.remasonify = function() {
//   this.$element.masonry("layout");
//   applyFullpage()
// };

// ExperienceView.prototype.fullScreenImage = function () {
//   var $bigPicSection = $("<div>").addClass("section")
//   $bigPicSection.append($("<img src='http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg'>"))
// }






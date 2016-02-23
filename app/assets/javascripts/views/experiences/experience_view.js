function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.$element = $("<div>").addClass('module grid')
  this.loadAssets();
  this.masonify();
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
  var $fullpage = this.$fullpage
  // clearFullpage().done(function() {
    // console.log($('#fullpage'))
    // clearMainFrame().done(function() {
    //   appendToMainFrame(that.$element).done(that.remasonify.bind(that));
    // });

    clearFullpage().done(function() {
      // $('#fp-nav').remove();
      // $('html').removeClass('fp-enabled').promise().done(function(){

      var $section2 = $("<div>").addClass("section").append($("<p>").text("Hello, I should be on the second page"))
      appendToFullPage($section2)
      appendToFullPage(that.$element.addClass("section")).done(that.remasonify.bind(that));
      // })
    })


    // This doesn't work
    // $('#fullpage').append(that.$element).done(that.remasonify.bind(that));

    // This doens't work
    // var $element = that.$element.hide()
    // $('#fullpage').append($element)
    // $element.fadeIn(400, function() {
    //   that.remasonify.bind(that)
    // })
  // });

  // applyFullpage()
  this.$element.kinetic()
}

ExperienceView.prototype.gridify = function() {
  var $element = this.$element;
}

ExperienceView.prototype.masonify = function() {
  var that = this;
  this.$element.imagesLoaded(function() {
    that.$element.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 10,
      percentPosition: true,
    });
  });
}

ExperienceView.prototype.remasonify = function() {
  this.$element.masonry("layout");
  applyFullpage()
};

// Get all of an experience's assets
// Determine how many pages to make (user input?)
// Determine how to render each page
  // How many images per page?
  // How are images displayed? (masonify, full screen, an arbitrary view)
// Return completed view assembly to ExperienceView.render

function Sectionify (experienceID) {
  this.expView = new ExperienceView(experienceID);
  this.experience = this.expView.experience;
  this.assets = this.experience.assets;
  this.thingsToRender = [];
}

// buildMasonryPage should return a 'masonified' DOM element
// ready to append to a 'fullpage' element:

Sectionify.prototype.buildMasonryPage = function(assArr){
  // For indogenous assets, set assArr = instanceOfSectionify.assets
  var imgLinks = [];
  // Get links from assets:
  assArr.forEach(function(asset){
    imgLinks.push(asset.direct_upload_url);
  });
  // Create 'grid-sizer' and 'section' divs:
  // var $gridSizer = $("<div>").addClass('grid-sizer');
  // var $gridSection = $("<div>").addClass('module grid section'); // $element with 'module' and 'grid' classes added by ExperienceView
  var $gridItemContainer = [];
  var that = this;
  // Wrap each link in <img> tag, then wrap <img> in 'grid-item' div:
  imgLinks.forEach(function(link){
    var $img = $("<div class='grid-item-content'>").append($("<img>").attr('src', link));
    var $gridItem = $("<div>").addClass('grid-item').append($img);
    $gridItemContainer.push($gridItem);
    that.thingsToRender.push($gridItem);
  });
  // return $gridItemContainer;
}

Sectionify.prototype.buildFullscreenPage = function(assArr) {
  var sectionifier = this;
  var thingsToRender = [];
  assArr.forEach(function(asset){
    var wrappedAsset = $('asset').wrap("<div class='fullPageImg section'></div>");
    thingsToRender.push(wrappedAsset);
  })
  clearFullpage().done(function(){
    thingsToRender.forEach(function(asset){
      appendToFullPage(asset);
    });
    applyFullpage();
  });
}






function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.assets = this.experience.assets
  this.assetCount = this.experience.assets.length
  this.panels = []
  this.assetsPaneled = 0
  this.layoutLookup = {
    "loadSingleImage": 1,
    "loadTwoImages": 2,
    "masonify": "",
  }
}

ExperienceView.prototype.loadAssets = function(_arrayOfLayouts) {

  var arrayOfLayouts = _arrayOfLayouts
  var assetCount = this.assetCount
  var assetsPaneled = this.assetsPaneled
  var layoutLookup = this.layoutLookup
  var assets = this.assets
  var panels = this.panels

  if (arrayOfLayouts) {
    // Take first layout
    arrayOfLayouts.forEach(function(layoutOption) {
      if (layoutOption.constructor == String) {
        var numAssets = layoutLookup[layoutOption]
        var assetSlice = assets.slice(assetsPaneled, assetsPaneled + numAssets)
        var panel = new PanelView(assetSlice)
        var loadedPanel = eval("panel." + layoutOption + "()")
      } else if (layoutOption.constructor == Array) {
        var numAssets = layoutOption[1]
        var method = layoutOption[0]
        var assetSlice = assets.slice(assetsPaneled, assetsPaneled + numAssets)
        var panel = new PanelView(assetSlice)
        var loadedPanel = eval("panel." + method + "(" + numAssets + ")")
      }
      if (assetSlice.length > 0) {
        panels.push(loadedPanel)
        assetsPaneled += numAssets
      }
    })
  } else {
    assetsPaneled += assetCount
    assets.forEach(function(asset) {
      var panel = new PanelView([asset])
      panels.push(panel.loadSingleImage())
    })
  }
  if (assetsPaneled < assetCount) {
    this.loadRemainingAssets(assetsPaneled)
  }
  return panels
}

ExperienceView.prototype.loadRemainingAssets = function(startingIndex) {
  var assetsPaneled = this.assetsPaneled
  var assetCount = this.assetCount
  var assetsPaneled = this.assetsPaneled
  var assets = this.assets
  var panels = this.panels

  var assetsIndex = startingIndex
  while (assetsIndex < assetCount) {
    var panel = new PanelView([assets[assetsIndex]])
    panels.push(panel.loadSingleImage())
    assetsIndex += 1
  }
}


ExperienceView.prototype.render = function() {
  removePanelNavigation()
  // For testing a predefined set of routes
  // this.loadAssets(["loadSingleImage", "loadTwoImages"])
  this.loadAssets([
    "loadSingleImage",
    ["masonify", 8],
    ["masonify",12],
    "loadTwoImages"])

  // Iterate through each panel in the panel array and append to fullpage
  this.panels.forEach(function(panel) {
    $('#fullpage').append(panel)
  })
  applyFullpage()
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

// ExperienceView.prototype.loadAssets = function() {
  // var $element = this.$element
  // var $gridSizer = $("<div>").addClass("grid-sizer")
  // $element.append($gridSizer);
  // this.experience.assets.forEach(function(asset) {
  // var $img = $("<img>").attr('src', asset.direct_upload_url)
  // var $div = $("<div>").attr('id', asset.id).addClass("sample-image grid-item").append($img)
  // $element.append($div) // These need to be individual assetViews maybe?
  // })
  // return $element
// }





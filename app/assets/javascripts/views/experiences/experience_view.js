function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.assets = this.experience.assets
  this.assetCount = this.experience.assets.length
  this.panels = []
  this.assetsPaneled = 0
  this.panelInstructions = []
  this.layoutLookup = LAYOUTLOOKUP
}

ExperienceView.prototype.loadAssets = function(_arrayOfLayouts) {

  var arrayOfLayouts = _arrayOfLayouts
  var assetCount = this.assetCount
  var assetsPaneled = this.assetsPaneled
  var layoutLookup = this.layoutLookup
  var panels = this.panels

  // Custom order assets to what user specifies
  this.assets = this.reorderAssets()
  var reorderedAssets = this.assets

  if (arrayOfLayouts) {
    // Take first layout
    arrayOfLayouts.forEach(function(layoutOption) {
      if (layoutOption.constructor == String) {
        var numAssets = layoutLookup[layoutOption][1]
        var assetSlice = reorderedAssets.slice(assetsPaneled, assetsPaneled + numAssets)
        var panel = new PanelView(assetSlice)
        var loadedPanel = eval("panel." + layoutOption + "()")
      } else if (layoutOption.constructor == Array) {
        var numAssets = layoutOption[1]
        var method = layoutOption[0]
        var assetSlice = reorderedAssets.slice(assetsPaneled, assetsPaneled + numAssets)
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
    if (assets[assetsIndex]) {
      var panel = new PanelView([assets[assetsIndex]])
      panels.push(panel.loadSingleImage())
    }
    assetsIndex += 1
  }
}


ExperienceView.prototype.render = function() {
  removePanelNavigation()
  // For testing a predefined set of routes
  // this.loadAssets([
  //   ["titleCaptionWithOverflow", 4], //Includes overflow and "loadSingleImage" should be next
  //   "loadSingleImage",
  //   ["imagesWithCaptions", 8],
  //   "titleCaption",
  //   ["masonify", 8],
  //   ["masonifyWithCaptions", 10],
  //   "loadTwoImages"])

  var panelRotation = []
  this.panelInstructions.forEach(function(element) {
    panelRotation.push(element[0])
  })
  this.loadAssets(panelRotation)


  this.panels.forEach(function(panel) {
    $('#fullpage').append(panel)
  })
  applyFullpage()
}

ExperienceView.prototype.getPanels = function() {
  var experience = this.experience
  var panelInstructions = this.panelInstructions
  var thisView = this
  var request = $.ajax({
    method: "get",
    url: "/experiences/" + experience.id + "/panels.json"
  })
  return request.then(function(response) {
    // console.log(response)
    response.forEach(function(panelInstruction) {
      thisView.panelInstructions.push(panelInstruction)
    })
  })
}

ExperienceView.prototype.reorderAssets = function() {
  // Need full set of assets
  var assets = $.extend(true, [], this.assets)
  // console.log(assets)
  var reorderedAssets = []
  var panelInstructions = this.panelInstructions
  // console.log(panelInstructions)

  function findAssetByID(array, id) {
    return array.find(function(element) {
      return +element.id === id
    })
  }

  panelInstructions.forEach(function(arrayOfAssets) {
    // Array[0] is the instruction
    // Array[1] is the set of asset IDs
    arrayOfAssets[1].forEach(function(assetID) {
      asset = findAssetByID(assets, assetID)
      var index = assets.indexOf(asset)
      reorderedAssets.push(asset)
      assets.splice(index, 1)
    })
  })

  // Must return assets as a complete set

  // console.log(reorderedAssets)
  this.assets = reorderedAssets.concat(assets)
  // console.log(this.assets)
  return this.assets

}

// The ordering is a bit messed up here

// The sequence is --
// When a bubble is clicked
// The bubble does an AJAX request to get the panel ordering from the database
// When that is DONE (on promise)
// Render is called
//    Which loads the assets via loadAssets (accepting the ordered panel array)
//    This is weird because embedded inside loadAssets is a reorder assets function that orders the assets correctly (critical)

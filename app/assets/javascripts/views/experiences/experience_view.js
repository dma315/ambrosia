function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  this.assets = this.experience.assets
  this.assetCount = this.experience.assets.length
  this.panels = []
  this.assetsPaneled = 0
  this.panelInstructions = []
  this.layoutLookup = {
    "loadSingleImage": 1,
    "loadTwoImages": 2,
    "masonify": "User input",
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
  // this.loadAssets([
  //   "loadSingleImage",
  //   ["masonify", 8],
  //   ["masonify",12],
  //   "loadTwoImages"])

  // this.loadAssets()

  // Iterate through each panel in the panel array and append to fullpage
  console.log(this.panelInstructions)
  this.loadAssets(this.panelInstructions)

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
    response.forEach(function(panelInstruction) {
      console.log(panelInstruction)
      thisView.panelInstructions.push(panelInstruction)
    })
  })
}

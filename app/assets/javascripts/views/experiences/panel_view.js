function PanelView(assetsArray) {
  this.assets = assetsArray
}

PanelView.prototype.loadSingleImage = function() {
  var src = this.assets[0].direct_upload_url
  var $div = $("<div>").addClass("section")
  var $img = $("<img>").attr("src", src)
  $div.append($img)
  return $div
}

PanelView.prototype.loadTwoImages = function() {
  var $div = $("<div>").addClass("section")
  this.assets.forEach(function(asset) {
    var src = asset.direct_upload_url
    var $img = $("<img>").attr("src", src)
    $img.css({
      "width": "50%"
    })
    $div.append($img)
  })
  return $div
}

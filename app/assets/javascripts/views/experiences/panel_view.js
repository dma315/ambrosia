function PanelView(assetsArray) {
  this.assets = assetsArray
}

PanelView.prototype.loadToSection = function() {
  // Hack for now is one image per section
  var src = this.assets[0].direct_upload_url
  var $div = $("<div>").addClass("section")
  var $img = $("<img>").attr("src", src)
  $div.append($img)
  return $div
}

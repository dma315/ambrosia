PanelView.prototype.load9GridWithSlideDown = function() {
  var $div = $("<div>").addClass("section")
  var $grid9container = $("<div>").addClass("grid-9-container").appendTo($div)
  this.assets.forEach(function(asset) {
    var $fig = $('<figure>').addClass("grid-9-item")
    var src = asset.direct_upload_url
    var $img = $("<img>").attr('src', src).addClass("grid-9-photo").appendTo($fig)
    var $captionContainer = $("<figcaption>").appendTo($fig)
    var $caption = $("<p>").text(asset.caption).appendTo($captionContainer)
    $fig.appendTo($grid9container)
  })
  return $div
}

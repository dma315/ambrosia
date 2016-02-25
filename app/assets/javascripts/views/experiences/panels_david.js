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

PanelView.prototype.singleImageGridOverlay = function() {
  var $div = $("<div>").addClass("section")
  var $fig = $('<figure>').addClass("single-image-grid-overlay").appendTo($div)
  var thisAsset = this.assets[0]
  var src = thisAsset.direct_upload_url
  var $img = $("<img>").attr('src', src).appendTo($fig)
  var $captionContainer = $("<figcaption>").appendTo($fig)
  var $h2 = $("<h2>").text(thisAsset.caption).appendTo($captionContainer)
  return $div
}

PanelView.prototype.load4GridWithDoorEffect = function() {
  var $div = $("<div>").addClass("section")
  var $grid4container = $("<div>").addClass("grid-4-container-door").appendTo($div)
  this.assets.forEach(function(asset) {
    var $fig = $('<figure>').addClass("grid-4-item-door")
    var src = asset.direct_upload_url
    var $img = $("<img>").attr('src', src).addClass("grid-4-item-door-image").appendTo($fig)
    var $captionContainer = $("<figcaption>").appendTo($fig)
    var $caption = $("<h2>").text(asset.caption).appendTo($captionContainer)
    $fig.appendTo($grid4container)
  })
  return $div
}


// <figure class="snip1370">
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample23.jpg" alt="sq-sample23" />
//   <figcaption><i class="ion-trophy"></i>
//     <h4>Abraham</h4>
//     <h2>Pigeon</h2>
//   </figcaption>
//   <a href="#"></a>
// </figure>

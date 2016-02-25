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


// <figure class="snip1407">
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg" alt="sample88" />
//   <figcaption>
//     <h2>Gunther Beard</h2>
//     <p>Weekends don't count unless you spend them doing something completely pointless.</p>
//     <div class="icons"><a href="#"><i class="ion-chatbubbles"></i></a>
//       <a href="#"> <i class="ion-person-add"></i></a>
//       <a href="#"> <i class="ion-heart"></i></a>
//     </div>
//   </figcaption>
// </figure>

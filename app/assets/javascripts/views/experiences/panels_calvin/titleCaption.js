
PanelView.prototype.titleCaption = function(){
  var asset = this.assets[0]
  var experienceID = asset.experience_id
  var experienceTitle = getExperienceTitle(experienceID)

  var $div = $("<div>").addClass("section")
  var $imageDiv = $("<div>").addClass("titleCaption-image")
  var $imageWithTitle = $("<img>").attr('src', asset.direct_upload_url)
  var $assetTitle = $("<h2>").addClass("titleCaption-h2").append(experienceTitle)

  $imageDiv.append($imageWithTitle);
  $imageDiv.append($assetTitle);
  $div.append($imageDiv)
  return $div
}


PanelView.prototype.masonify2 = function(){
  var $div = $("<div>").addClass("section")
  var $masonGrid = $("<div>").addClass('module grid')
  var $gridRuler = $("<div>").addClass('grid-sizer')
  $masonGrid.append($gridRuler)

  this.assets.forEach(function(asset) {
    var $gridItem = $("<div>").attr('id', asset.id).addClass("sample-image grid-item")
    var $img = $("<img>").attr('src', asset.direct_upload_url)
    $gridItem.append($img)
    $masonGrid.append($gridItem)
  })

  $masonGrid.imagesLoaded(function() {
    $masonGrid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 40,
      percentPosition: true
    });
  });

  return $div.append($masonGrid.kinetic())
}

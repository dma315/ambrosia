
PanelView.prototype.titleCaption = function(){
  var asset = this.assets[0]
  var experienceID = asset.experience_id
  var experienceTitle = getExperienceTitle(experienceID)

  var $div = $("<div>").addClass("section")
  var $imageDiv = $("<div>").addClass("titleCaption-image")
  var $imageWithTitle = $("<img>").attr('src', asset.direct_upload_url)
  var $assetTitle = $("<h1>").addClass("titleCaption-h1").append(experienceTitle)

  $imageDiv.append($imageWithTitle);
  $imageDiv.append($assetTitle);
  $div.append($imageDiv)
  return $div
}

PanelView.prototype.masonifyFun = function(){
  var $div = $("<div>").addClass("section")
  var $masonGrid = $("<div>").addClass('module grid')
  var $gridRuler = $("<div>").addClass('grid-sizer')
  $masonGrid.append($gridRuler)

  var sortedAssets = this.assets.sort(function(a, b){
    return b.caption.length - a.caption.length;
  });

  console.log(sortedAssets)

  this.assets.forEach(function(asset,index) {
    var $gridItem = $("<div>").attr('id', asset.id).addClass("sample-image grid-item")
    var $img = $("<div class='grid-item-content'>").append($("<img>").attr('src', asset.direct_upload_url))
    $gridItem.append($img)
    $masonGrid.append($gridItem)
  })

  var self = this;

  $masonGrid.imagesLoaded(function() {
    $masonGrid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 10,
      percentPosition: true
    });

    $masonGrid.on('click', '.grid-item', function(){
      $(this).toggleClass('grid-item--gigante');
      $masonGrid.masonry();
    })
    $masonGrid.on( 'layoutComplete', function( event, laidOutItems ) {
      console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
    });
  });

  return $div.append($masonGrid.kinetic())
}

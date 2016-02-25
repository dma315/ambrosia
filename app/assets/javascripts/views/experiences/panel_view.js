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

PanelView.prototype.masonify = function(){
  var $div = $("<div>").addClass("section")
  var $masonGrid = $("<div>").addClass('module grid')
  var $gridRuler = $("<div>").addClass('grid-sizer')
  $masonGrid.append($gridRuler)
  this.assets.forEach(function(asset) {
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
      // console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
    });
  });

  return $div.append($masonGrid.kinetic())
}

//this is a helper for if you want to get the asset's EXPERIENCE title
var getExperienceTitle = function(experienceID){
  var experienceObject = $.grep(EXPERIENCES, function(e){ return e.id == experienceID; });
  return experienceObject[0].title
}

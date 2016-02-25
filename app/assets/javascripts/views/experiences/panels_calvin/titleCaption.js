
PanelView.prototype.titleCaption = function(){
  var asset = this.assets[0];
  var experienceID = asset.experience_id;
  var experienceTitle = getExperienceTitle(experienceID);

  var $div = $("<div>").addClass("section");
  var $imageDiv = $("<div class='titleCaption-image'>");
  var $imageWithTitle = $("<img>").attr('src', asset.direct_upload_url)
  var $assetTitle = $("<h1>").addClass("titleCaption-h1").append(experienceTitle)

  $imageDiv.append($imageWithTitle);
  $imageDiv.append($assetTitle);
  $div.append($imageDiv)

  return $div
}


PanelView.prototype.titleCaptionWithOverflow = function(){
  var $div = $("<div>").addClass("section")
  //this produces a CSS trick where the two images land on the next page
  // var $frontImage1 = $("<img class='niceView4Front1 niceView4FrontAll niceView4Animation'>").attr("src", this.assets[1].direct_upload_url)
  // var $frontImage2 = $("<img class='niceView4Front2 niceView4FrontAll niceView4Animation'>").attr("src", this.assets[2].direct_upload_url)
  // var $frontImage3 = $("<img class='niceView4Front3 niceView4FrontAll'>").attr("src", this.assets[3].direct_upload_url)
  // $div.append($frontImage1)
  // $div.append($frontImage2)
  // $div.append($frontImage3)

  var asset = this.assets[0]
  var experienceID = asset.experience_id
  var experienceTitle = getExperienceTitle(experienceID)


  var $imageDiv = $("<div class='titleCaption-image'>")
  var $imageWithTitle = $("<img>").attr('src', asset.direct_upload_url)
  var $assetTitle = $("<h1>").addClass("titleCaption-h1").append(experienceTitle)

  $imageDiv.append($imageWithTitle);
  $imageDiv.append($assetTitle);
  $div.append($imageDiv)

  return $div
}

PanelView.prototype.masonifyWithCaptions = function(){
  var $div = $("<div>").addClass("section")
  var $masonGrid = $("<div>").addClass('module grid')
  var $gridRuler = $("<div>").addClass('grid-sizer')
  $masonGrid.append($gridRuler)

  var sortedAssets = this.assets.sort(function(a, b){
    return b.caption.length - a.caption.length;
  });

  this.assets.forEach(function(asset,index) {
    var $gridItem = $("<div>").attr('id', asset.id).addClass("sample-image grid-item")
    if (Math.random() > 0.83) {
      var assetCaption = $("<div>").addClass("masonifyWithCaptions").append('"' + sortedAssets[Math.floor(Math.random()*4)].caption + '"')
      $gridItem.append(assetCaption)
      $masonGrid.append($gridItem)
    }
    var $gridItem = $("<div>").attr('id', asset.id).addClass("sample-image grid-item  masonifySnipper")
    var $img = $("<div class='masonifyWithCaptionImages'>").append($("<img>").attr('src', asset.direct_upload_url))
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

  return $div.append($masonGrid.kinetic());
}

PanelView.prototype.imagesWithCaptions = function(){
  var $div = $("<div>").addClass("section sectionCenterAlign");
  this.assets.forEach(function(asset){
    $figure = $("<div class='snipper'>").append($("<img class='imagesWithCaptions'>").attr("src", asset.direct_upload_url))
    $figureCaption = $("<figcaption>").append($("<p>").append(asset.caption))
    $figure.append($figureCaption)
    $div.append($figure)
  })
  return $div
}





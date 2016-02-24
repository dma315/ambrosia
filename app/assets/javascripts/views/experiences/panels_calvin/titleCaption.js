
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

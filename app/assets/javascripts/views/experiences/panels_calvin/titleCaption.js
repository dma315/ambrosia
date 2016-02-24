
PanelView.prototype.titleCaption = function(){
  var experienceID = this.assets[0].experience_id
  var experienceDescription = getExperienceDescription(experienceID)
  console.log(experienceDescription)
  var $div = $("<div>").addClass("section")
  
  return $div
}

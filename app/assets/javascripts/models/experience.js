function Experience(object) {
  this.id = object.id
  this.title = object.title
  this.start_date = object.start_date
  this.end_date = object.end_date
  this.description = object.description
  this.user_id = object.user_id
  this._assets = object.assets
  this.assets = []
}

Experience.prototype.loadAssets = function() {
  var assets = this.assets
  this._assets.forEach(function(element) {
    var asset = new Asset(element)
    assets.push(asset)
  })
}

Experience.prototype.validExperience = function(){
  if(this.id && this.title && this.start_date && this.user_id){
    return true;
  } else {
    return false;
  }
};

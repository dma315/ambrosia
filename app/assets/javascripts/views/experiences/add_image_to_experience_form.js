function addImageToExperienceForm(experienceID) {
  var assetURL = "/users/" + getCurrentUser() + "/assets/new"
  $.ajax({
    method: "get",
    url: assetURL,
  })
  .done(function(response){
    var postURL = "/users/" + getCurrentUser() + "/assets"
    clearMainFrame()
    hideMainMenu()
    var $experienceID = $("<input>").attr({
      type: "hidden",
      value: experienceID,
      name: "assets[experience_id]"
    })
    $dropzone = $(response)
    $dropzone.find('#multi-upload').append($experienceID)
    $submit = $("<input type='submit'>").addClass("form-submit").appendTo($dropzone)
    appendToMainFrame($dropzone)
    var dropzone = new Dropzone("#multi-upload", { url: postURL });
  })
}


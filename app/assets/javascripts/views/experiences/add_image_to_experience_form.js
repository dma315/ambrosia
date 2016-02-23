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
    $dropzone = $(response).dropzone({postURL})
    appendToMainFrame($dropzone)
    // s3Run()
  })
}


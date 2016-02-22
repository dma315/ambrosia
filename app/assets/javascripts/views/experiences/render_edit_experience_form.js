function addImageToExperienceForm(event) {
  event.preventDefault()
  var assetURL = "/users/" + getCurrentUser() + "/assets/new"
  $.ajax({
    method: "get",
    url: assetURL,
  }).done(function(response){
    clearMainFrame()
    hideMainMenu()
    appendToMainFrame($(response))
    s3Run()
  })
}


function renderEditExperienceForm() {

  var assetURL = "users/" + getCurrentUser() + "/assets/new"
  $.ajax({
    method: "get",
    url: assetURL,
  }).done(function(response){
    console.log(response)
    appendToMainFrame($(response))
  })
}


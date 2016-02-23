function loadSubmittedUserExperience() {
  var experienceID = +$('input[name="assets[experience_id]"').val()
  getUserExperienceByID(experienceID)
}

function getUserExperienceByID(id) {
  var url = "/assets/" + getCurrentUser() + "/assets/" + id + ".json"
  $.ajax({
    method: "get",
    url: url
  })
  .done(function(response) {
    var experience = new Experience(response)
    // Finish this later
  })
}

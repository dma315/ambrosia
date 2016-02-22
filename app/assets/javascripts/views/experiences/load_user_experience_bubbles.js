function loadUserExperienceBubbles() {
  $.ajax({
    method: "get",
    url: "/experiences/my-experiences.json"
  })
  .then(function(response) {
    EXPERIENCES = []
    response.forEach(function(experience) {
      var experienceObject = new Experience(experience)
      experienceObject.loadAssets()
      EXPERIENCES.push(experienceObject)
    })
    console.log(EXPERIENCES)
    return EXPERIENCES
  })
  .done(function(experiences) {
    EXPERIENCES.forEach(function(experience, index) {
      NAVSCROLL.experienceBubbles[index].loadExperience(experience)
    })
  })
}

function loadUserExperienceBubbles() {
  $.ajax({
    method: "get",
    url: "/experiences/my-experiences.json"
  })
  .done(function(response) {
    console.log(response)
  })
}

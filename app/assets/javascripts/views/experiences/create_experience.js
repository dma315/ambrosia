function renderCreateExperienceForm() {
    $.ajax({
      method: "GET",
      url: "/experiences/new"
    })
    .done(function(response) {
      var experienceBoxID = "#experience-box"
      if (!mainFrameContains(experienceBoxID)) {
        $createExperienceForm = $(response);
        hideMainMenu();
        clearMainFrame().done(function() {
          appendToMainFrame($createExperienceForm);
        })
      }
      $(".experience-form-input-title").on("keyup", function(){
      var textAreaValue = $(".experience-form-input-title").val();
      $("#experience-title").html(textAreaValue)
    })
  })
}

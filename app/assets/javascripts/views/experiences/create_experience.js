function renderCreateExperienceForm() {
    $.ajax({
      method: "GET",
      url: "/experiences/new"
    })
    .done(function(response) {
      $createExperienceForm = $(response);
      clearMainFrame();
      hideMainMenu();
      appendToMainFrame($createExperienceForm);
      $(".experience-form-input-title").on("keyup", function(){
        var textAreaValue = $(".experience-form-input-title").val();
      $("#experience-title").html(textAreaValue)
    })
  })
}

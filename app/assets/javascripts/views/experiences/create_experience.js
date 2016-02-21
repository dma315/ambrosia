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
    })

}

function loadSingleExperience(bubble) {
  // Needs refactoring

  // Removes stuff from page
  removePanelNavigation()
  hideMainFrame();
  hideMainMenu();
  showFullpage();

  // Gets experience
  var experienceID = +$(bubble).attr('id')
  updateManageLink(experienceID) // This is critical for updating the manage link to link to appropriate experience
  // $('.background-images').css({'background': 'black'})

  // Activates bubbles
  $('.experience-bubble').removeClass("active-bubble")
  $(bubble).addClass("active-bubble")

  // Creates and renders view
  var experienceView = new ExperienceView(experienceID)
  experienceView.getPanels().done(function() {
    clearFullpage().done(function() {
      experienceView.render();
    });
  })
}

function loadSingleExperience(bubble) {
  removePanelNavigation()
  hideMainFrame();
  hideMainMenu();
  showFullpage();
  var experienceID = +$(bubble).attr('id')
  updateManageLink(experienceID) // This is critical for updating the manage link to link to appropriate experience
  // $('.background-images').css({'background': 'black'})
  $('.experience-bubble').removeClass("active-bubble")
  $(bubble).addClass("active-bubble")
  var experienceView = new ExperienceView(experienceID)
  clearFullpage().done(function() {
    experienceView.render();
  });
}

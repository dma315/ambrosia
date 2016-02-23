function userLogout() {
  $.ajax({
    method: "DELETE",
    url: "/sessions/delete"
  })
  .done(function(response) {
    clearCurrentUser()
    hideMainMenu();
    clearMainFrame();
    fadeOutExperienceBubbles();
    renderLoginForm();
    $('.logged-in').hide();
    $('.logged-out').show();
  });
};


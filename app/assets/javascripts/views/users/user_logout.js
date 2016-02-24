function userLogout() {
  $.ajax({
    method: "DELETE",
    url: "/sessions/delete"
  })
  .done(function(response) {
    clearCurrentUser()
    hideMainMenu();
    clearUserExperienceBubbles();
    clearFullpage();
    hideFullpage();
    showMainFrame();
    clearMainFrame().done(function() {
      renderLoginForm();
    })
    $('.logged-in').hide();
    $('.logged-out').show();
  });
};


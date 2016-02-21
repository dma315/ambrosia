function userLogout() {
  $.ajax({
    method: "DELETE",
    url: "/sessions/delete"
  })
  .done(function(response) {
    clearCurrentUser()
    hideMainMenu();
    clearMainFrame();
    renderLoginForm();
    $('.logged-in').hide();
    $('.logged-out').show();
  });
};


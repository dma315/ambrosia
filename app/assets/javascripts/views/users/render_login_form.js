function renderLoginForm() {
  if ($(document).find('#user-login-box').length === 0 && $(document).find('#user-registration-box').length === 0) {
    $.ajax({
      method: "GET",
      url: "/sessions/new"
    })
    .done(function(response) {
      $loginForm = $(response);
      clearMainFrame();
      hideMainMenu();
      appendToMainFrame($loginForm);
    })
  };
}

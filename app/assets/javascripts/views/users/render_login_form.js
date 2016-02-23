function renderLoginForm() {
  var loginFormID = '#user-login-box'
  if (!mainFrameContains(loginFormID)) {
    $.ajax({
      method: "GET",
      url: "/sessions/new"
    })
    .done(function(response) {
      $loginForm = $(response);
      hideMainMenu();
      clearMainFrame().done(function() {
        appendToMainFrame($loginForm);
      });
    })
  };
}

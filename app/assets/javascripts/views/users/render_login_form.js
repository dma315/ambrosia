function renderLoginForm() {
  if ($(document).find('#user-login-box').length === 0) {
    $.ajax({
      method: "GET",
      url: "/sessions/new"
    })
    .done(function(response) {
      var $loginForm = $(response).hide()
      hideMainMenu()
      $('main').append($loginForm)
      $loginForm.fadeIn()
    })
  };
}

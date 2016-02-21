function renderLoginForm() {
  if ($(document).find('#user-login-box').length === 0 && $(document).find('#user-registration-box').length === 0) {
    // $('body > *').not("#user-login-box").on('click', function(){
    //   $('#user-login-box').fadeOut()
    //   function removeLoginBox() {
    //     $('#user-login-box').remove()
    //   }
    //   setTimeout(removeLoginBox, 1000)
    // })
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

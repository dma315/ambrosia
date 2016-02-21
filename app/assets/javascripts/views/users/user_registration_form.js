var userRegister = function(){
  if ($(document).find('#user-login-box').length === 0 && $(document).find('#user-registration-box').length === 0) {
    // $('body > *').not("#user-registration-box").on('click', function(){
    //   $('#user-registration-box').fadeOut()
    //   function removeRegistrationBox() {
    //     $('#user-registration-box').remove()
    //   }
    //   setTimeout(removeRegistrationBox, 1000)
    // })
    $.ajax({
      method: "GET",
      url: "/users/new"
    })
    .done(function(response) {
      console.log("DONE!")
      var $loginForm = $(response).hide()
      hideMainMenu()
      $('main').append($loginForm)
      $loginForm.fadeIn()
    })
  };


}

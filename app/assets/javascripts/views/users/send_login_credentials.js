function sendLoginCredentials(form) {
  formData = $(form).serialize();
  var request = $.ajax({
    method: 'post',
    url: '/sessions',
    data: formData
  })
  request.done(function(response){
    $("#user-login-box").fadeOut()
    function removeLoginBox() {
      $('#user-login-box').remove()
    }
    setTimeout(removeLoginBox, 1000)
    $("#login").remove();
    $('#main-menu ul').append("<li><a id='logout' href='#/logout'>Logout</a></li>")
  })
  request.fail(function(response) {
    var $error = $("<p>").text("Login credentials invalid")
    $('.login-form').before($error)
  })
}


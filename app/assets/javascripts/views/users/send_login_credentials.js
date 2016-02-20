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
    var $logoutButton = $("<li>").append($("<a>").attr("href", "#/logout").text("Logout"))
    $('#main-menu ul').append($logoutButton)
  })
  request.fail(function(response) {
    var $error = $("<p>").text("Login credentials invalid")
    $('.login-form').before($error)
  })
}


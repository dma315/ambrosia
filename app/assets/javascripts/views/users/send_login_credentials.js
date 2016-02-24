function sendLoginCredentials(form) {
  formData = $(form).serialize();
  var request = $.ajax({
    method: 'post',
    url: '/session',
    data: formData
  })
  request.done(function(response){
    setCurrentUser();
    clearMainFrame();
    $('.logged-out').hide()
    $('.logged-in').show()
    loadUserExperienceBubbles()
  })
  request.fail(function(response) {
    var $error = $("<p>").text("Login credentials invalid")
    $('.login-form').before($error)
  })
}


function sendLoginCredentials(form) {
  formData = $(form).serialize();
  console.log(formData)
  var request = $.ajax({
    method: 'post',
    url: '/sessions',
    data: formData
  })
  request.done(function(response){
    clearMainFrame()
    $('.logged-in').show()
  })
  request.fail(function(response) {
    var $error = $("<p>").text("Login credentials invalid")
    $('.login-form').before($error)
  })
}


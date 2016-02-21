function sendLoginCredentials(form) {
  formData = $(form).serialize();
  console.log(formData)
  var request = $.ajax({
    method: 'post',
    url: '/sessions',
    data: formData
  })
  request.done(function(response){
    $.ajax({
      method: "get",
      url: "/sessions/uid"
    })
    .done(function(response) {
      $('#session').text(response)
    })
    clearMainFrame()
    $('.logged-in').show()
  })
  request.fail(function(response) {
    var $error = $("<p>").text("Login credentials invalid")
    $('.login-form').before($error)
  })
}


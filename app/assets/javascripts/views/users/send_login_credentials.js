function sendLoginCredentials(form) {
  formData = $(form).serialize();
  $.ajax({
    method: 'post',
    url: '/sessions',
    data: formData,
    success: function(response){
      console.log("success")
      },
    error: function(response) {
      console.log("failure")
    }
  }).done(function(response){
    $("#user-login-box").fadeOut()
    function removeLoginBox() {
      $('#user-login-box').remove()
    }
    setTimeout(removeLoginBox, 1000)
  });
}


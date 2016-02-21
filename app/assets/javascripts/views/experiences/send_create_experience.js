function createExperience(form){
  formData = $(form).serialize();
  var request = $.ajax({
    method: 'post',
    url: '/experiences',
    data: formData
  })
  request.done(function(response){
    console.log("Response")
    console.log(response)
    $('#experience-box').fadeOut()
    function removeRegistrationBox() {
      $('#experience-box').remove()
    }
    setTimeout(removeRegistrationBox, 1000)
    $('#main-menu').find('#register').remove()
    $('#main-menu').find('#login').remove()
    $('#main-menu ul li:last').append("<a id='logout' href='#/logout'>Logout</a>");
  })
  request.fail(function(response) {
    console.log('nope')
    var $error = $("<p>").text("Title Required")
    $("#create-experience-submit").prepend($error)
  })
}

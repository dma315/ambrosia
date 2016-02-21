function submitRegistration(form){
  formData = $(form).serialize();
  var request = $.ajax({
    method: 'post',
    url: '/users',
    data: formData
  })
  request.done(function(response){
    $('#user-registration-box').fadeOut()
    function removeRegistrationBox() {
      $('#user-registration-box').remove()
    }
    setTimeout(removeRegistrationBox, 1000)
    $('#main-menu').find('#register').remove()
    $('#main-menu').find('#login').remove()
    $('#main-menu ul li:last').append("<a id='logout' href='#/logout'>Logout</a>");
  })
}

function submitRegistration(form){
  formData = $(form).serialize();
  var request = $.ajax({
    method: 'post',
    url: '/users',
    data: formData
  })
  request.done(function(response){
    setCurrentUser();
    clearMainFrame();
    $('.logged-out').hide();
    $('.logged-in').show();
  })
}

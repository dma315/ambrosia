var renderRegisterForm = function(){
  var registerID = '#user-registration-box'
  if (!mainFrameContains(registerID)) {
    $.ajax({
      method: "GET",
      url: "/users/new"
    })
    .done(function(response) {
      var $registerForm = $(response)
      hideMainMenu();
      showMainFrame();
      clearMainFrame().done(function() {
        appendToMainFrame($registerForm);
      })
    })
  };
}

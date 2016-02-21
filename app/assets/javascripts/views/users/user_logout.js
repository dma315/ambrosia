function userLogout() {
  $.ajax({
    method: "DELETE",
    url: "/sessions/delete"
  }).done(function(response) {
    $('#main-menu').find('#logout').remove()
    $('#main-menu ul li:nth-child(3)').append("<a id='register' href='#/register'>Register</a>")
    $('#main-menu ul li:last').append("<a id='login' href='#/login'>Login</a>");
  });
};

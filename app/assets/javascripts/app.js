$(document).ready(function() {
  if ($(document).find('#logout').length != 0) {
    loadImagesToDOM()
  }
  // Load navBubbles
  var nav = new NavScroll().initialize()
  $('nav').on('scroll', function () { nav.resizeBubbles() })

  $(window).on('resize', function() {
    nav.recalibrateBubbles()
  })

  // Load Hidden Navbar
  $(document).on('click', '.fa-bars', function(event) {
    event.preventDefault()
    showMainMenu()
  });

  $(document).on('click', '#menu-overlay, .fa-times', function() {
    hideMainMenu()
  });

  // Login stuff
  $(document).on('click', '#login', function() {
    renderLoginForm()
  });

  $('#main-menu').on('click', '#logout', function() {
    userLogout()
  });

  $('main').on('submit', '.login-form', function(event) {
    event.preventDefault();
    sendLoginCredentials(this)
  });

  $(document).on('click', '#register', function(event) {
    renderRegisterForm()
  });

  $('main').on('submit', '.register-form', function(event) {
    event.preventDefault();
    submitRegistration(this)
  });

  $('#main-menu').on('click', '#create', function() {
    renderCreateExperienceForm()
  });

})


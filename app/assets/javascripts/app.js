$(document).ready(function() {

  getCurrentUser()

  if (CURRENTUSER) {
    $('.logged-out').hide()
  } else {
    $('.logged-in').hide()
  }

  if ($(document).find('#logout').length != 0) {
    // loadImagesToDOM()
  }
  // Load navBubbles
  NAVSCROLL = new NavScroll().initialize()
  $('nav').on('scroll', function () { NAVSCROLL.resizeBubbles() })
  $(window).on('resize', function() {
    NAVSCROLL.recalibrateBubbles()
  })

  // Load Hidden Navbar
  $(document).on('click', '.fa-bars', showMainMenu)
  $(document).on('click', '#menu-overlay, .fa-times', hideMainMenu)

  // Login stuff
  $(document).on('click', '#login', renderLoginForm)
  $('#main-menu').on('click', '#logout', userLogout)
  $('main').on('submit', '.login-form', function(event) {
    event.preventDefault();
    sendLoginCredentials(this)
  });
  $(document).on('click', '#register', renderRegisterForm)
  $('main').on('submit', '.register-form', function(event) {
    event.preventDefault();
    submitRegistration(this)
  });

  // Create new experience
  $('#main-menu').on('click', '#create', renderCreateExperienceForm)

  $('#main-menu').on('click', '#manage', addImageToExperienceForm)

  $('main').on('submit', '#create-experience-submit', function(event) {
    event.preventDefault();
    createExperience(this)
  });

  // Load experiences -- needs refactoring
  $("nav").on('click', ".experience-bubble", function(event) {
    var experienceID = +$(this).attr('id')
    $('.background-images').css({'background': 'black'})
    $('.experience-bubble').removeClass("active-bubble")
    $(this).addClass("active-bubble")
    var experienceView = new ExperienceView(experienceID)
    experienceView.render();
  })

})


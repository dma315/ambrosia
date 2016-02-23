$(document).ready(function() {

  getCurrentUser()

  if (CURRENTUSER) {
    $('.logged-out').hide()
    loadUserExperienceBubbles()
  } else {
    $('.logged-in').hide()
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

  $('#main-menu').on('click', '#manage', function() {
    renderAssetCaptionForm(EXPERIENCES[0].id)
  });

  $('main').on('submit', '#create-experience-submit', function(event) {
    event.preventDefault();
    createExperience(this)
  });

  // Load experiences -- needs refactoring -- may get removed once we finalize
  $("nav").on('click', ".experience-bubble", function(event) {
    hideMainFrame();
    showFullpage();
    var experienceID = +$(this).attr('id')
    // $('.background-images').css({'background': 'black'})
    $('.experience-bubble').removeClass("active-bubble")
    $(this).addClass("active-bubble")
    var experienceView = new ExperienceView(experienceID)
    experienceView.render();
  })

  // Adds new experience and reloads river
  $(document).on('click', '#submit-images', function(event) {
    event.preventDefault();
    var experienceID = +$('input[name="assets[experience_id]"').val()
    clearUserExperienceBubbles();
    loadUserExperienceBubbles();
    clearMainFrame().done(function() {
      renderAssetCaptionForm(experienceID)
    });
  })

  //Close button on forms
  $(document).on('click', '.close-button', function() {
    clearMainFrame().done(hideMainFrame)
  })

  // Edit image caption
  $(document).on('click', '.click-to-edit', function() {
    $(this).closest('.edit-image-container').find('.click-to-edit').css({
      'color': 'transparent'
    })
    $(this).closest('.edit-image-container').find('.edit-image-form').css({
      'background': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
    }).fadeIn();
  })

  $(document).on('mouseover', '.click-to-edit', function() {
    addClickToEditOpacity(this)
  });

  $(document).on('mouseleave', '.click-to-edit', function() {
    removeClickToEditOpacity(this)
  });
})


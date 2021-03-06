$(document).ready(function() {

  getCurrentUser()

  if (CURRENTUSER) {
    $('.logged-out').hide()
    loadUserExperienceBubbles()
  } else {
    $('.logged-in').hide()
  }

  // Get object that is the lookup table for all panel methods
  getLayoutLookup()

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

  $("#main-menu").on('click', '#background', changeBackground);

  $('#main-menu').on('click', '#manage', function() {
    var experienceID = $('#manage').data().experienceid
    if (experienceID != undefined) {
      var experienceToManage = EXPERIENCES.find(function(experience) {
        return experience.id === experienceID
      })
      renderExperienceManageForm(experienceToManage.id)
    } else {
      renderExperienceManageForm(EXPERIENCES[0].id)
    }
  });

  $('#main-menu').on('click', '#captions', function() {
    var experienceID = $('#captions').data().experienceid
    if (experienceID != undefined) {
      var experienceToCaption = EXPERIENCES.find(function(experience) {
        return experience.id === experienceID
      })
      renderAssetCaptionForm(experienceToCaption.id)
    } else {
      renderAssetCaptionForm(EXPERIENCES[0].id)
    }
  });

  $('main').on('submit', '#create-experience-submit', function(event) {
    event.preventDefault();
    createExperience(this)
  });

  // Load experiences -- needs refactoring -- may get removed once we finalize
  $("nav").on('click', ".experience-bubble", function(event) {
    loadSingleExperience(this)
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
    showEditCaptionForm(this)
  })

  $(document).on('mouseover', '.click-to-edit', function() {
    addClickToEditOpacity(this)
  });

  $(document).on('mouseleave', '.click-to-edit', function() {
    removeClickToEditOpacity(this)
  });

  $(document).on('submit', '.edit-caption', function(event) {
    event.preventDefault()
    submitCaption(this)
  })


  // Panel stuff
  $(document).on('click', '.panel-submit', function(event) {
    panelSubmit(this)
  })

  $(document).on('click', '.dropdown-option', function() {
    var $optionSelected = $(this)
    $optionSelected.closest('.dropdown').find('.dropdown-option').removeClass("selected")
    $optionSelected.addClass("selected")
    var textToAppend = $optionSelected.text()
    $optionSelected.closest('.panel').find('.option-selected').text(textToAppend)
  })

  $(document).on('click', '#add-new-panel', addNewPanel)
  $(document).on('click', '.panel-remove', function() {
    removePanel(this)
  })

  // IDLETIME = 0
  // //This is for the autoscroll after 20 seconds. Needs to be on doc ready.
  // var idleInterval = setInterval(timerIncrement, 600); //For the idle time of about 16 seconds
  // $(this).mousemove(function (e) {
  //     IDLETIME = 0;
  // });
  // $(this).keypress(function (e) {
  //     IDLETIME = 0;
  // });


})


$(document).ready(function() {

  // Load navBubbles
  var nav = new NavScroll().initialize()
  $('nav').on('scroll', function () { nav.resizeBubbles() })

  $(window).on('resize', function() {
    nav.recalibrateBubbles()
  })

  // Load Hidden Navbar
  $(document).on('click', '.fa-bars', function() {
    showMainMenu()
  });

  $(document).on('click', '#menu-overlay, .fa-times', function() {
    hideMainMenu()
  });

})


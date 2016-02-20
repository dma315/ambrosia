$(document).ready(function() {

  // Load navBubbles
  var nav = new NavScroll().initialize()
  $('nav').on('scroll', function () { nav.resizeBubbles() })

  // Load Hidden Navbar

})


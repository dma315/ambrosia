var showMainMenu = function() {
  $('nav').after($('#menu-overlay'));
  $('#menu-overlay').fadeIn();

  // Manages the adding of each link and animates each
  var linkIndex = 0;
  $('#main-menu').find('li').each(function() {
    var link = $(this);
    linkIndex++;
    fadeAllMenuItems(linkIndex, link)
  });

  $('.fa-bars').fadeOut(100, function() {
    var $hamburgerMenu = $(this)
    $hamburgerMenu.removeClass('fa-bars')
    $hamburgerMenu.addClass('fa-times')
    $hamburgerMenu.fadeIn();
  });
}

var hideMainMenu = function() {
  //This is the going away part
  $('#menu-overlay').fadeOut();
  var $menuItems = $('#main-menu').find('li')

  $menuItems.animate( {'left': '-550px'},
                      { duration: 1000 })
  $menuItems.fadeOut( { queue: false } );

  //this is making the x disappear
  $('.hamb').fadeOut(100, function() {
    var $hamb = $(this)
    var $timesMenu = $hamb.find($('i'))
    $timesMenu.removeClass('fa-times')
    $timesMenu.addClass('fa-bars')
    $timesMenu.end()
    $hamb.fadeIn();
  });
}

// Helper functions for showing the menu fadeAllMenuItems(linkIndex, link)
function fadeAllMenuItems(linkIndex, link) {
  setTimeout(animateAndFadeIn(link), 60 * linkIndex) //time between each link
}

function animateAndFadeIn(link) {
  link.animate( {'left': '20px'},
                { duration: 1000,
                  easing: "easeOutCubic" })
  link.fadeIn( {queue: false} );
}


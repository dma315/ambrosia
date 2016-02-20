
$(document).on('click', '.fa-bars', function() {
    $('nav').after($('#menu-overlay'));
    $('#menu-overlay').fadeIn();

    // Manages the adding of each link and animates each
    var linkIndex = 0;
    $('#main-menu').find('li').each(function() {
      var link = $(this);
      linkIndex++;
      fadeAllMenuItems(linkIndex, link)

      // Helper functions for above
      function fadeAllMenuItems(linkIndex, link) {
        setTimeout(animateAndFadeIn, 60 * linkIndex) //time between each link
      }

      function animateAndFadeIn() {
        link.animate( {'left': '20px'},
                      { duration: 1000,
                        easing: "easeOutCubic" })
        link.fadeIn( {queue: false} );
      }
    });

    $('.fa-bars').fadeOut(100, function() {
      $(this)
        .removeClass('fa-bars')
        .addClass('fa-times')
        .fadeIn();
    });
  })
  .on('click', '#menu-overlay, .fa-times', function() {
    //This is the going away part
    $('#menu-overlay').fadeOut();
    $('#main-menu').find('li')
      .animate({
        'left': '-550px'
      }, {
        duration: 1000
      })
      .fadeOut({
        queue: false
      });

    //this is making the x disappear
    $('.hamb').fadeOut(100, function() {
      $(this)
        .find($('i'))
        .removeClass('fa-times')
        .addClass('fa-bars')
        .end()
        .fadeIn();
    });
  })


$(document)

  .on('click', '.fa-bars', function() {
    $('nav').before($('#overlay'));
    $('#overlay').fadeIn();

    // Manages the adding of each link and animates each
    var i = 0;
    $('#section-nav').find('li').each(function() {
      var link = $(this);
      i++;
      (function(i, link) {
        setTimeout(function() {
          link
            .animate({
              'left': '20px'
            }, {
              duration: 1000,
              easing: "easeOutCubic"
            })
            .fadeIn({
              queue: false
            });
        }, 60 * i) //time between each link
      }(i, link))
    });
    $('.fa-bars').fadeOut(100, function() {
      $(this)
        .removeClass('fa-bars')
        .addClass('fa-times')
        .fadeIn();
    });
  })
  .on('click', '#overlay, .fa-times', function() {
    //This is the going away part
    $('#overlay').fadeOut();
    $('#section-nav').find('li')
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

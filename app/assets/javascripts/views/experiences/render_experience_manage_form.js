function renderExperienceManageForm(experienceID) {
  var url = "/experiences/" + experienceID + "/manage"
  $.ajax({
    method: "get",
    url: url
  })
  .done(function(response) {
    clearMainFrame().done(function() {
      clearFullpage();
      hideFullpage();
      showMainFrame();
    });
    hideMainMenu();
    appendToMainFrame($(response))

    // Draggable
    $(".draggable-image-box").draggable({
      // revert: true,
      containment: "window",
      scroll: false,
      appendTo: 'body',
      helper: 'clone'
    })

    // Droppable
    $('.droppable-panel').droppable({
      drop: function(event, ui) {
        $dropArea = $(this)
        $(ui.draggable).appendTo($dropArea)
      }
    });

    // Original drag area must be droppable back
    $('.draggable-images-container').droppable({
      drop: function(event, ui) {
        $dropArea = $(this)
        $(ui.draggable).prependTo($dropArea)
      }
    })

  })
}

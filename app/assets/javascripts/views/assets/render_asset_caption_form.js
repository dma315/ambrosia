function renderAssetCaptionForm(experienceID) {
  var url = "/experiences/" + experienceID + "/edit" 
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
  })
}
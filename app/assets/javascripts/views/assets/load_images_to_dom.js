function loadImagesToDOM(){
  console.log("loaded")
  appendToMainFrame($("<div class='assets-screen'></div>"))
  $.ajax({
    method: "get",
    url: "/assets/collection"
  }).done(function(response) {
    $(".assets-screen").append(response)
  });
}

function findScrollPosition(){
  return $(".assets-screen").scrollTop()
}



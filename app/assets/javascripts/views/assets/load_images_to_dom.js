function loadImagesToDOM(){
  console.log("loaded")
  $('main').append("<div class='assets-screen'></div>").hide().fadeIn(2000)
  $.ajax({
    method: "get",
    url: "/assets/collection"
  }).done(function(response) {
    $(".assets-screen").append(response)
  });
}

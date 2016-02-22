function loadImagesToDOM(){
  console.log("loaded")
  appendToMainFrame($("<div class='assets-screen'></div>"))
  $.ajax({
    method: "get",
    url: "/assets/collection"
  }).done(function(response) {
    $(".assets-screen").append(response)
    $(".assets-screen").promise().done(function(){
    	doSomeAnimationShit()
    })
  });
}

function doSomeAnimationShit(){
	var logo = document.getElementById("asset0");
    TweenLite.to(["#asset0"], 5, {left:"632px"});
    window.setTimeout(TweenLite.to("#asset1", 4, {left:"632px"}), 5000);
}



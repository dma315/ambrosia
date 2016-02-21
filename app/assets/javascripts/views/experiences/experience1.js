function loadExperience(){
	$.ajax({
      method: "GET",
      url: "/users/1/experiences"
    })
	.done(function(data){
		$stuff = $(data);
		clearMainFrame();
		hideMainMenu();
		$('html').css('background-color, black');
		appendToMainFrame($stuff);
	});
	// $('#main-frame').css('background-color:black')
};

function loadImage(){
	$.ajax({
		method: "GET",
		url: "https://s3.amazonaws.com/dbc-ambrosia88/uploads/1455912147240-iwrr0mfop0mp9zfr-2cb26da6658e3a138f3b65f1dc7f1330/DSCF0007.JPG"
	})
	.done(function(data){
		$image = $(data);
		clearMainFrame();
		hideMainMenu();
		$('#main-frame').append($image);
	});
}

function getImage(){

}

function moveImg(){
	var elem = document.getElementById("animate");
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame(){
		if (pos == 450) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.bottom = pos - 'px';
			elem.style.left = pos + 'px';
		}
	}
}
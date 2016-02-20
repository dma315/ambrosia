$(document).ready(function(){
  $("form").on("submit", function(event) {
		event.preventDefault();
		formData = $(this).serialize();
		$.ajax({
			method: 'post',
			url: '/sessions',
			data: formData,
      success: function(response){  
        console.log("success")
        },
      error: function(response) { 
        console.log("failure")
      }
		}).done(function(response){ 
      console.log("response")
    });
	})
})
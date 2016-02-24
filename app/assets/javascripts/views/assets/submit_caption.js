function submitCaption(form) {
  var $thisForm = $(form)
  var data = $thisForm.serialize();
  var url = $thisForm.attr('action')
  $.ajax({
    method: "patch",
    url: url,
    data: data
  })
  .done(function(response) {
    var textToInject = response.replace(/"/g,"")
    $thisForm.find('.click-to-edit-text').text(textToInject)    
    $thisForm.find('.edit-image-form').fadeOut();
  })
}
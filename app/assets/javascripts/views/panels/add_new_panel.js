function addNewPanel() {
  var experienceID = +$('.active-bubble').attr('id')
  $.ajax({
    method: "get",
    url: "/experiences/" + experienceID + "/panels/new"
  })
  .done(function(response) {
    var $newForm = $(response)
    $('.panel-group').append($newForm)
    $('.droppable-panel').droppable({
      drop: function(event, ui) {
        $dropArea = $(this)
        $(ui.draggable).appendTo($dropArea)
      }
    });
  })
}

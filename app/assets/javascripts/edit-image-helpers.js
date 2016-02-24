function removeClickToEditOpacity(element) {
  $(element).css({
      'background': 'transparent',
      'color': 'transparent'
  })
}

function addClickToEditOpacity(element) {
  $(element).css({
      'background': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
      'color': 'white'
  })
}

function showEditCaptionForm(element) {
  $(element).closest('.edit-image-container').find('.click-to-edit').css({
      'color': 'transparent'
    })
  $(element).closest('.edit-image-container').find('.edit-image-form').css({
      'background': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
    }).fadeIn();
}

// function hideEditImageForm(element) {
//   var closestContainer = $(this).closest('.edit-image-container')
//   $(closestContainer).find('.edit-image-form').fadeOut();
// }
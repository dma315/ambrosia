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
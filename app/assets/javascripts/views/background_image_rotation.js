var backgroundImages = [
    "beach.jpeg",
    "elephants.jpeg",
    "flowers.jpeg",
    "reflection.jpeg",
    "turtle.jpeg",
    "water.jpeg"
]

function changeImage() {
  var count = backgroundImages.length
  var property = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("assets/' + backgroundImages[Math.floor(Math.random() * count)] + '")'
  $('.background-images').css({
    'background': property,
    'background-size': 'cover'})
}

var backgroundCounter = 0
var rotations = 10000

function rotateBackgrounds() {
  backgroundCounter++
  if (backgroundCounter < rotations) {
    setTimeout(changeImage, 10000)
    setTimeout(rotateBackgrounds, 10000)
  }
}

rotateBackgrounds()

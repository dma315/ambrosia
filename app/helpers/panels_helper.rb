module PanelsHelper
  def panel_methods
    # Method to run in JS => [ "What the text should say", images it accepts]
    return {
      "titleCaption" => ["Cover Screen: 1 image", 1],
      "loadSingleImage" => ["Full Screen: 1 image", 1],
      "singleImageGridOverlay" => ["Full Screen with faded overlay", 1],
      "titleCaptionWithOverflow" => ["1 image with 3 floats: 1 image", 4],
      "loadTwoImages" => ["Split Screen: 2 images", 2],
      "load4GridWithDoorEffect" => ["4 Panel Grid with Door Effect", 4],
      "niceView4Images" => ["Grid: 4 images", 4],
      "imagesWithCaptions" => ["Captioned Grid: 8 images", 8],
      "masonify" => ["Masonry: Many images", "variable"],
      "masonifyWithCaptions" => ["Masonry: Many images", "variable"],
      "load9GridWithSlideDown" => ["3x3 Grid with Captions", 9]
    }
  end
end

module PanelsHelper
  def panel_methods
    # Method to run in JS => [ "What the text should say", images it accepts]
    return {
      "titleCaption" => ["Cover Screen: 1 image", 1],
      "loadSingleImage" => ["Full Screen: 1 image", 1],
      "loadTwoImages" => ["Split Screen: 2 images", 2],
      "masonify" => ["Masonry: Many images", "variable"]
    }
  end
end

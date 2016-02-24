function ExperienceView(id) {
  this.experience = getExperienceByID(id);
  this.$element = $("<div>").addClass('module grid');
  this.id = id;
  this.masonify();
}

ExperienceView.prototype.render = function() {
  // Test image:
  var $bigPicSection = $("<div>").addClass("module grid-item").append($("<img src='http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg'>"));

  var that = this;
  var $gridSizer = $('<div>').addClass('grid-sizer');
  this.$element.append($gridSizer);
  var sectionifier = new Sectionify(this.id);
  sectionifier.buildMasonryPage(sectionifier.assets);
  sectionifier.thingsToRender.forEach(function(renderable){
    that.$element.append(renderable);
  });

  clearFullpage().done(function(){
    appendToFullPage(that.$element.addClass("section")).done(that.remasonify.bind(that));
  });
  this.$element.kinetic();
}

ExperienceView.prototype.masonify = function() {
  var that = this;
  this.$element.imagesLoaded(function() {
    that.responsify();
  });
}

ExperienceView.prototype.remasonify = function() {
  var that = this;
  this.$element.imagesLoaded(function(){
    that.responsify();
  })
};

ExperienceView.prototype.responsify = function() {
  var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 10,
  percentPosition: true
});

$grid.on( 'click', '.grid-item-content', function() {

  var itemContent = this;
  setItemContentPixelSize( itemContent );

  var itemElem = itemContent.parentNode;
  $( itemElem ).toggleClass('is-expanded');

  // force redraw
  var redraw = itemContent.offsetWidth;
  // renable default transition
  itemContent.style[ transitionProp ] = '';

  addTransitionListener( itemContent );
  setItemContentTransitionSize( itemContent, itemElem );

  $grid.masonry();
});

var docElem = document.documentElement;
var transitionProp = typeof docElem.style.transition == 'string' ?
    'transition' : 'WebkitTransition';
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProp ];

function setItemContentPixelSize( itemContent ) {
  var previousContentSize = getSize( itemContent );
  // disable transition
  itemContent.style[ transitionProp ] = 'none';
  // set current size in pixels
  itemContent.style.width = previousContentSize.width + 'px';
  itemContent.style.height = previousContentSize.height + 'px';
}

function addTransitionListener( itemContent ) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function() {
    itemContent.style.width = '';
    itemContent.style.height = '';
    itemContent.removeEventListener( transitionEndEvent, onTransitionEnd );
  };
  itemContent.addEventListener( transitionEndEvent, onTransitionEnd );
}

function setItemContentTransitionSize( itemContent, itemElem ) {
  // set new size
  var size = getSize( itemElem );
  itemContent.style.width = size.width + 'px';
  itemContent.style.height = size.height + 'px';
}

}





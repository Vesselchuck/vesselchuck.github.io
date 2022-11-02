window.onload = function(){
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  // element argument can be a selector string
  //   for an individual element
  var msnry = new Masonry( '.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  });
}
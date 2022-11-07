window.onload = function(){
  // Masonry Responsive
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer'
  });

  // Go Up Button
  const upBtn = document.querySelector("#upBtn")

  upBtn.addEventListener("click", function () {

    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      upBtn.style.display = "block";
    } else {
      upBtn.style.display = "none";
    }
  }
}
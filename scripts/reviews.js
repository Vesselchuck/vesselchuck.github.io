$(window).on("load",function(){
  // Masonry Responsive
  var $grid = $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    percentPosition: true
  });
  
  // trigger layout after all items are loaded
  $grid.masonry('layout');

  // Go Up Button
  const upBtn = document.querySelector("#upBtn")

  upBtn.addEventListener("click", function () {

    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
      upBtn.style.display = "block";
    } else {
      upBtn.style.display = "none";
    }
  }

  // Open Hamburger Menu
  $("#openHamBtn").click(function(){
      $("#openedHam").toggleClass("show");
      $("#openedHamTitle").toggleClass("pos-title");
  });

  // Write Review Button
  const reviewBtn = document.querySelector("#reviewBtn")

  reviewBtn.addEventListener("click", function () {

    $("#review-form").css({"display": "block"});
    $("#reviewBtn").css({"display": "none"});
    $("#reviewCloseBtnOut").css({"display": "block"});
    $("#upBtn").css({"visibility": "hidden"});
    $("body").css({"overflow": "hidden"});
  });

  // Close Review Form
  const reviewCloseBtn = document.querySelector("#reviewCloseBtn")

  reviewCloseBtn.addEventListener("click", function () {

    $("#review-form").css({"display": ""});
    $("#reviewBtn").css({"display": ""});
    $("#reviewCloseBtnOut").css({"display": ""});
    $("#upBtn").css({"visibility": ""});
    $("body").css({"overflow": ""});
  });

  const reviewCloseBtnOut = document.querySelector("#reviewCloseBtnOut")

  reviewCloseBtnOut.addEventListener("click", function () {

    $("#review-form").css({"display": ""});
    $("#reviewBtn").css({"display": ""});
    $("#reviewCloseBtnOut").css({"display": ""});
    $("#upBtn").css({"visibility": ""});
    $("body").css({"overflow": ""});
  });

  // document.getElementById("review-date").valueAsDate = new Date();
})
$(window).on("load",function(){
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
})
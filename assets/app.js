// Navbar
$(document).ready(function() {
  $(".sidenav").sidenav();
});

// Works Gallery
$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(600, 0.5);
    $("#portfolio div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("scale-anm");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("scale-anm");
      $("#portfolio").fadeTo(300, 1);
    }, 300);
  });
});

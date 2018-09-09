// Navbar
$(document).ready(function() {
  $(".sidenav").sidenav();
});

// Works Gallery
$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(400, 0.5);
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

// Scroll Animation

$(document).ready(function() {
  $("#homeLink").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;

    if ($(hash).offset()) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });
});
$(document).ready(function() {
  $("#aboutLink").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;

    if ($(hash).offset()) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });
});
$(document).ready(function() {
  $("#worksLink").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;

    if ($(hash).offset()) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });
});
$(document).ready(function() {
  $("#contactLink").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;

    if ($(hash).offset()) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });
});

// Paralax
(function($) {
  $(function() {
    $(".parallax").parallax();
  });
})(jQuery);

// Navbar
$(document).ready(function() {
  $(".sidenav").sidenav();
});

// Modal
$(document).ready(function() {
  $(".modal").modal();
});

// Works Gallery

$(document).ready(function() {
  $("a#filter-a").click(function() {
    //hide all works by default
    $(".work-one").addClass("filter-hide");
    //show slected works based on the menu clicked
    $(
      ".work-one[data-filter='" + $(this).attr("data-filter") + "']"
    ).removeClass("filter-hide");
    //remove selected class to the link
    $("a#filter-a").removeClass("selected");
    //add selected class to the active link
    $(this).addClass("selected");
    return false;
  });
  //show all works for "all" menu
  $('a[data-filter="*"]').click(function(event) {
    $(".work-one").removeClass("filter-hide");
    return false;
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

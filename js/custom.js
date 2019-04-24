(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').slideToggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

$(function () {
  $("#scrolltop").hide();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $("#scrolltop").fadeIn();
    } else {
      $("#scrolltop").fadeOut();
    }
  });
  $("#scrolltop").click(function () {
    // This prevents the default 'jump to' behaviour if JavaScript is enabled,
    // whilst keeping the functionality there for when JavaScript isn't enabled
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });
});

$("#product1").mouseenter(
  function () {
    $("#item1").addClass("product-brand-group");
  }
);
$("#product1").mouseleave(
  function () {
    $("#item1").removeClass("product-brand-group").delay(300);

  }
);

$("#product2").mouseenter(
  function () {
    $("#item2").addClass("product-brand-group");
  }
);
$("#product2").mouseleave(
  function () {
    $("#item2").removeClass("product-brand-group").delay(300);

  }
);

$("#product3").mouseenter(
  function () {
    $("#item3").addClass("product-brand-group");
  }
);
$("#product3").mouseleave(
  function () {
    $("#item3").removeClass("product-brand-group").delay(300);

  }
);

$("#product4").mouseenter(
  function () {
    $("#item4").addClass("product-brand-group");
  }
);
$("#product4").mouseleave(
  function () {
    $("#item4").removeClass("product-brand-group").delay(300);

  }
);

$("#product5").mouseenter(
  function () {
    $("#item5").addClass("product-brand-group");
  }
);
$("#product5").mouseleave(
  function () {
    $("#item5").removeClass("product-brand-group").delay(300);

  }
);

$("#product6").mouseenter(
  function () {
    $("#item6").addClass("product-brand-group");
  }
);
$("#product6").mouseleave(
  function () {
    $("#item6").removeClass("product-brand-group").delay(300);

  }
);

$("#product7").mouseenter(
  function () {
    $("#item7").addClass("product-brand-group");
  }
);
$("#product7").mouseleave(
  function () {
    $("#item7").removeClass("product-brand-group").delay(300);

  }
);

$("#product8").mouseenter(
  function () {
    $("#item8").addClass("product-brand-group");
  }
);
$("#product8").mouseleave(
  function () {
    $("#item8").removeClass("product-brand-group").delay(300);

  }
);

$("#product9").mouseenter(
  function () {
    $("#item9").addClass("product-brand-group");
  }
);
$("#product9").mouseleave(
  function () {
    $("#item9").removeClass("product-brand-group").delay(300);

  }
);

$("#product10").mouseenter(
  function () {
    $("#item10").addClass("product-brand-group");
  }
);
$("#product10").mouseleave(
  function () {
    $("#item10").removeClass("product-brand-group").delay(300);

  }
);

$("#product11").mouseenter(
  function () {
    $("#item11").addClass("product-brand-group");
  }
);
$("#product11").mouseleave(
  function () {
    $("#item11").removeClass("product-brand-group").delay(300);

  }
);

$("#product12").mouseenter(
  function () {
    $("#item12").addClass("product-brand-group");
  }
);
$("#product12").mouseleave(
  function () {
    $("#item12").removeClass("product-brand-group").delay(300);

  }
);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav-backdoor").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav-backdoor").style.width = "0";
}

var count = 1;
var countEl = document.getElementById("count");

function plus() {
  count++;
  countEl.value = count;
}

function minus() {
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}

var count2 = 1;
var countEl2 = document.getElementById("count2");

function plus2() {
  count2++;
  countEl2.value = count2;
}

function minus2() {
  if (count2 > 1) {
    count2--;
    countEl2.value = count2;
  }
}

$(document).ready(function () {
  $("#accordion section h1").click(function (e) {
    $(this).parents("section").siblings().addClass("ac_hidden");
    $(this).parents("section").removeClass("ac_hidden");

    e.preventDefault();
  });
})
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section1")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})
$('body').append('<div style="" id="loadingDiv"><div class="loader"></div></div>');
$(window).on('load', function () {
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $("#loadingDiv").remove(); //makes page more lightweight 
  });
}
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

jQuery(".sidebar").click(function () {
  jQuery("body").toggleClass("active-sidebar");
});

$(" li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

var targetDiv = $("body");
$(window).scroll(function () {
  var windowpos = $(window).scrollTop();

  if (windowpos >= 30) {
    targetDiv.addClass("scrolling-active");
  } else {
    targetDiv.removeClass("scrolling-active");
  }
});

// testimonial slidrer

$(".test_slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".slider-center").slick({
  centerMode: true,
  centerPadding: "260px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".blog-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
  $('.blog-slider').slick('setPosition');
});

$(".team-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  infinite: true,
  arrows: true,
  speed: 1000,

  responsive: [
    {
      breakpoint: 1499,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 675,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});
/*blog mobile slider*/
$(window).resize(function () {
  if ($(window).width() > 768) {
    $(".blog-mobile-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      infinite: true,
      arrows: true,
      speed: 1000,

      responsive: [
        {
          breakpoint: 1499,
          settings: {
            arrows: true,
            slidesToShow: 3,
          },
        },

        {
          breakpoint: 991,
          settings: {
            arrows: true,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 675,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});
/**/
$(function () {
  $('#myprofiledetail li:last-child button').tab('show')
})
/**/

/* Float Label Pattern Plugin for Bootstrap 3.1.0 by Travis Wilson
**************************************************/

(function ($) {
  $.fn.floatLabels = function (options) {

      // Settings
      var self = this;
      var settings = $.extend({}, options);


      // Event Handlers
      function registerEventHandlers() {
          self.on('input keyup change', 'input, textarea', function () {
              actions.swapLabels(this);
          });
      }


      // Actions
      var actions = {
          initialize: function() {
              self.each(function () {
                  var $this = $(this);
                  var $label = $this.children('label');
                  var $field = $this.find('input,textarea').first();

                  if ($this.children().first().is('label')) {
                      $this.children().first().remove();
                      $this.append($label);
                  }

                  var placeholderText = ($field.attr('placeholder') && $field.attr('placeholder') != $label.text()) ? $field.attr('placeholder') : $label.text();

                  $label.data('placeholder-text', placeholderText);
                  $label.data('original-text', $label.text());

                  if ($field.val() == '') {
                      $field.addClass('empty')
                  }
              });
          },
          swapLabels: function (field) {
              var $field = $(field);
              var $label = $(field).siblings('label').first();
              var isEmpty = Boolean($field.val());

              if (isEmpty) {
                  $field.removeClass('empty');
                  $label.text($label.data('original-text'));
              }
              else {
                  $field.addClass('empty');
                  $label.text($label.data('placeholder-text'));
              }
          }
      }


      // Initialization
      function init() {
          registerEventHandlers();

          actions.initialize();
          self.each(function () {
              actions.swapLabels($(this).find('input,textarea').first());
          });
      }
      init();


      return this;
  };

  $(function () {
      $('.float-label-control').floatLabels();
  });
})(jQuery);


/**/

function togglePlay() {
  const video = document.getElementById("myVideo");
  if (video.paused) {
      video.play();
  } else {
      video.pause();
  }
}

/**/
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  speed: 300,
  asNavFor: '.slider-nav',
  draggable: true,
  swipe: true,
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  centerMode: false,  // Center the active slide
  centerPadding: '30px',
  draggable: false,
  swipe: true,
  arrows: true,  // Disable navigation arrows
  infinite: true,
});
/**/
// input tel

// var input = document.querySelector("#phone");
// window.intlTelInput(input, {
//   utilsScript: "build/js/utils.js"
// });
// <input id="phone" name="phone" class="form-control" type="tel" />

$(window).on("load resize", function () {
  var o = $(".header_sec");
  $("this").css("padding-top", o.outerHeight());
});

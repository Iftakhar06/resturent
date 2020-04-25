(function ($) {
"use strict";

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  centerPadding: '0',
  responsive: [
      {
    breakpoint: 1200,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 992,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1
    }
  }
]
});


$('.slider-active').slick({
  dots: false,
  arrows: true,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  infinite: true,
  centerMode: false,
  autoplay: true,
  vertical: false,
  verticalSwiping: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1170,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

      
// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   vertical: false,
//   arrows: true,
//   prevArrow: '<button class="slick-prev"  type="button"><i class="far fa-chevron-right"></i></button>',
//   nextArrow: '<button class="slick-next" type="button"><i class="far fa-chevron-left"></i></button>',
//   autoplay: true,
//   dots: false,
//   centerMode: true,
//   centerPadding: '0',
//   responsive: [
//       {
//     breakpoint: 1200,
//     settings: {
//       arrows: true,
//       centerMode: true,
//       centerPadding: '0px',
//       slidesToShow: 3
//     }
//   },
//   {
//     breakpoint: 992,
//     settings: {
//       arrows: true,
//       centerMode: true,
//       centerPadding: '0px',
//       slidesToShow: 3
//     }
//   },
//   {
//     breakpoint: 768,
//     settings: {
//       arrows: true,
//       centerMode: true,
//       centerPadding: '0px',
//       slidesToShow: 1
//     }
//   }
// ]
// });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
  gallery: {
    // options for gallery
    enabled: true
  },
});

// WoW-Animation-JS 
       new WOW().init({
        mobile: true,
    });

// meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

// one-page-nav active code
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});

// TOP Menu Sticky code
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > -0){  
                $('#sticky-header').addClass("sticky");
            }
            else{
                $('#sticky-header').removeClass("sticky");
            }
        });

})(jQuery);



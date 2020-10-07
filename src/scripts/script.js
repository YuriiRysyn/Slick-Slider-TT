'use strict';

$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 480,
          settings: {
            rows: 1,
            slidesPerRow : 1,
            centerMode: true,
            arrows: false,
            slidesToScroll: 3,
          }
      }
    ],
  });
});

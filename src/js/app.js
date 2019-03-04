import 'owl.carousel';
import scrollUp from './scrollUp';
import smoothScroll from './smoothScroll';

scrollUp();
smoothScroll();

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      600: {
        items: 3
      }
    }
  });
});

var swiper1 = new Swiper('.swiper1', {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 'auto',
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
});

var swiper2 = new Swiper('.swiper2', {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 'auto',
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: '.swiper-pagination2',
  paginationClickable: true,
  navigation: {
    nextEl: '.swiper-button-next ',
    prevEl: '.swiper-button-prev ',
  },
});

document.getElementById('slider-btn-next').addEventListener('click', nextSlide);
document.getElementById('slider-btn-prev').addEventListener('click', prevSlide);

function nextSlide(e) {
  e.preventDefault();
  swiper2.slidePrev();
}

function prevSlide(e) {
  e.preventDefault();
  swiper2.slideNext();
}

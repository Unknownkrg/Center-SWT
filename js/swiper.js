var swiper = new Swiper(".mySwiper1", {
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        578: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        770: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1260: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

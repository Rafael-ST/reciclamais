import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs'

const swiperModule = () => {
  const divSwiper = document.querySelector('.mySwiper')
  const divSwiper2 = document.querySelector('.mySwiper2')
  // if (divSwiper) {
  // }
  new Swiper('.mySwiper2', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 15,
    clickable: true,
    // breakpoints: {
    //   240: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   540: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   991: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //   },
    //   1366: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //   },
    // },
  })

  new Swiper('.mySwiper', {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 3,
    spaceBetween: 15,
    clickable: true,
  })
}

export { swiperModule }

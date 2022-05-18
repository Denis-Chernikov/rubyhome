'use strict'

/* === SWIPER SLIDER === */

new Swiper('.reviews-swiper', {
    slidesPerView: 2,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    spaceBetween: 30,

    breakpoints: {

        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },

        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
        },

        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});




/* === MENU BURGER === */

const burgerMenu = document.querySelector('.menu-burger')

const overflowBody = document.body

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('isActive')
    overflowBody.classList.toggle('isActive')
});

/* === HEADER SCROLL === */

const header = document.querySelector('.header')

window.addEventListener('scroll', headerScroll);
document.addEventListener('DOMContentLoaded', headerScroll)

function headerScroll() {

    if (scrollY > 50 && innerWidth > 768) {
        header.classList.add('activeScroll')
    } else {
        header.classList.remove('activeScroll')
    }
}



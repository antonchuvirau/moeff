'use strict';

const heroCarouselElement = document.querySelector(`.hero__carousel-box`);

document.addEventListener(`DOMContentLoaded`, () => {
    if (heroCarouselElement) {
        new Swiper(heroCarouselElement, {
            pagination: {
                el: heroCarouselElement.nextElementSibling,
                clickable: true
            }
        });
    }
});
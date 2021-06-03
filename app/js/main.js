'use strict';

const heroCarouselElement = document.querySelector(`.hero__carousel-box`);
const productGalleryElement = document.querySelector(`.product-details__gallery-box`);
const productThumbsElement = document.querySelector(`.product-details__thumbs-box`);

document.addEventListener(`DOMContentLoaded`, () => {
    if (heroCarouselElement) {
        new Swiper(heroCarouselElement, {
            autoplay: {
                delay: 3500
            },
            pagination: {
                el: heroCarouselElement.nextElementSibling,
                clickable: true
            }
        });
    }
    if (productGalleryElement) {
        new Swiper(productGalleryElement, {
            pagination: {
                el: productGalleryElement.nextElementSibling,
                clickable: true
            },
            thumbs: {
                swiper: {
                    el: productThumbsElement,
                    slidesPerView: `auto`,
                    spaceBetween: 10
                }
            }
        });
    }
});
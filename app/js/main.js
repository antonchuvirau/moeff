'use strict';

const heroCarouselElement = document.querySelector(`.hero__carousel-box`);
const productGalleryElement = document.querySelector(`.product-details__gallery-box`);
const productThumbsElement = document.querySelector(`.product-details__thumbs-box`);
const openMenuButton = document.querySelector(`.header__button-menu-input`);
const offcanvasMenuElement = document.querySelector(`.offcanvas-menu`);
const documentElement = document.documentElement;

function onOpenMenuButtonClickHandler() {
    if (openMenuButton.checked) {
        offcanvasMenuElement.classList.add(`offcanvas-menu_opened`);
        documentElement.classList.add(`is-locked`);
    }
    else {
        offcanvasMenuElement.classList.remove(`offcanvas-menu_opened`);
        documentElement.classList.remove(`is-locked`); 
    }
}

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
    if (openMenuButton) {
        openMenuButton.addEventListener(`click`, onOpenMenuButtonClickHandler);
    }
});
'use strict';

const heroCarouselElement = document.querySelector(`.hero__carousel-box`);
const productGalleryElement = document.querySelector(`.product-details__gallery-box`);
const productThumbsElement = document.querySelector(`.product-details__thumbs-box`);
const openMenuButton = document.querySelector(`.header__button-menu-input`);
const offcanvasMenuElement = document.querySelector(`.offcanvas-menu`);
const openSearchBoxButton = document.querySelector(`.header__button-search`);
const closeSearchBoxButton = document.querySelector(`.search-box__button-close`);
const searchBoxElement = document.querySelector(`.search-box`);
const mobileSidebarOpenButton = document.querySelector(`.template__title-button-input`);
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

function onOpenSearchBoxButtonClickHandler() {
    searchBoxElement.classList.add(`search-box_opened`);
}

function onCloseSearchBoxButtonClickHandler() {
    searchBoxElement.classList.remove(`search-box_opened`);
}

function onMobileSidebarOpenButtonChangeHandler() {
    if (mobileSidebarOpenButton.checked) {
        mobileSidebarOpenButton.closest(`.mobile-sidebar`).querySelector(`.mobile-sidebar__grid`).classList.add(`mobile-sidebar__grid_active`);
    }
    else {
        mobileSidebarOpenButton.closest(`.mobile-sidebar`).querySelector(`.mobile-sidebar__grid`).classList.remove(`mobile-sidebar__grid_active`);
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
    if (openSearchBoxButton) {
        openSearchBoxButton.addEventListener(`click`, onOpenSearchBoxButtonClickHandler);
    }
    if (closeSearchBoxButton) {
        closeSearchBoxButton.addEventListener(`click`, onCloseSearchBoxButtonClickHandler);
    }
    if (mobileSidebarOpenButton) {
        mobileSidebarOpenButton.addEventListener(`change`, onMobileSidebarOpenButtonChangeHandler);
    }
});
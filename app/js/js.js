
let btnOpen = document.querySelector('.header__nav-btn');
let btnClose = document.querySelector('.header__nav-menu-btn');
let menuSite = document.querySelector('.header__nav-menu');
let body = document.querySelector('.body');

btnOpen.addEventListener('click', menuOpen);
btnClose.addEventListener('click', menuOpen);


function menuOpen () {
    menuSite.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
}

let btnOpenModal = document.querySelector('.legal__btn');
let btnCloseModal = document.querySelector('.modal__btn')
let modal = document.querySelector('.legal__modal');

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', openModal);

function openModal () {
    modal.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
}

let btnOpen = document.querySelector('.header__nav-btn');
let btnClose = document.querySelector('.header__nav-menu-btn');
let menuSite = document.querySelector('.header__nav-menu');
let body = document.querySelector('.body');

btnOpen.addEventListener('click', menuOpen);
btnClose.addEventListener('click', menuOpen);


function menuOpen () {
    menuSite.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
};
//modal
(() => {
    let btnOpenModal = document.querySelector('.services-entry__main-btn');
    let btnCloseModal = document.querySelector('.modal__btn')
    let modal = document.querySelector('.modal__wrap');
    if(!modal) return;
    btnOpenModal.addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', openModal);

    function openModal () {
            modal.classList.toggle('is-hidden');
            body.classList.toggle('no-scroll');
}
})();

//sliders


$(document).ready(function(){
    $('.team__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        appendDots: $('.team__nav')
    })
});
$(document).ready(function(){
    $('.about-slider__main').slick({
        arrows: false,
        infinite: false,
        dots: true,
        appendDots: $('.about-slider__nav'),
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                } 
            }
        ]
    })
});


///tabs
(() => {
    let tabsBtn = document.querySelectorAll('.consistent__nav-btn');
    if (!tabsBtn) return;
    let tabsContent = document.querySelectorAll('.consistent__arcticles-card');
    
        tabsBtn.forEach((e) => {
            e.addEventListener('click', tabsDoit);
        })
    
    function tabsDoit (event) {
        for (let i = 0; i < tabsBtn.length; i++) {
            tabsBtn[i].classList.remove('consistent__nav-btn--active');
        }
        event.target.classList.add('consistent__nav-btn--active');
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('is-hidden');
        }
        tabsContent[Number(event.target.getAttribute('index'))].classList.remove('is-hidden');
    }
})();

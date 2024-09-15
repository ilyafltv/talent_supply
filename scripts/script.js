// Burger-menu
let menu = document.querySelector('.menu-mobile');
let btnBurger = document.querySelector('.btn-burger');
let body = document.querySelector('body');


btnBurger.addEventListener('click', event => {
    event.preventDefault();
    body.classList.toggle('fixed');
    btnBurger.classList.toggle('btn-burger__active');
    menu.classList.toggle('menu-mobile__active');
})

//Slider
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-block__pagination__dot');
    let currentIndex = 0;

    function updateSlider(index) {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function isMobile() {
        return window.innerWidth <= 768;
    }

    if (!isMobile()) {
        document.querySelector('.slider__arrow-left').addEventListener('click', function () {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateSlider(currentIndex);
        });

        document.querySelector('.slider__arrow-right').addEventListener('click', function () {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlider(currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider(currentIndex);
            });
        });

        // Swipe functionality
        let startX;
        let endX;

        document.querySelector('.container').addEventListener('touchstart', function (e) {
            startX = e.changedTouches[0].clientX;
        });

        document.querySelector('.container').addEventListener('touchend', function (e) {
            endX = e.changedTouches[0].clientX;
            if (startX > endX + 50) {
                currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            } else if (startX < endX - 50) {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            }
            updateSlider(currentIndex);
        });
    }
});


// arrow Up from footer
document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector('.footer-item__arrow');

    arrow.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});
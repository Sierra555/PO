
const slider = tns({
    container: '.js-examples__slider',
    items: 3,
    slideBy: 1,
    controlsContainer: '.js-examples__slider-controls',
    mouseDrag: true,
    loop: true,
    responsive: {
        1266: {
            items: 3
        },
        
        780: {
            items: 2
        },
        320: {
            items: 1,
        }
    }
});

const buttons = document.querySelectorAll('.tns-nav button');
buttons.forEach(btn => {
    btn.classList.add('tns-nav__btn');

});

const arrowSvg = document.querySelectorAll('.js-control__svg'),
    controls = document.querySelectorAll('.js-control__btn'),
    path = document.querySelectorAll('.js-control__svg path');


document.addEventListener('click', (e) => {
    controls.forEach(item => item.classList.remove("is--active"));
    arrowSvg.forEach(item => item.classList.remove("is--active"));
    path.forEach(item => item.classList.remove("is--active"));
    if (e.target.closest('.js-control__btn')) {
        e.target.classList.add("is--active");
    }
});
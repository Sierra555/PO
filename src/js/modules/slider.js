
const slider = tns({
    container: '.examples__slider',
    items: 3,
    slideBy: 1,
    controlsContainer: ".customize-controls",
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

const arrowSvg = document.querySelectorAll('.control__svg'),
    controls = document.querySelectorAll('.control__btn'),
    path = document.querySelectorAll('.control__svg path');


document.addEventListener('click', (e) => {
    controls.forEach(item => item.classList.remove("control_active"));
    arrowSvg.forEach(item => item.classList.remove("control_active"));
    path.forEach(item => item.classList.remove("control_active"));
    if (e.target.closest('.control__btn')) {
        e.target.classList.add("control_active");
    }
});
const slider = tns({
    container: '.js-examples-slider',
    items: 3,
    slideBy: 1,
    controlsContainer: '.js-examples-slider-controls',
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


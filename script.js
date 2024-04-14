document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -150,
        shift: 5,
        padding: 0,
        numVisible: 5,
        indicators: true,
        noWrap: false
    });
});

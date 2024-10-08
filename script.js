document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#presentation')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: false
    })

    myCarousel.addEventListener('slide.bs.carousel', function (e) {
        let activeItem = e.relatedTarget;
        let items = activeItem.querySelectorAll('.animate__animated');
        items.forEach(item => {
            item.classList.remove('animate__animated');
            item.offsetWidth;
            item.classList.add('animate__animated');
        });
    })
});

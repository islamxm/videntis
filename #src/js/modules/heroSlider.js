import Swiper, {Pagination, Navigation, Autoplay} from 'swiper';

const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            modules: [Navigation, Pagination, Autoplay],
            navigation: {
                prevEl: '.hero__slider_nav-prev',
                nextEl: '.hero__slider_nav-next',
            },
            speed: 700,
            pagination: {
                el: '.hero__slider_pag',
                bulletClass: 'hero__slider_pag_item',
                clickable: true,
                bulletActiveClass: 'active'
            },
            autoplay: {
                delay: 3000
            },
            loop: true
        })
    }
}

export default heroSlider;
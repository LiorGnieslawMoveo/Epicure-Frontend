import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper/modules";

const SwipperConfig = (spaceBetween: number) => ({
    className: 'swiper',
    modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade],
    initialSlide: 0,
    spaceBetween: spaceBetween,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        375: {
            autoplay: false,
            spaceBetween: spaceBetween - 4,
            slidesPerView: 1.4,
            touchRatio: 1
        },
        425: {
            autoplay: false,
            spaceBetween: spaceBetween - 6,
            slidesPerView: 1.5,
            touchRatio: 1
        },
        768: {
            autoplay: false,
            spaceBetween: spaceBetween - 8,
            slidesPerView: 2.5,
            touchRatio: 1
        },
        1025: {
            autoplay: false,
            spaceBetween: spaceBetween - 8,
            slidesPerView: 3,
            touchRatio: 1
        },
    },
    watchOverflow: true
});

export default SwipperConfig;
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper/modules";

const SwipperConfig = (spaceBetween: number) => ({
    className: 'swiper',
    modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade],
    initialSlide: 0,
    spaceBetween: spaceBetween,
    slidesPerView: 1.4,
    navigation: true,
    scrollbar: { draggable: true },
    pagination: true,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        900: {
            autoplay: false,
            spaceBetween: spaceBetween - 8,
            slidesPerView: 1.4,
            touchRatio: 0
        },
    },
    watchOverflow: true
});

export default SwipperConfig;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import './CardSwipper.scss'
import Card from '../Card/Card';
import { cardProps } from '../../models/types';

const CardSwipper: React.FC<{ title: string, cards: cardProps[] }> = ({ title, cards }) => {
    return (
        <>
            <div className="swiper-container">
                <h1 className='swipper-title'>{title}</h1>
                <Swiper
                    className='swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    initialSlide={0}
                    spaceBetween={24}
                    slidesPerView={1.4}
                    // navigation
                    pagination
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        900: {
                            autoplay: false,
                            spaceBetween: 24,
                            slidesPerView: 1.4,
                            touchRatio: 0
                        },
                    }}
                    watchOverflow={true}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <Card {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CardSwipper;

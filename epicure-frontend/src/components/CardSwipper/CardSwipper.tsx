import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SwipperConfig from '../../config/SwipperConfig';

import './CardSwipper.scss'
import Card from '../Card/Card';
import { cardProps } from '../../models/types';
import AllRestaurants from './../../assets/images/all-restaurants.svg'

const CardSwipper: React.FC<{ title?: string, cards: cardProps[] }> = ({ title, cards }) => {
    return (
        <>
            <div className="swiper-container">
                <h1 className='swipper-title'>{title}</h1>
                <Swiper {...SwipperConfig(24)}>
                    {/* {
                        cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <Card {...card} />
                            </SwiperSlide>
                        ))
                    } */}
                    <div className='cards-swipper'>
                        {cards.map((card, index) => (
                            <SwiperSlide className='swiper-slide' key={index}>
                                <Card {...card} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <div className='all-restaurants'>
                    <span className='all-restaurants-title'>All Restaurants</span>
                    <img src={AllRestaurants} alt='All Restaurants' className='all-resaurants-icon' />
                </div>
            </div >
        </>
    );
};

export default CardSwipper;

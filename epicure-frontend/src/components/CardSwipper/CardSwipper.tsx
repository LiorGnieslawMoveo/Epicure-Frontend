import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SwipperConfig from '../../config/SwipperConfig';

import './CardSwipper.scss'
import Card from '../Card/Card';
import { cardProps } from '../../models/types';
import AllRestaurants from './../../assets/images/all-restaurants.svg'
import { Slide } from "react-awesome-reveal";


const CardSwipper: React.FC<{ title?: string, cards: cardProps[] }> = ({ title, cards }) => {
    return (
        <div className="dish-container">
            <Slide>
                <h3 className='title'>{title}</h3>
                <div className='card-dish-container'>
                    <Swiper {...SwipperConfig(24)}>
                        <div className='cards-swipper'>
                            {cards.map((card, index) => (
                                <SwiperSlide className='swiper-slide' key={index}>
                                    <Card {...card} className={card.className ? `restaurant-card` : 'dish-card'} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
                <div className={cards[0].className ? 'all-restaurants' : 'no-restaurants'} >
                    <span className='all-restaurants-title'>All Restaurants</span>
                    <img src={AllRestaurants} alt='All Restaurants' className='all-resaurants-icon' />
                </div>
            </Slide>
        </div >
    );
};

export default CardSwipper;

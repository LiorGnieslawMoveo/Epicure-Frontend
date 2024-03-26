import './Chef.scss';
import ChefData from '../../constants/ChefData';
import Card from '../Card/Card';
import AllRestaurants from '../../assets/images/all-restaurants.svg'
import SwipperConfig from '../../config/SwipperConfig';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "react-awesome-reveal";

const Chef = () => {
    let [chefFirstName] = ChefData.name.split(' ');
    chefFirstName = chefFirstName.toUpperCase();
    return (
        <div className='chef-container'>
            <Slide triggerOnce>
                <h3 className='title'>CHEF OF THE WEEK:</h3>
                <div className='image-description-container'>
                    <div className='image-container'>
                        <h3 className='chef-name'>{ChefData.name}</h3>
                    </div>
                    <p className='chef-description'>{ChefData.description}</p>
                </div>
                <div className='chef-restaurants-container'>
                    <h4 className='restaurants-list-title'>{chefFirstName}'S RESTAURANTS</h4>
                    <Swiper {...SwipperConfig(24)}>
                        <div className='chefs-restaurants'>
                            {ChefData.restaurants.map((restaurant, index) => (
                                <SwiperSlide className='swiper-slide' key={index}>
                                    <Card className='restaurant-card' title={restaurant.title} image={restaurant.image}></Card>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <div className='all-restaurants'>
                        <span className='all-restaurants-title'>All Restaurants</span>
                        <img src={AllRestaurants} alt='All Restaurants' className='all-resaurants-icon' />
                    </div>

                </div>
            </Slide>
        </div>
    )
}

export default Chef;
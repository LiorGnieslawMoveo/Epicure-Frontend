import Claro from './../assets/images/claro.svg';
import Onza from './../assets/images/onza.svg';
import KabKem from './../assets/images/kab-kem.svg';
import NithanThai from './../assets/images/nithan-thai.svg';
import TigerLilly from './../assets/images/tiger-lily.svg';
import Yapan from './../assets/images/yapan.svg';
import Messa from './../assets/images/messa.svg';

import OneStar from './../assets/images/1star.svg';
import TwoStars from './../assets/images/2stars.svg';
import ThreeStars from './../assets/images/3stars.svg';
import FourStars from './../assets/images/4stars.svg';
import FiveStars from './../assets/images/5stars.svg';

import Spicy from './../assets/images/spicy-icon.svg';
import PadKiMao from './../assets/images/padkimao.svg';
import { cardProps } from '../models/types';

const RestaurantsData: { title: string, cards: cardProps[] } = {
    title: "POPULAR RESTAURANT IN EPICURE:",
    cards: [
        {
            title: "Claro",
            image: Claro,
            subtitle: 'Ran Shmueli',
            rating: FourStars,
            className: "restaurant-card"
        }, {
            title: "Onza",
            image: Onza,
            subtitle: 'Guy Rozmarin',
            rating: ThreeStars,
            className: "restaurant-card"
        }, {
            title: "Kab Kem",
            image: KabKem,
            subtitle: "Yariv Malili",
            rating: TwoStars,
            className: "restaurant-card"
        }, {
            title: "Nitan Thai",
            image: NithanThai,
            subtitle: "Shahaf Shabtay",
            rating: OneStar,
            className: "restaurant-card"
        }, {
            title: "Tiger Lilly",
            image: TigerLilly,
            subtitle: "Yanir Green",
            rating: FourStars,
            className: "restaurant-card"
        }, {
            title: "Ya Pan",
            image: Yapan,
            subtitle: "Yuval Ben Moshe",
            rating: TwoStars,
            className: "restaurant-card"
        }, {
            title: "Messa",
            image: Messa,
            subtitle: "Aviv Moshe",
            rating: OneStar,
            className: "restaurant-card"
        }
    ]
};

export default RestaurantsData;
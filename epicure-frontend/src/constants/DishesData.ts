import PadKiMao from './../assets/images/padkimao.svg'
import TaMaLaKo from './../assets/images/ta-ma-la-ko.svg'
import RedFarm from './../assets/images/red-farm.svg'
import Hamburger from './../assets/images/hamburger-dish.svg'
import Pizza from './../assets/images/Lumina.svg'
import Spicy from './../assets/images/spicy-icon.svg'
import Vegan from './../assets/images/vegan-icon.svg'
import Vegi from './../assets/images/vegi-icon.svg'
import { cardTypeProps } from '../models/types';



const DishesData: cardTypeProps = {
    title: "SIGNATURE DISH OF:",
    cards: [
        {
            title: "Pad Ki Mao",
            image: PadKiMao,
            description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
            iconMeaning: Spicy,
            price: 88,
        },
        {
            title: "Ta Ma La Ko",
            image: TaMaLaKo,
            description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
            iconMeaning: Vegi,
            price: 98,
        },
        {
            title: "Red Farm",
            image: RedFarm,
            description: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
            iconMeaning: Vegan,
            price: 98,
        },
        {
            title: "Hamburger",
            image: Hamburger,
            description: "Buns, Meat, Fries",
            iconMeaning: Spicy,
            price: 78,
        },
        {
            title: "Pizza",
            image: Pizza,
            description: "Cheese, Wheat, Tomato Sauce",
            iconMeaning: Spicy,
            price: 78,
        }
    ],
};

export default DishesData;
import { cardProps, Chef } from "../models/types";
import ChefImage from '../assets/images/yossi-shitrit.svg';
import Onza from '../assets/images/onza.svg';
import KitchenMarket from '../assets/images/kitchen-market.svg';
import Mashya from '../assets/images/mashya.svg';

const ChefData: Chef = {
    name: 'Yossi Shitrit',
    image: ChefImage,
    description: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit\'s creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.',
    restaurants: [
        {
            title: "Onza",
            image: Onza,
        },
        {
            title: "Kitchen Market",
            image: KitchenMarket,
        },
        {
            title: "Mashya",
            image: Mashya,
        }
    ]
};

export default ChefData;

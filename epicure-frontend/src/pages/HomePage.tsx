import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CardSwipper from '../components/CardSwipper/CardSwipper';
import IconsMeaning from '../components/IconsMeaning/IconsMeaning';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';
import DishesData from '../constants/DishesData';
import RestaurantsData from '../constants/RestaurantsData';
import Chef from '../components/Chef/Chef';

const HomePage = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <CardSwipper title={RestaurantsData.title} cards={RestaurantsData.cards} />
            <CardSwipper title={DishesData.title} cards={DishesData.cards} />
            <IconsMeaning />
            <Chef />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CardSwipper from './components/CardSwipper/CardSwipper';
import IconsMeaning from './components/IconsMeaning/IconsMeaning';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import DishesData from './constants/DishesData';
import RestaurantsData from './constants/RestaurantsData';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <CardSwipper title={DishesData.title} cards={DishesData.cards} />
        <IconsMeaning />
        <AboutUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

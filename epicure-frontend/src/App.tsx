import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import IconsMeaning from './components/IconsMeaning/IconsMeaning';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <IconsMeaning />
        <AboutUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

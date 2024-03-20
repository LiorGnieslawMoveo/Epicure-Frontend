import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IconsMeaning from './components/IconsMeaning/IconsMeaning';

function App() {
  return (
    <div className="App">
      <Header />
      <IconsMeaning />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

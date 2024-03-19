import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

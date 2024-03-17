import './Header.scss'; 
import epicureLogo from '../assests/images/epicure-logo.svg';
import hamburger from '../assests/images/hamburger.svg';
import bagIcon from '../assests/images/bag-icon.svg';
import magnifyingGlass from '../assests/images/magnifying-glass.svg';
import userIcon from '../assests/images/user-icon.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="hamburger">
            <img src={hamburger} alt="Epicure Logo" />
          </div>
          <div className="left-container">
              <div className="logo">
                  <img src={epicureLogo} alt="Epicure Logo" />
                  <div className="title">EPICURE</div>
              </div>
              <div className="navbar-titles">
                  <ul>
                      <li>Restaurants</li>
                      <li>Chefs</li>
                  </ul>
              </div>
          </div>
          <nav className="navbar-icons">
            <ul>
              <li><img src={magnifyingGlass} alt="Magnifying Glass"/></li>
              <li><img src={userIcon} alt="User Icon"/></li>
              <li><img src={bagIcon} alt="Bag Icon"/></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
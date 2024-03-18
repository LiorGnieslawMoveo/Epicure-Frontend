import './Header.scss'; 
import epicureLogo from '../../assests/images/epicure-logo.svg';
import epicureTitle from '../../assests/images/epicure-title.svg';
import hamburger from '../../assests/images/hamburger.svg';
import bagIcon from '../../assests/images/bag-icon.svg';
import magnifyingGlass from '../../assests/images/magnifying-glass.svg';
import userIcon from '../../assests/images/user-icon.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className='header-container'>
          <div className='left-container'>
            <div className='hamburger-container'>
              <img className="hamburger-menu" src={hamburger} alt="Epicure Logo" />
            </div>

            <div className="logo-container">
                <img className="epicure-logo" src={epicureLogo} alt="epicure"></img>
                <img className="epicure-title" src={epicureTitle} alt="logo"></img>
            </div>

            <div className="navbar-titles">
              <div>Restaurants</div>
              <div>Chefs</div>
            </div>
          </div>
          <nav className="navbar-icons">
              <img src={magnifyingGlass} alt="Magnifying Glass"/>
              <img src={userIcon} alt="User Icon"/>
              <img src={bagIcon} alt="Bag Icon"/>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
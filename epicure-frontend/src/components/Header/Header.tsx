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
        <img className="hamburger-menu" src={hamburger} alt="Epicure Logo" />

        <div className="container">
            <img className="epicure-logo" src={epicureLogo} alt="epicure"></img>
            <img className="epicure-title" src={epicureTitle} alt="logo"></img>
        </div>

        <div className="navbar-titles">
          <p>Restaurants</p>
          <p>Chefs</p>
        </div>
        
        <nav className="navbar-icons">
            <img src={magnifyingGlass} alt="Magnifying Glass"/>
            <img src={userIcon} alt="User Icon"/>
            <img src={bagIcon} alt="Bag Icon"/>
        </nav>
      </header>
    </>
  );
};

export default Header;
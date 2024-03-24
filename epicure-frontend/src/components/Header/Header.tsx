import './Header.scss';
import epicureLogo from '../../assets/images/epicure-logo.svg';
import epicureTitle from '../../assets/images/epicure-title.svg';
import hamburger from '../../assets/images/hamburger.svg';
import bagIcon from '../../assets/images/bag-icon.svg';
import magnifyingGlass from '../../assets/images/magnifying-glass.svg';
import userIcon from '../../assets/images/user-icon.svg';
import { Rotate } from "react-awesome-reveal";



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
              <Rotate>
                <img className="epicure-logo" src={epicureLogo} alt="epicure"></img>

              </Rotate>
              <img className="epicure-title" src={epicureTitle} alt="logo"></img>
            </div>
            <div className="navbar-titles">
              <div>Restaurants</div>
              <div>Chefs</div>
            </div>
          </div>



          <nav className="navbar-icons">
            <img src={magnifyingGlass} alt="Magnifying Glass" />
            <img src={userIcon} alt="User Icon" />
            <img src={bagIcon} alt="Bag Icon" />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
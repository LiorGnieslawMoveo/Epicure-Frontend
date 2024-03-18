import "./AboutUs.scss";
import epicureLogo from "../../assets/images/epicure-logo2.svg";
import googleIcon from "../../assets/images/googleplay-icon.svg"
import appleIcon from "../../assets/images/appstore-icon.svg";
import { firstText, secondText } from "../../constants/AboutUsInfo";
const AboutUs = () => {
  return (
    <>
      <div className='about-us-container'>
        <div className="logo-icons-container">
          <div className="logo-container">
            <img className='epicure-logo' src={epicureLogo} alt='Epicure Logo' />
          </div>
          <div className="icons-container">
            <img className='googleplay-logo' src={googleIcon} alt='Google Play Logo' />
            <img className='appstore-logo' src={appleIcon} alt='App Store Logo' />
          </div>
          <div className='descriptions-container'>
            <h3 className='about-us-title'>ABOUT US:</h3>
            <div className='about-us-description part-one'>{firstText}</div>
            <div className='about-us-description part-two'>{secondText}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;


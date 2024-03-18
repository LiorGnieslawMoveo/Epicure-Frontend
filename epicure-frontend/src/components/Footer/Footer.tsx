import "./Footer.scss";
import { Link } from 'react-router-dom';


const Footer = () => {
  const footerLinks = [
    { text: "Contact Us", path: "/" },
    { text: "Term of Use", path: "/" },
    { text: "Privacy Policy", path: "/" }
  ];

  return (
    <>
      <footer className='footer'>
        <div className='footer-links'>
          {footerLinks.map((link, index) => (
                  <Link className="link" key={index} to={link.path}>{link.text}</Link>
              ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
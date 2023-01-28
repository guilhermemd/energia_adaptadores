import "./Footer.css";

import logo from "../../img/logo_short.svg";
import email from "../../img/social/envelope-regular.svg";

// import facebook from "../../img/social/facebook.svg";
// import instagram from "../../img/social/instagram.svg";
// import spotify from "../../img/social/spotify.svg";
// import youtube from "../../img/social/youtube.svg";

import whatsapp from "../../img/social/whatsapp.svg";
const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer__wrapper">
        <img src={logo} alt="logo-band" className="logo" />
        <div className="footer__contact">
          <p>Contato:</p>
          <div className="footer__contact__wrapper">
            <a
              href="https://api.whatsapp.com/send?phone=5551996598668&text=Texto%20aqui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" className="whatsapp" />
            </a>
            <p>(51)99659-8668</p>
          </div>
        </div>
        <div className="footer__contact__email">
          <p>Email:</p>
          <div className="contact__email__wrapper">
            <img src={email} alt="email" />
            <p>eduardocanoas@gmail.com</p>
          </div>
        </div>
        {/* <div className="footer__social">
          <p>Redes Sociais:</p>
          <div className="footer__social__wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bandaclassicriders/"
            >
              <img src={instagram} alt="instagram" className="instagram" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/CLASSICRIDERS/"
            >
              <img src={facebook} alt="facebook" className="facebook" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@classicriders7066/videos"
            >
              <img src={youtube} alt="youtube" className="youtube" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/4H0xqk7xLM2z3k4HFKmzH1"
            >
              <img src={spotify} alt="spotify" className="spotify" />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

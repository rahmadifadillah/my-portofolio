import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import picture from "../../assets/img/profileImage.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src={picture} alt="Rahmadi Fadillah" />
            <h1>Let's work together!</h1>
          </div>
          <div className="footer__button">
            <Link to="/me">Get in touch</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:rahmadifadillah83@gmail.com">Email me!</a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6287883435441/?text=Hello%20Rahmadi"
            >
              WhatsApp me!
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/rahmadi.fadillah"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://youtube.com/@dealsmusik"
            >
              YouTube
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/rahmadifadillah"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/rahmadi-fadillah-a73222222/"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://dealsmusik.bandcamp.com"
            >
              Bandcamp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

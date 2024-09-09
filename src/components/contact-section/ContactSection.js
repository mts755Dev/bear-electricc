import React from 'react';
import './ContactSection.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaLocationArrow, FaInstagramSquare } from 'react-icons/fa';

function ContactSection({ isHomePage }) {
  return (
    <section className={isHomePage ? "contact-section" : "contact-section-standalone"}>
      <div className="contact-section-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info-container">
          <div className="contact-text-cont">
            <p>We are based in Great State of Florida and are delighted to offer our services across Greater Tampa Bay & Central Florida. Please feel free to get in touch with any concerns that you have regarding electrical work. We'd love to be able to help, no matter the size or complexity of the job.</p>
          </div>
          <div className="contact-details-cont">
            <div className="contact-details">
              <div className="email cont">
                <i className="fa fa-envelope"></i>
                <a href="mailto:service@bearelectricllc.com">service@bearelectricllc.com</a>
              </div>
              <div className="phone cont">
                <i className="fa fa-phone-alt"></i>
                <a href="tel:863-329-2327">863-329-BEAR,</a>
                <a href="tel:863-329-2327">863-329-2327</a>
              </div>
              <div>
              <p> <FaLocationArrow /> 1732 Athens Ct. Lakeland, FL 33803</p>
              </div>
              <div className="social-media-links-container">
                <Link
                  className='social-link'
                  to={'//web.facebook.com/profile.php?id=61551615021279'}
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  className='social-link'
                  to={'//www.instagram.com/bearelectric_/'}
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagramSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

import React from 'react';
import './HeroSection.css';
import JobCards from '../job-cards/JobCards';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="image-container">
          <img className="cta-image" src="/images/cta-image.jpg" alt="" />
        </div>
        <div className="areas-list-container">
          <div className="intro">
            <h2 className="black-heading">Bear Electric Services</h2>
            <p className="areas-text">Our primary goal is to exceed your expectations in electrical contracting services, thereby making you another one of our extremely satisfied customers. Our team of electricians will provide you an experience that is unrivaled. Feel free to get in touch regarding any electrical concerns you may have. We'd love to hear from you!</p>
          </div>
          <div className="areas">
            <h2 className="black-heading">Areas Covered:</h2>
            <ul className="areas-list">
              <li className="areas-list-item">Greater Tampa Bay</li>
              <li className="areas-list-item">Central Florida</li>
            </ul>
          </div>
          <p className="areas-text-2"></p>
          <div className="call-us-cont">
            <h1 className="call-us-now">Contact Us:</h1>
            <a className="number" href="tel:863-329-BEAR">863-329-BEAR</a>
            <a className="number" href="tel:863-329-2327">863-329-2327</a>
            <a className="mail" href="mailto:service@bearelectricllc.com">service@bearelectricllc.com</a>
            </div>
        </div>
        < JobCards />
      </div>
    </section>
  );
}

export default HeroSection;

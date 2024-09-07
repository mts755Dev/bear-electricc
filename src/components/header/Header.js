import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

function Header() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header className="header">
      <Navbar scrollToTop={scrollToTop} />
    </header>
  );
} 

export default Header;

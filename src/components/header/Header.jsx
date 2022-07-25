import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/self_new.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h1>João Borges</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header;
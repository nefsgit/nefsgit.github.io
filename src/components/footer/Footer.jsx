import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>João Borges</a>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/jo%C3%A3o-borges-9272b4191/' rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href='https://www.instagram.com/joaoborges2089/' rel="noreferrer" target='_blank'><FiInstagram /></a>
        <a href='https://www.facebook.com/Joao.Borges.2089/' rel="noreferrer" target='_blank'><BsFacebook /></a>
      </div>

    </footer>
  )
}

export default Footer
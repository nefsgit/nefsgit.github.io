import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/jo%C3%A3o-borges-9272b4191/' rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/nefsgit/' rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href='https://www.facebook.com/Joao.Borges.2089/' rel="noreferrer" target='_blank'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
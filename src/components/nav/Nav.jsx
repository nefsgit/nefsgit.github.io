import React, { useState, useRef, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquare, BiNavigation } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#header');
  const [hoverRef, isHovered] = useHover();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const newScroll = window.scrollY;

      if(newScroll !== lastScroll) {
        setNavOpen(true);
      }

      lastScroll = newScroll;
    });

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isHovered) {
        setNavOpen(false);
      }
    }, 5000);
  
    return () => clearInterval(interval);
  }, [isHovered])

  function useHover() {
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
  
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref.current]
    );
  
    return [ref, value];
  }

  return (
    <>
    {!isHovered && navOpen && <nav className='pre__nav'><BiNavigation /></nav>}
    <nav ref={hoverRef} style={isHovered ? {opacity: 1} : {opacity: 0}}>
      <a href="#header" className={activeNav === '#header' ? 'active' : ''} onClick={() => setActiveNav('#header')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}><CgWebsite /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquare /></a>
    </nav>
    </>
  )
}

export default Nav
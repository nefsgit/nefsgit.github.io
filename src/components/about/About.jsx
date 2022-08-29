import React from 'react';
import './about.css';
import Me from '../../assets/me_three.jpg';
import { FaAward, FaLanguage } from 'react-icons/fa';
import { GiWireframeGlobe } from 'react-icons/gi';
import moment from 'moment';

const About = () => {
  
  const timePassed = moment('2021-11-01').fromNow(true).replace(/\b[a-z]/, match => match.toUpperCase());
  
  return (
    <section id='about'>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='me' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>{timePassed} developing Web Apps</small>
            </article>
            <article className="about__card">
              <GiWireframeGlobe className='about__icon' />
              <h5>Frameworks</h5>
              <small>Django, React</small>
            </article>
            <article className="about__card">
              <FaLanguage className='about__icon' />
              <h5>Languages</h5>
              <small>Python, Javascript, HTML, CSS, SQL</small>
            </article>
          </div>
          <p>
            "Never gonna give you up, never gonna let..."... Wait, wrong quote...
          </p>
          <p>
            Actually, we don't need any quotes, but I already set the mood, so you're welcome!
          </p>
          <p>
            I'm João. I'm passionate about music (not necessarily Rick Astley), computers and comedy.
          </p>
          <p>
            Solving problems is what really drives me. If there's a challenge or a problem, I won't rest before I solve it. That's what I love the most about programming - figuring out solutions.
          </p>
          <p>
            So, do you have a challenge for me?
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;

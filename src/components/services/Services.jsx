import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3> 
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Music Composition</h3> 
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Video creation and editing</h3> 
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
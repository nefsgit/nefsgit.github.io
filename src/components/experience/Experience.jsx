import React from 'react';
import './experience.css';
import { BiCheckCircle } from 'react-icons/bi';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Node.JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Django</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Trello</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Visual Paradigm</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Adobe Photoshop</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Adobe After Effects</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Adobe Illustrator</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Adobe Premiere</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Microsoft Office</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCheckCircle className='experience__details-icon' />
              <div>
                <h4>FL Studio</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
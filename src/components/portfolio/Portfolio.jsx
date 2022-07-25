import React from 'react';
import './portfolio.css';
import { projects } from './projects';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projects?.map((project) =>
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p className='small'>{project.tech}</p>
            <p className='portfolio__about'>{project.desc}</p>
            <div className='portfolio__cta'>
              {project.title === 'Starshine and the Everlost' ? <a href={project.url} target='_blank' className='btn btn-primary' rel="noreferrer">View website</a> :
              <a href={project.url} target='_blank' className='btn btn-primary' rel="noreferrer">Watch demo</a>}
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio
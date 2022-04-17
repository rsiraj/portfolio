import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__child">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>

        <div className="experience__child">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
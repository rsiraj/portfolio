import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'John Doe',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam odit consectetur!"
  },
  {
    avatar: AVTR2,
    name: 'Harold Kumar',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eius perferendis amet provident delectus."
  },
  {
    avatar: AVTR3,
    name: 'Jane Doe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum debitis quas aut dolorum."
  },
  {
    avatar: AVTR4,
    name: 'Elon Musk',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda labore quidem illo omnis cupiditate! Repellendus, molestias tempora."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
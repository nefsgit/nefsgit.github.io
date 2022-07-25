import React from 'react';
import './testimonials.css';
import {reviews} from './reviews';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} 
        className="container testimonials__container">
        {reviews?.map((review, i) => {
          return (
            <SwiperSlide className='testimonial' key={i}>
              <div className='client__avatar'>
                <img src={review.avatar} alt='client' />
              </div>
              <h5 className='client__name'>{review.name}</h5>
              <small className="client__review">{review.content}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
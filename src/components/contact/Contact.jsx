import React, { useRef } from 'react';
import './contact.css';
import { options } from './contact_options';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0uwao9u', 'template_foy4t5m', form.current, '07kqnkNrO99v05Ynb')
      .then((result) => {
        toast.success('Message sent!',
          {
              position: "bottom-left",
              autoClose: 2500,
          });
          console.log(result);
      }, (error) => {
        toast.error('Something went wrong',
          {
              position: "bottom-left",
              autoClose: 2500,
          });
          console.log(error);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Get in touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {options?.map((option, i) =>
          <article className="contact__option" key={i}>
            {option.icon}
            <h4>{option.name}</h4>
            {option.desc && <h5>{option.desc}</h5>}
            <a href={option.url} target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          )}
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your full name' required />
            <input type='email' name='email' placeholder='Your email address' required />
            <input type='text' name='subject' placeholder='Subject' maxLength={50} required />
            <textarea name='message' rows='7' placeholder='Your message' required />
            <button type='submit' className='btn btn-primary send-button'>Send</button>
        </form>
        <ToastContainer />
      </div>
    </section>
  )
}

export default Contact
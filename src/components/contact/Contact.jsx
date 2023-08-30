import React, { useState, useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03v97sa', 'template_u8ogcmd', form.current, 'ZPy_vjHYaXjiYGYSF')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        // setTimeout(() => {
        //   e.target.reset();
        // });
        setData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });

      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
          <p><a href="mailto:chrisline.lin@outlook.fr">chrisline.lin@outlook.fr</a></p>
        </div>

        <form ref={form} method='post' onSubmit={handleSubmit} action="" className="contact__form">
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" name='name' onChange={handleChange} value={data.name} className="contact__form-input" placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" name='email' onChange={handleChange} value={data.email} className="contact__form-input" placeholder='Insert your email' />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="tel" name='phone' onChange={handleChange} value={data.phone} className="contact__form-input" placeholder='Insert your phone' />
          </div>

          <div className="contact__form-div">
            <input type="text" name='subject' onChange={handleChange} value={data.subject} className="contact__form-input" placeholder='Insert your subject' />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" onChange={handleChange} value={data.message} id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>

          <button type='submit' className="btn">Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact
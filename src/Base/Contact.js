import React, { useState } from 'react'
import Backimgone from '../assets/b-img-2.jpg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, such as sending data to a server
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <div>

      <div className='home-image'>
        <img src={Backimgone} alt='' />
        <div className='home-content'>
          <h1>
            <span className="dot">.</span>Contact Us

          </h1>

        </div>
      </div>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
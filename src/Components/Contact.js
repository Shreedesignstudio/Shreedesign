import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  useEffect(() => {
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
    scrollToTop();
  }, []);



  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/contact/submit', formData)
      .then((response) => {
        console.log('Form submitted:', response.data);
        toast.success('Form submitted successfully', { autoClose: 3000 });
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form', { autoClose: 3000 });
      });
  };

  return (
    <div>

<div className="container-xxl py-4 px-0">
  <div className="container contact-page py-5 px-lg-0">
  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      {/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
      <h1 className="mb-5 text-decoration-underline text-primary">Get In Touch</h1>
    </div>
    <div className="row g-5 mx-lg-0">
      <div className="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
        {/* <h6 className="text-secondary text-uppercase">Get In Touch</h6> */}
       
        <p className="mb-4">We're here to assist you with your interior design needs. Reach out to us anytime for inquiries, consultations, or questions.</p>
        <div className="bg-light p-4">
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control border-0" id="name" placeholder="Your Name"  name="name"
              value={formData.name}
              onChange={handleInputChange} />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control border-0" id="email" placeholder="Your Email"     name="email"
              value={formData.email}
              onChange={handleInputChange} />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control border-0" id="mobile" placeholder="mobile"     name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}/>
                  <label htmlFor="subject">Mobile No</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""}  value={formData.message}
              name="message"
              onChange={handleInputChange} />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn  w-100 py-3" style={{color:"#fff",backgroundColor:"#071952",borderColor:"#071952"}} type="submit">Send Message</button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div className="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
        <div className="position-relative h-100">
          <iframe className="position-absolute w-100 h-100" style={{objectFit: 'cover'}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.867207605073!2d77.60950444999999!3d12.92591455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ff925410f5%3A0x584ee2ee57eb8275!2sTavarekere%2C%20Ramappa%20layout%2C%201st%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1695935374241!5m2!1sen!2sin"  frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

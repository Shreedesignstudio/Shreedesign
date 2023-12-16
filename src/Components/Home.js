import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"
import { Link } from 'react-router-dom';
// import "./style1.css"

import servicesData from '../Components/Services/ServicesData';

export default function Home() {
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

<div className="container-fluid p-0 pb-3">
  <div className="owl-carousel header-carousel position-relative mb-5">
    <div className="owl-carousel-item position-relative">
      <img className="img-fluid" src="img/home.jpg" alt />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(6, 3, 21, .5)'}}>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-10 col-lg-8">
              {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport &amp; Logistics Solution</h5> */}
              <h3 className="display-3 text-white animated slideInDown mt-5">Good design is obvious. Great design is transparent</h3>
              <p className="fs-5 fw-medium text-white mb-4 pb-2">Home is where the heart is, but it should also be where you find inspiration and comfort.</p>
               <a href="#contactus" className=" btn1  py-3 px-5 me-3 " style={{color:"#fff",backgroundColor:"#071952",borderColor:"#071952"}}>Read More</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>

    




<div className="container-xxl">
      <div className="container py-4 px-0">
        <div className="text-center">
          <h1 className="mb-5 text-decoration-underline text-primary">
            Explore Our Interior Design Services
          </h1>
        </div>
        <div className="row g-4">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
           
              <Link to={`/services/${service.id}`} className="text-decoration-none">
                <div className="service-item p-2">
                  <div className="overflow-hidden mb-4">
                    <img className="img-fluid" src={service.img} alt={service.name} />
                  </div>
                  <h4 className="mb-3">{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>





<div className="container-fluid overflow-hidden  py-4 px-lg-4">
  <div className="container about py-4 px-0">
    <div className="row g-5 mx-lg-0">
      <div className="col-lg-6 ps-lg-0 "  style={{minHeight: 400}}>
        <div className="position-relative h-100 ">
          <img className="position-absolute img-fluid w-100 h-100" src="img/home2.jpg" style={{objectFit: 'cover'}} alt />
        </div>
      </div>
      <div className="col-lg-6 about-text " >
        {/* <h6 className="text-secondary text-uppercase mb-3">About Us</h6> */}
        <h1 className="mb-3 text-decoration-underline text-primary">The details are not the details. They make the design</h1>
        <p className="mb-5">Welcome to Shree Design Studio, where creativity meets craftsmanship, and spaces are transformed into expressions of artistry. We take pride in our commitment to redefining interiors and creating design experiences that leave a lasting impression.</p>
        <div className="row g-4 mb-5">
          <div className="col-sm-6 " >
            <i className="fa fa-palette fa-3x text-primary mb-3" />
            <h5>Crafting Quality</h5>
            <p className="m-0">Our dedication to quality ensures that your space not only looks exquisite but also endures the test of time.</p>
          </div>
          <div className="col-sm-6 " >
            <i class="fa fa-clock  fa-3x text-primary mb-3"  aria-hidden="true"/>
            <h5>On Time Delivery</h5>
            <p className="m-0">Our commitment to on-time delivery is not just a promise; it's a guarantee. </p>
          </div>
          <div className="col-sm-6 " >
            <i class="fa fa-users fa-3x text-primary mb-3" />
            <h5>Skilled Workforce</h5>
            <p className="m-0"> Our skilled workforce, including designers, architects, and craftsmen, is well-equipped to handle various aspects of your project.  </p>
          </div>

          <div className="col-sm-6 " >
            <i class="fa fa-headphones fa-3x text-primary mb-3" />
            <h5>24/7 Support</h5>
            <p className="m-0">With our 24/7 support, you can reach out to us whenever you have questions, concerns, or need assistance.  </p>
          </div>
        </div>
        <Link to="/About" className=" btn1 py-3 px-3" style={{ color: "#fff", backgroundColor: "#071952", borderColor: "#071952" }}>
        Explore More
      </Link>   
      </div>
    </div>
  </div>
</div>

{/* 
<div className="container-xxl py-4">
  <div className="container py-4">
    <div className="row g-5">
      <div className="col-lg-6 wow " data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
        <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
        <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <div className="d-flex align-items-center">
          <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
          <div className="ps-4">
            <h6>Call for any query!</h6>
            <h3 className="text-primary m-0">+012 345 6789</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row g-4 align-items-center">
          <div className="col-sm-6">
            <div className="bg-primary p-4 mb-4 " data-wow-delay="0.3s">
              <i className="fa fa-users fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Happy Clients</p>
            </div>
            <div className="bg-secondary p-4 " >
              <i className="fa fa-ship fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Complete Shipments</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="bg-success p-4 " >
              <i className="fa fa-star fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Customer Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}





<div className="container-xxl py-4" id='contactus'>
  <div className="container py-4 px-0">
    <div className="row g-5 align-items-center">
      <div className="col-lg-5  " >
        {/* <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6> */}
        <h1 className="mb-3 text-decoration-underline text-primary">Request A Free Design!</h1>
        <p className="mb-5">Certainly! If you would like to request a free design for our interior design services, please provide us with some basic information about your project.Our team will get in touch with you as soon as possible to discuss your design needs.</p>
        <div className="d-flex align-items-center">
          <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
          <div className="ps-4">
            <h6>Call for any query!</h6>
            <h3 className="text-primary m-0">9552075486</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="bg-light text-center p-4 " >
        <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Your Name"
              style={{ height: 55 }}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="email"
              className="form-control border-0"
              placeholder="Your Email"
              style={{ height: 55 }}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Your Mobile"
              style={{ height: 55 }}
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control border-0"
              placeholder="Message"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <button
              className="btn1 w-100 py-3"
              style={{ color: '#fff', backgroundColor: '#071952', borderColor: '#071952' }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
  
        </div>
      </div>
    </div>
  </div>
</div>







    </div>
  )
}

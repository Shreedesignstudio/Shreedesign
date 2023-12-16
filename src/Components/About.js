import React, { useEffect } from 'react';


export default function About() {
  useEffect(() => {
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
    scrollToTop();
  }, []);
  return (
    <div>


<div className="container-fluid overflow-hidden  py-3 px-lg-4">
  <div className="container about py-2 px-0">
  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      {/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
      <h1 className="mb-5 text-decoration-underline text-primary">Who are We , What We do</h1>
    </div>
    <div className="row g-5 mx-lg-0">
      <div className="col-lg-5 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: 400}}>
        <div className="position-relative h-100 ">
          <img className="position-absolute img-fluid w-100 h-100" src="img/home3.jpg" style={{objectFit: 'cover'}} alt />
        </div>
      </div>
      <div className="col-lg-7 about-text wow fadeInUp" data-wow-delay="0.3s">
        {/* <h6 className="text-secondary text-uppercase mb-3">About Us</h6> */}
        <h2 className="mb-3 text-decoration-underline text-primary " >Shree Design - Crafting Your Dream Spaces</h2>
        <p className="mb-3">At Shree Design Studio, we are dedicated to transforming your dreams into reality by creating stunning and functional interior spaces. With a passion for design, an eye for detail, and a commitment to excellence, we specialize in crafting interiors that reflect your unique personality and lifestyle.
        Our vision at Shree Design Studio is to be your trusted partner in the world of interior design. We believe that your home and workspace should not only be aesthetically pleasing but also enhance your quality of life. Our goal is to provide innovative and sustainable design solutions that exceed your expectations.
        </p>
        <p className='mb-3'>At Shree Design Studio, our approach to interior design is characterized by a harmonious blend of creativity and practicality. We start by deeply understanding your needs, desires, and lifestyle, which serves as the foundation for our innovative design concepts. Our team of talented designers then transforms these concepts into tangible, awe-inspiring spaces.
        While trends come and go, our designs stand the test of time. We aim to create interiors that exude timeless elegance, making your space relevant and captivating for years to come. Whether it's a classic or contemporary aesthetic, we tailor our designs to suit your taste and preferences.
        Excellence is a non-negotiable aspect of our work. We believe in delivering nothing less than perfection in every project we undertake. Our meticulous approach and commitment to quality craftsmanship ensure that your space is a masterpiece in every sense.</p>
        
        <p className='mb-3'>Your vision is our guiding star. We see ourselves as facilitators, helping you bring your dream space to life. Our team's expertise, combined with your unique vision, results in spaces that resonate with your personality and values.
        At Shree Design Studio, we invite you to embark on a design journey with us. Together, we can transform your space into a work of art that reflects your essence and elevates your living and working experience. Discover the extraordinary with Shree Design Studio.</p>
       
      </div>
    </div>
  </div>
</div>


<div className="container-xxl ">
  <div className="container py-5">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      {/* <h6 className="text-secondary text-uppercase">Our Team</h6> */}
      <h1 className="mb-3 text-decoration-underline text-primary">Expert Team Members</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item p-4">
          <div className="overflow-hidden mb-4">
            <img className="img-fluid" src="img/team-1.jpg" alt />
          </div>
          <h5 className="mb-0">Full Name</h5>
          <p>Designation</p>
         
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item p-4">
          <div className="overflow-hidden mb-4">
            <img className="img-fluid" src="img/team-2.jpg" alt />
          </div>
          <h5 className="mb-0">Full Name</h5>
          <p>Designation</p>
         
        </div>
      </div>
      
    
      
    </div>
  </div>
</div>


    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from './Services/ServicesData';

export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Tavarkare, Kormangla, Bangalore-560004</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />9552075486</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />contactshreedesignstudio@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              
              {servicesData.map((service) => (
          <Link key={service.id} to={`/services/${service.id}`} className="btn btn-link">
        {service.name}
      </Link>
    ))}
            </div>


            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <Link to="/" className="btn btn-link">Home</Link>
              <Link to="/About" className="btn btn-link">About Us</Link>
              <Link to="/Contact" className="btn btn-link">Contact Us</Link>
              <Link to="#" className="btn btn-link">Our Services</Link>
              <Link to="#" className="btn btn-link">Terms &amp; Conditions</Link>
              <Link to="/admin" className="btn btn-link">Admin Section</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-lg-12 text-center mb-3 mb-md-0">
                © <Link to="#" className="border-bottom">Shree Designs</Link>, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

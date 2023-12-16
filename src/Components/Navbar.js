import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import "./style.css";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/categories')
      .then((response) => {
        setCategories(response.data); 
        // console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-grey  navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand  d-flex align-items-center px-4 px-lg-5">
          <img src="https://i.postimg.cc/1t3Hy8N5/logo.jpg" alt="logo" style={{ height: "70px", width: "70px" }} />
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/About" className="nav-item nav-link">About</Link>

            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
              <div className="dropdown-menu fade-up m-0">
              {categories.map((category, index) => (
  <Link
    key={index}
    to={`/services/${category._id}`}
    className="dropdown-item"
  >
    {category.name}
  </Link>
))}



              </div>
            </div>

            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
          </div>
          <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3" />9552075486</h4>
        </div>
      </nav>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';


const ServiceGallery = () => {
  const { _id } = useParams();
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    // Make an HTTP GET request to fetch service data from the API
    axios
      .get(`http://localhost:4000/api/categories/${_id}`)
      .then((response) => {
        // Set the service data from the API response
        setService(response.data);
        console.log('catgeoryy',response);
      })
      .catch((error) => {
        console.error('Error fetching service data:', error);
      });
  }, [_id]);


  useEffect(() => {
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
    scrollToTop();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(0);
    setShowModal(false);
  };

   // Check if service is null and return early if it is
   if (service === null) {
    return <div>Loading...</div>;
  }



  // Now that service is available, you can safely access its properties
  const { name, description, imageLinks } = service;

 

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">{name} Gallery</h1>

      <div className="row">
        <div className="col-md-12 mb-4">
          <p>{description}</p>
        </div>
      </div>
      <div className="row">
        {imageLinks &&
          imageLinks.map((image, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4">
              <img
                src={image}
                alt={`${name} Design`}
                className="img-fluid"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
      </div>

      {/* Lightbox Modal */}
      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {/* Render images in a carousel */}
                <div id="imageCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    {imageLinks.map((_, index) => (
                      <li
                        key={index}
                        data-target="#imageCarousel"
                        data-slide-to={index}
                        className={index === selectedImageIndex ? 'active' : ''}
                      ></li>
                    ))}
                  </ol>
                  <div className="carousel-inner">
                    {imageLinks.map((image, index) => (
                      <div key={index} className={`carousel-item ${index === selectedImageIndex ? 'active' : ''}`}>
                        <img src={image} alt={`${name} Design`} className="img-fluid" />
                      </div>
                    ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#imageCarousel"
                    role="button"
                    data-slide="prev"
                    onClick={() => setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1))}
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#imageCarousel"
                    role="button"
                    data-slide="next"
                    onClick={() => setSelectedImageIndex((prevIndex) => (prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1))}
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                  style={{ fontSize: '24px', color: 'black', opacity: 1 }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceGallery;

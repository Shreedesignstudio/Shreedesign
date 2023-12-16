import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function CategoryAdd({ onAddCategory }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageLinks: [''],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageLinkChange = (index, value) => {
    const updatedImageLinks = [...formData.imageLinks];
    updatedImageLinks[index] = value;
    setFormData({
      ...formData,
      imageLinks: updatedImageLinks,
    });
  };

  const addImageLinkField = () => {
    const updatedImageLinks = [...formData.imageLinks, ''];
    setFormData({
      ...formData,
      imageLinks: updatedImageLinks,
    });
  };

  const removeImageLinkField = (index) => {
    const updatedImageLinks = [...formData.imageLinks];
    updatedImageLinks.splice(index, 1);
    setFormData({
      ...formData,
      imageLinks: updatedImageLinks,
    });
  };

  const handleAddCategory = () => {
    const nonEmptyImageLinks = formData.imageLinks.filter((link) => link.trim() !== '');
    const newCategory = {
      name: formData.name,
      description: formData.description,
      imageLinks: nonEmptyImageLinks,
    };

    axios
      .post('http://localhost:4000/api/categories', newCategory)
      .then((response) => {
        console.log('Category added:', response.data);

        
        toast.success('Category added successfully', { autoClose: 3000 });

        onAddCategory(response.data);

     
        navigate('/admin');
      })
      .catch((error) => {
        console.error('Error creating category:', error);
        toast.error('Error creating category', { autoClose: 3000 });
      });

    setFormData({
      name: '',
      description: '',
      imageLinks: [''],
    });
  
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Add Category</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Category Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              placeholder="Category Description"
              required
            />
          </div>
          <div className="form-group">
            <label>Image Links:</label>
            {formData.imageLinks.map((link, index) => (
              <div key={index} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={link}
                  onChange={(e) => handleImageLinkChange(index, e.target.value)}
                  placeholder={`Image Link ${index + 1}`}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeImageLinkField(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button type="button" className="btn mb-2 btn-success" onClick={addImageLinkField}>
              Add Image Link
            </button>
          </div>
          <button onClick={handleAddCategory} className="btn btn-success btn-block">
            Add Category
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CategoryAdd;

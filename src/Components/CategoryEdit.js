import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CategoryEdit({ onSaveCategory }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageLinks: [''],
  });

  useEffect(() => {
    
    axios
      .get(`http://localhost:4000/api/categories/${categoryId}`)
      .then((response) => {
        const categoryData = response.data;
        setFormData({
          name: categoryData.name,
          description: categoryData.description,
          imageLinks: categoryData.imageLinks,
        });
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });
  }, [categoryId]);

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

  const handleSave = () => {
    // Create the request payload
    const updatedCategory = {
      name: formData.name,
      description: formData.description,
      imageLinks: formData.imageLinks,
    };
  
   
    axios
      .put(`http://localhost:4000/api/categories/${categoryId}`, updatedCategory)
      .then((response) => {
      
        console.log('Category updated:', response.data);

        toast.success('Category updated successfully', {
          autoClose: 2000, 
          onClose: () => {
           
            navigate('/admin');
          },
        });
  
  
        onSaveCategory(response.data);
      })
      .catch((error) => {
     
        console.error('Error updating category:', error);
      });
  };
  

  return (
    <div>
      <h2>Edit Category</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="6" 
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
             <div className="m-1">
              {/* Render the image with a small size */}
              <img src={link} alt={`Image ${index + 1}`} style={{ maxWidth: '90px' }} />
            </div>
            <div className="input-group-append m-1 ">
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
      <button onClick={handleSave} className="btn btn-primary">
        Save
      </button>

      <ToastContainer />
    </div>
  );
}

export default CategoryEdit;

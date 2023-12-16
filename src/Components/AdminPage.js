import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
import CategoryEdit from './CategoryEdit';
import CategoryAdd from './CategoryAdd';
import { toast } from 'react-toastify';
import Password from './Password';

function AdminPage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  const [passwordCorrect, setPasswordCorrect] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handlePasswordSubmit = (password) => {
   
    if (password === '9552075486') {
      setPasswordCorrect(true);
    } else {
      
      alert('Incorrect password. Please try again.');
    }
  };

 
  if (!passwordCorrect) {
    return <Password onPasswordSubmit={handlePasswordSubmit} />;
  }

  const handleDeleteCategory = (categoryId) => {
    axios
      .delete(`http://localhost:4000/api/categories/${categoryId}`)
      .then(() => {
        setCategories(categories.filter((category) => category._id !== categoryId));
        toast.success('Category deleted successfully', { autoClose: 2000 });
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
      });
  };

  const handleSaveCategory = (categoryId, updatedCategory) => {
    axios
      .put(`http://localhost:4000/api/categories/${categoryId}`, updatedCategory)
      .then(() => {
        const updatedCategories = categories.map((category) =>
          category._id === categoryId ? { ...category, ...updatedCategory } : category
        );
        setCategories(updatedCategories);
        toast.success('Category updated successfully', { autoClose: 2000 });
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  const handleAddCategory = (newCategory) => {
    
    setCategories([...categories, newCategory]);
  };


  return (
    <div className="container">
      <h1>Admin Page</h1>
      <Link to="/admin/add" className="btn" style={{ color: "#fff", backgroundColor: "#071952", borderColor: "#071952" }}>
        Add New Category
      </Link>
      <Routes>
        <Route
          path="/"
          element={<CategoryList categories={categories} onDeleteCategory={handleDeleteCategory} />}
        />
        <Route path="/edit/:categoryId" element={<CategoryEdit onSaveCategory={handleSaveCategory} />} />
        <Route path="/add" element={<CategoryAdd onAddCategory={handleAddCategory} />} />
      </Routes>
    </div>
  );
}

export default AdminPage;

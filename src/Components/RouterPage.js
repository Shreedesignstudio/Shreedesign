import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import ServiceGallery from './Services/ServiceGallery';
import servicesData from './Services/ServicesData';

import AdminPage from './AdminPage';
import CategoryList from './CategoryList';
import CategoryEdit from './CategoryEdit';
import CategoryAdd from './CategoryAdd';


export default function RouterPage() {
  
  return (
    <div>


<Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/ServiceGallery/:_id" element={<ServiceGallery />} /> */}
        <Route path="/services/:_id" element={<ServiceGallery />} />

        <Route path="/admin/*" element={<AdminPage />} />
        {/* <Route path="/categoryList" element={<CategoryList />} /> */}
        {/* <Route path="edit/:categoryId" element={<CategoryEdit />} /> */}
        {/* <Route path="/admin/add" element={<CategoryAdd />} /> */}
        


       
      </Routes>
      
      <Footer />
      <ToastContainer />
</Router>

    </div>
  )
}

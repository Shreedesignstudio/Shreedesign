

const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Create a new category
router.post('/categories', categoriesController.createCategory);

// Get all categories
router.get('/categories', categoriesController.getAllCategories);

// Get a single category by ID
router.get('/categories/:id', categoriesController.getCategoryById);

// Update a category by ID
router.put('/categories/:id', categoriesController.updateCategory);

// Delete a category by ID
router.delete('/categories/:id', categoriesController.deleteCategory);

module.exports = router;

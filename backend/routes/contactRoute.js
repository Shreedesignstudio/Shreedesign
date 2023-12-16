const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');


router.post('/submit', contactController.submitForm);
router.get('/form-submissions', contactController.getAllFormSubmissions);

module.exports = router;



const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageLinks: [{ type: String }],
});

module.exports = mongoose.model('Category', categorySchema);

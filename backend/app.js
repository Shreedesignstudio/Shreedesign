const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(cors({
  origin: ['http://localhost:3000','https://shreedesignfrontend.vercel.app']
}));


const categoriesRouter = require('./routes/categories');
const contactRoute = require('./routes/contactRoute');

app.use(express.json());
// app.use('/', userRoutes);
app.use('/api', categoriesRouter);
app.use('/api/contact', contactRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

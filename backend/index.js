import { PORT, mongoDBURL } from './config.js';

import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import musicRoutes from './routes/booksRoutes.js';

dotenv.config();

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

app.use(cors());

// Test route to check if the server is running
app.get('/', (req, res) => {
    return res.status(200).send('Book Service is running!');
});

// Use the musicRoutes for handling requests at the '/music' route
app.use('/books', musicRoutes);

// Add this line to use auth routes
app.use('/auth', authRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');

    app.listen(PORT, () => {  
      console.log(`Server listening on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log(err);
  });

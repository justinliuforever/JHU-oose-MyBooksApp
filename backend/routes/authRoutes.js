import { User } from '../models/userModel.js';
import express from 'express';

const router = express.Router();

// Combined route for user login and registration
router.post('/login', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ msg: 'Email is required' });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
      await user.save();
      return res.status(201).send({ msg: 'User registered successfully', email });
    }

    res.status(200).send({ msg: 'User logged in', email });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});

// Route to get all users and their liked books
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().populate('likedBooks');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});

router.post('/liked-books', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ msg: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email }).populate('likedBooks');
    if (!user) {
      return res.status(404).send({ msg: 'User not found' });
    }

    res.status(200).json(user.likedBooks);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});

// New route to delete a liked book for a specific user
router.post('/delete-liked-book', async (req, res) => {
  const { email, bookId } = req.body;
  if (!email || !bookId) {
    return res.status(400).send({ msg: 'Email and Book ID are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ msg: 'User not found' });
    }

    user.likedBooks.pull(bookId);
    await user.save();

    res.status(200).send({ msg: 'Book removed from liked books' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});

export default router;

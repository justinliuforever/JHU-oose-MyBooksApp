import { Book } from '../models/booksLibraryModel.js';
import express from 'express';

const router = express.Router();

// Route for creating a new book
router.post('/', async (req, res) => {
  console.log(req.body);
  // Check for required fields
  if (!req.body.title || !req.body.author || !req.body.isbn) {
    return res.status(400).send({ msg: 'Please include all required fields: title, author, and isbn' });
  }

  try {
    const book = new Book(req.body);
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});

// Route for getting all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: error.message });
  }
});

// Route for getting a single book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send({ msg: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: error.message });
  }
});

// Route for updating a book by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).send({ msg: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: error.message });
  }
});

// Route for deleting a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).send({ msg: 'Book not found' });
    }
    res.status(200).json({ msg: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: error.message });
  }
});

export default router;

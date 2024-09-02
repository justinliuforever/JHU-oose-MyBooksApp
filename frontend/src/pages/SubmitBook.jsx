// SubmitBook.jsx

import { BOOKS_URL } from '../../config';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SubmitBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!title || !author || !isbn) {
      setError('Please include all required fields: title, author, and isbn.');
      return;
    }

    const bookData = {
      title,
      author,
      isbn,
      year: year ? parseInt(year, 10) : undefined,
      description,
    };

    try {
      const response = await fetch(BOOKS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit book');
      }
      alert('Book submitted successfully');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <NavBar title="Submit New Book"/>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
            Author <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isbn" className="block text-gray-700 font-bold mb-2">
            ISBN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
            Year
          </label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitBook;

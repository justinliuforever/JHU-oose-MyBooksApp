// BookCard.jsx

import { useEffect, useState } from 'react';

import { BACKEND_URL } from '../../config'; // Ensure BACKEND_URL is correctly imported

const BookCard = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all books data from the backend
    const fetchBooks = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch books:", err);
      }
    };

    fetchBooks();
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (books.length === 0) return <p>Loading...</p>;

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {books.map((book) => (
        <article key={book._id} className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={book.year} className="text-gray-500">
              {book.year ? book.year : 'No Date'}
            </time>
            <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              ISBN: {book.isbn}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span className="absolute inset-0" />
                {book.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {book.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="text-gray-600">
                Author: <span className="font-semibold text-gray-900">{book.author}</span>
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BookCard;

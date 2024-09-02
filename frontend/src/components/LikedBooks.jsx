import { useEffect, useState } from 'react';

import { AUTH_URL } from '../../config';

const LikedBooks = ({ userEmail }) => {
  const [likedBooks, setLikedBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLikedBooks = async () => {
      try {
        const response = await fetch(`${AUTH_URL}/liked-books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLikedBooks(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch liked books:", err);
      }
    };

    fetchLikedBooks();
  }, [userEmail]);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`${AUTH_URL}/delete-liked-book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, bookId }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete the book');
      }
      setLikedBooks(likedBooks.filter((book) => book._id !== bookId));
    } catch (err) {
      setError(err.message);
      console.error("Failed to delete book:", err);
    }
  };

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (likedBooks.length === 0) return <p>No liked books found.</p>;

  return (
    <div className="mx-auto mt-10 max-w-2xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">{userEmail} Liked Books</h2>
      <ul className="space-y-4">
        {likedBooks.map((book) => (
          <li key={book._id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
            </div>
            <button
              onClick={() => handleDelete(book._id)}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedBooks;

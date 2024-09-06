import { BOOKS_URL } from '../../config';
import { useState } from 'react';

const SearchBar = ({ setBooks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('title');
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const url = searchTerm ? `${BOOKS_URL}/search?${filter}=${searchTerm}` : BOOKS_URL;
      const response = await fetch(url);
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

  return (
    <div className="max-w-4xl mx-auto p-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSearch} className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search by ${filter}`}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

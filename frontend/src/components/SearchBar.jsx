import { useEffect, useState } from 'react';

import { BOOKS_URL } from '../../config';

const SearchBar = ({ setBooks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('title');
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Fetch available titles and authors from the backend
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`${BOOKS_URL}/suggestions`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSuggestions(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch suggestions:", err);
      }
    };

    fetchSuggestions();
  }, []);

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
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            placeholder={`Search by ${filter}`}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {showSuggestions && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto">
              {suggestions
                .filter((item) => item[filter].toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchTerm(item[filter]);
                      setShowSuggestions(false);
                    }}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {item[filter]}
                  </li>
                ))}
            </ul>
          )}
        </div>
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

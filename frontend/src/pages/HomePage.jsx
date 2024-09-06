// HomePage.jsx

import BookCard from '../components/BookCard';
import LikedBooks from '../components/LikedBooks';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const HomePage = ({ userEmail }) => {
  const [books, setBooks] = useState([]);

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavBar title="Home" userEmail={userEmail} />
        <SearchBar setBooks={setBooks} />
        <article className="mt-6"> 
          <BookCard userEmail={userEmail} books={books} setBooks={setBooks} />
        </article>
        <article className="mt-6">
          <LikedBooks userEmail={userEmail} />
        </article>
      </div>
    </div>
  );
};

export default HomePage;

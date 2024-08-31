// HomePage.jsx

//import { useEffect, useState } from 'react';

//import { BACKEND_URL } from '../../config';
import BookCard from '../components/BookCard';
import NavBar from '../components/NavBar'

// Import the new BookCard component


const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* <h1 className="text-3xl font-bold text-gray-900 mt-10">Book List</h1> */}
      <NavBar title="Home"/>
      <article className="mt-6"> 
        <BookCard />
      </article>
    </div>
  );
};

export default HomePage;

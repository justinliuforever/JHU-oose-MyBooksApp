// HomePage.jsx

//import { useEffect, useState } from 'react';

//import { BACKEND_URL } from '../../config';
import BookCard from '../components/BookCard';
import LikedBooks from '../components/LikedBooks';
import NavBar from '../components/NavBar'

// Import the new BookCard component


const HomePage = ({ userEmail }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <NavBar title="Home" userEmail={userEmail} />
      <article className="mt-6"> 
        <BookCard userEmail={userEmail} />
      </article>
      <article className="mt-6">
        <h2 className="text-2xl font-bold">Liked Books</h2>
        <LikedBooks userEmail={userEmail} />
      </article>
    </div>
  );
};

export default HomePage;

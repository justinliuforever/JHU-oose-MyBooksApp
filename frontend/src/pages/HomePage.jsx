// HomePage.jsx

//import { useEffect, useState } from 'react';

//import { BACKEND_URL } from '../../config';
import BookCard from '../components/BookCard';
import LikedBooks from '../components/LikedBooks';
import NavBar from '../components/NavBar'

// Import the new BookCard component


const HomePage = ({ userEmail }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavBar title="Home" userEmail={userEmail} />
        <article className="mt-6"> 
          <BookCard userEmail={userEmail} />
        </article>
        <article className="mt-6">
          <LikedBooks userEmail={userEmail} />
        </article>
      </div>
    </div>
  );
};

export default HomePage;

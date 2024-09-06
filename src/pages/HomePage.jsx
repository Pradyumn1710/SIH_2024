/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../my_components/Navbar.tsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <Link to="/Map">
          <button className="mt-5 py-2 px-4 bg-blue-500 text-white text-lg hover:bg-blue-700">
            Navigate to Map
          </button>
        </Link>
      </div>
      <footer className="bg-gray-800 text-white text-center py-3 fixed bottom-0 w-full">
        <p>© 2024 Cargo Ship Routing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

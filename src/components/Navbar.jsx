import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">HFSA Program Evaluation</div>
      <div className="space-x-4">
        <Link 
          to="/grade11" 
          className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
        >
          Grade 11 Dashboard
        </Link>
        <Link 
          to="/grade12" 
          className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
        >
          Grade 12 Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
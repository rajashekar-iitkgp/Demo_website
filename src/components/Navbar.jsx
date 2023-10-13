import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Brand/Logo */}
        <a  className="text-2xl text-white font-semibold">
          Eco-Free
        </a>

        {/* Navbar Links */}
        <ul className="space-x-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar

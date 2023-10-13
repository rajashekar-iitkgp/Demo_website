import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Navbar Brand/Logo */}
    <a href="/" className="text-3xl text-white font-bold">
      Eco-Free
    </a>

    {/* Navbar Links */}
    <ul className="space-x-4">
      <li>
        <a href="/" className="text-white hover:text-blue-200 transition duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="text-white hover:text-blue-200 transition duration-300">
          About
        </a>
      </li>
      <li>
        <a href="/services" className="text-white hover:text-blue-200 transition duration-300">
          Services
        </a>
      </li>
      <li>
        <a href="/contact" className="text-white hover:text-blue-200 transition duration-300">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar

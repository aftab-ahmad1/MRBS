import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm pb-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Orange-Sports-Car-Background-PNG-Image.png"
            alt="Car Rental Logo"
            className="w-14 h-11"
          />
          <span className="font-bold text-2xl text-gray-800">MRBS</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex md:space-x-8 text-lg">
          <Link
            to="/"
            className="text-gray-800 hover:text-purple-600 font-semibold"
          >
            Home
          </Link>
          <Link
            to="vehicles"
            className="text-gray-800 hover:text-purple-600 font-semibold"
          >
            Vehicles
          </Link>
          <Link
            to="vehicles/details"
            className="text-gray-800 hover:text-purple-600 font-semibold"
          >
            Details
          </Link>
          <Link
            to="about"
            className="text-gray-800 hover:text-purple-600 font-semibold"
          >
            About Us
          </Link>
          <Link
            to="contact"
            className="text-gray-800 hover:text-purple-600 font-semibold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Profile Icon */}
        <div className="hidden md:block">
          <a href="#">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/465/366/small/3d-user-icon-on-transparent-background-free-png.png"
              alt="profile"
              className="h-10 w-10"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white py-4 px-6`}
      >
        <Link
          to="/"
          className="block text-gray-800 hover:text-purple-600 py-2 font-semibold"
        >
          Home
        </Link>
        <Link
          to="vehicles"
          className="block text-gray-800 hover:text-purple-600 py-2 font-semibold"
        >
          Vehicles
        </Link>
        <Link
          to="details"
          className="block text-gray-800 hover:text-purple-600 py-2 font-semibold"
        >
          Details
        </Link>
        <Link
          a="about"
          className="block text-gray-800 hover:text-purple-600 py-2 font-semibold"
        >
          About Us
        </Link>
        <Link
          to="contact"
          className="block text-gray-800 hover:text-purple-600 py-2 font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;

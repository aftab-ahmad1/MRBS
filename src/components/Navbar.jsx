import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white w-full">
      {/* First Line: Logo, Search, Icons, Profile */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-indigo-500 md:w-8 md:h-8 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m-6-6l6 6 6-6"
            />
          </svg>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg mx-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Notification Icon */}
        <div className="flex items-center space-x-2">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-300 hover:text-white sm:h-4 sm:w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C7.031 2 3 6.031 3 11v5c0 1.072-.896 2-2 2v2h22v-2c-1.104 0-2-.928-2-2v-5c0-4.969-4.031-9-9-9zm7 16H5v-5c0-3.866 3.134-7 7-7s7 3.134 7 7v5zm-7 4c1.657 0 3-1.343 3-3h-6c0 1.657 1.343 3 3 3z" />
            </svg>
          </button>

          {/* Profile Avatar */}
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second Line: Links as Buttons for Mobile */}
      <div className="container mx-auto py-4 px-6 flex justify-end md:hidden">
        {/* Button to toggle mobile menu */}
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center space-y-1 md:hidden"
        >
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-4">
          <a href="#" className="block text-lg hover:text-indigo-500">
            Home
          </a>
          <a href="#" className="block text-lg hover:text-indigo-500">
            About
          </a>
          <a href="#" className="block text-lg hover:text-indigo-500">
            Contact
          </a>
          <a href="#" className="block text-lg hover:text-indigo-500">
            Calendar
          </a>
        </div>
      )}

      {/* Desktop Navigation Links */}
      <div className="container mx-auto hidden md:flex items-center justify-end gap-x-6 py-2 border-t border-gray-700">
        <button className="px-3 py-2 text-sm md:text-base font-medium hover:text-indigo-500">
          Home
        </button>
        <button className="px-3 py-2 text-sm md:text-base font-medium hover:text-indigo-500">
          About
        </button>
        <button className="px-3 py-2 text-sm md:text-base font-medium hover:text-indigo-500">
          Contact
        </button>
        <button className="px-3 py-2 text-sm md:text-base font-medium hover:text-indigo-500">
          Calendar
        </button>
      </div>
    </div>

    // <div className="bg-gray-900 text-white">
    //   {/* Top Section */}
    //   <div className="container mx-auto flex items-center justify-between py-4 px-6">
    //     {/* Logo */}
    //     <div className="flex items-center">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="2"
    //         stroke="currentColor"
    //         className="w-8 h-8 text-indigo-500"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 3v18m-6-6l6 6 6-6"
    //         />
    //       </svg>
    //     </div>

    //     {/* Search Bar */}
    //     <div className="flex-grow mx-6">
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       />
    //     </div>

    //     {/* Notification Icon & Profile Avatar */}
    //     <div className="flex items-center space-x-4">
    //       <button className="focus:outline-none">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6 text-gray-300 hover:text-white"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 14h-3m-3 0a2 2 0 01-2-2V7a4 4 0 018 0v5a2 2 0 01-2 2m-6 4v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0h6"
    //           />
    //         </svg>
    //       </button>
    //       <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
    //         <img
    //           src="https://via.placeholder.com/150"
    //           alt="Profile"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Navigation Links */}
    //   <div className="container mx-auto flex justify-center space-x-6 py-4">
    //     <a
    //       href="#"
    //       className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //     >
    //       Home
    //     </a>
    //     <a
    //       href="#"
    //       className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //     >
    //       About
    //     </a>
    //     <a
    //       href="#"
    //       className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //     >
    //       Contact
    //     </a>
    //     <a
    //       href="#"
    //       className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //     >
    //       Calendar
    //     </a>
    //   </div>
    // </div>

    // <nav className="bg-gray-900 text-white">
    //   <div className="container mx-auto flex items-center justify-between py-4 px-6">
    //     {/* Logo */}
    //     <div className="flex items-center">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="2"
    //         stroke="currentColor"
    //         className="w-8 h-8 text-indigo-500"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 3v18m-6-6l6 6 6-6"
    //         />
    //       </svg>
    //     </div>

    //     {/* Search Bar */}
    //     <div className="flex-grow mx-6">
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       />
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="hidden md:flex space-x-4">
    //       <a
    //         href="#"
    //         className="px-3 py-2 rounded-md text-sm font-medium bg-gray-800"
    //       >
    //         Dashboard
    //       </a>
    //       <a
    //         href="#"
    //         className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //       >
    //         Team
    //       </a>
    //       <a
    //         href="#"
    //         className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //       >
    //         Projects
    //       </a>
    //       <a
    //         href="#"
    //         className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
    //       >
    //         Calendar
    //       </a>
    //     </div>

    //     {/* Notification Icon & Profile Avatar */}
    //     <div className="flex items-center space-x-4">
    //       <button className="focus:outline-none">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6 text-gray-300 hover:text-white"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 14h-3m-3 0a2 2 0 01-2-2V7a4 4 0 018 0v5a2 2 0 01-2 2m-6 4v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0h6"
    //           />
    //         </svg>
    //       </button>
    //       <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
    //         <img
    //           src="https://via.placeholder.com/150"
    //           alt="Profile"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;

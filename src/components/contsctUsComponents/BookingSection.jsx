import React from 'react';

const BookingSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto p-4 md:p-8 gap-6">
      {/* Left Panel (Form) */}
      <div className="md:w-1/3 bg-purple-700 text-white rounded-xl p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Book your car</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Car type</label>
            <select className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none">
              <option>Select car type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Convertible</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Place of rental</label>
            <select className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none">
              <option>Select place of rental</option>
              <option>Location A</option>
              <option>Location B</option>
              <option>Location C</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Place of return</label>
            <select className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none">
              <option>Select place of return</option>
              <option>Location A</option>
              <option>Location B</option>
              <option>Location C</option>
            </select>
          </div> 

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-1/2">
              <label className="block mb-1 font-medium">Rental date</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block mb-1 font-medium">Return date</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-orange-500 rounded font-semibold hover:bg-orange-600 transition"
          >
            Book now
          </button>
        </form>
      </div>

      {/* Right Panel (Image) */}
      <div className="relative md:flex-1 rounded-xl overflow-hidden bg-gray-100 ">
        {/* Background Image Wrapper with Blur */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain blur-0 opacity-100"
          style={{ backgroundImage: "url('https://www.pngall.com/wp-content/uploads/10/Luxury-PNG-Pic.png')",
            
           }}
        ></div>

        {/* A semi-transparent overlay to add some contrast if needed */}
        {/* <div className="relative w-full h-full bg-white bg-opacity-30"></div> */}
      </div>
    </div>
  );
};

export default BookingSection;

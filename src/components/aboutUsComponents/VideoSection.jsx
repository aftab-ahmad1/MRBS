import React from 'react';

const VideoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Video Wrapper */}
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-sm"
          style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/008/652/562/non_2x/car-rental-social-media-thumbnail-template-flat-cartoon-background-illustration-vector.jpg')" }}
        ></div>

        {/* Overlay if needed (semi-transparent) */}
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            className="w-12 h-12 md:w-16 md:h-16 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800 transition"
            aria-label="Play Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.5 5.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1.555.832l6-3.5a1 1 0 0 0 0-1.664l-6-3.5A1 1 0 0 0 6.5 5.5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-purple-700">20k+</span>
          <p className="text-sm md:text-base font-semibold text-gray-700">Happy customers</p>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-purple-700">540+</span>
          <p className="text-sm md:text-base font-semibold text-gray-700">Count of cars</p>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-purple-700">25+</span>
          <p className="text-sm md:text-base font-semibold text-gray-700">Years of experience</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

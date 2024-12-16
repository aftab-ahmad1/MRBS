import React from 'react';
import { Link } from 'react-router';

const CallToActionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative bg-indigo-600 rounded-[2rem] p-8 md:p-9 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between
        ">
          {/* Left Content */}
          <div className="md:w-1/2 text-white space-y-4 flex flex-col ml-5 " >
            <h2 className="text-3xl md:text-4xl font-bold self-start">
              Looking for a car?
            </h2>
            <p className="text-2xl md:text-3xl font-semibold self-start">+92-309-6143031</p>
            <p className="text-sm md:text-base text-purple-100 max-w-sm self-start">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in...
            </p>
            <Link
              to="/"
              className="inline-block mt-4 bg-orange-500 hover:bg-orange-600
               text-white text-sm font-semibold py-3 px-6 rounded transition w-3/5"
            >
              Book now
            </Link>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
            <img
              src="https://www.pngplay.com/wp-content/uploads/9/Luxury-Car-Background-PNG.png"
              alt="Blue Car"
              className="max-w-xs md:max-w-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

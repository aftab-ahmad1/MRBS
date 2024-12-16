import React from 'react';

const MemoriesSection = () => {
  const features = [
    "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...",
    "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
    "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
    "Quis nunc interdum gravida ullamcorper"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Unlock unforgettable memories on the road
          </h2>
          <p className="text-gray-600 mb-8">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor 
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                {/* Check Icon (using a simple SVG circle with a check) */}
                <div className="flex-shrink-0 w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 leading-snug">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
          {/* Background Image with Blur */}
          <div
            className="absolute inset-0 bg-center bg-cover blur-sm"
            style={{ backgroundImage: "url('your-image.jpg')" }}
          ></div>
          {/* Semi-transparent overlay (optional) */}
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;

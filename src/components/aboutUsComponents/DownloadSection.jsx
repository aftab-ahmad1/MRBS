


import React from 'react';

const DownloadSection = () => {
  return (
    <section className="w-full py-8 flex justify-center mt-20">
      <div className="relative bg-indigo-600 rounded-[2rem] w-full max-w-7xl px-8 py-12 ">
        
        {/* Pattern Overlay on the Right Side */}
        {/* <div
          className="absolute inset-y-0 right-0 w-1/2 bg-center bg-no-repeat bg-contain opacity-30"
          style={{ backgroundImage: "url('/path/to/pattern.png')" }}
        ></div> */}

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between ">
          {/* Phone Mockup on Left */}
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0
           relative bottom-40
          ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/012/627/890/small/3d-smartphone-mockup-with-empty-white-screen-phone-front-view-template-communication-template-high-quality-isolated-render-free-png.png"
              alt="Phone Mockup"
              className="h-96"
            //   className="max-w-xs md:max-w-sm"
            />
          </div>

          {/* Text Content on Right */}
          <div className="md:w-1/2 text-white ">
            <p className="text-sm uppercase tracking-wide font-semibold mb-2 ">
              DOWNLOAD OUR APP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Download our app
            </h2>
            <p className="text-sm md:text-base text-purple-100 mb-8">
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper
              diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam
              eget urna fusce vulputate at risus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#appstore">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/available-on-the-app-store-logo-black-and-white.png"
                  alt="Download on the App Store"
                  className="h-11"
                />
              </a>
              <a href="#googleplay">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/get-it-on-google-play-logo-png-transparent.png"
                  alt="Get it on Google Play"
                  className="h-11"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;



























// import React from 'react';

// const DownloadSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-8 mt-36">
//       <div className="bg-indigo-600 rounded-xl p-8 md:p-12 text-white relative">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Column: Phone Mockup */}
//           <div className="flex justify-center md:justify-start border-2 border-black -top-32 relative">
//             <img
//               src="https://static.vecteezy.com/system/resources/thumbnails/012/627/890/small/3d-smartphone-mockup-with-empty-white-screen-phone-front-view-template-communication-template-high-quality-isolated-render-free-png.png" 
//               alt="Phone Mockup"
//               className="h-64"
//             //   className="max-w-xs md:max-w-sm"
//             />
//           </div>

//           {/* Right Column: Text and Buttons */}
//           <div>
//             <p className="text-sm uppercase tracking-wide font-semibold mb-2">
//               Download our app
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
//               Download our app
//             </h2>
//             <p className="text-sm md:text-base text-purple-100 mb-8">
//               Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper 
//               diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam 
//               eget urna fusce vulputate at risus.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <a href="#appstore">
//                 <img 
//                   src="/path/to/app-store-badge.png" 
//                   alt="Download on the App Store" 
//                   className="h-10"
//                 />
//               </a>
//               <a href="#googleplay">
//                 <img 
//                   src="/path/to/google-play-badge.png" 
//                   alt="Get it on Google Play" 
//                   className="h-10"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Optional Pattern Overlay (Replace with your pattern image if desired) */}
//         {/* <div
//           className="absolute right-0 top-0 bottom-0 w-1/2 bg-center bg-no-repeat bg-contain opacity-30"
//           style={{ backgroundImage: "url('/path/to/pattern.png')" }}
//         ></div> */}
//       </div>
//     </section>
//   );
// };

// export default DownloadSection;

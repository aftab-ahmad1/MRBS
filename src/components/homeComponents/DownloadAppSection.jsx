const DownloadAppSection = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Download <br /> mobile app
          </h2>
          <p className="text-gray-600 mb-8">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna.
          </p>
          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Content (Phone Mockups) */}
        <div className="relative mt-10 lg:mt-0 lg:ml-10">
          <img
            src="https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-two-mobile-phones-with-a-clean-screen-png-image_11958557.png"
            //   src="https://via.placeholder.com/200x400"
            alt="Phone Mockup 1"
            className="w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;

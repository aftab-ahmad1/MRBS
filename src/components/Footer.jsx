import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {/* Top Row: Brand and Contact Info */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <img src="https://www.pngplay.com/wp-content/uploads/8/Orange-Sports-Car-Background-PNG-Image.png" 
            alt="Car Icon" 
            className="w-10 h-10" />
            <span className="text-xl font-semibold">MOTO RENTAL & BOOKING SERVICE</span>
          </div>

          {/* Contact Info: Address, Email, Phone */}
          <div className="flex flex-wrap gap-8">
            {/* Address */}
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-orange-400 rounded-full flex items-center justify-center">
                <img src="https://static-00.iconduck.com/assets.00/address-icon-1620x2048-3s4bnjam.png" alt="Address Icon" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Address</span>
                <span className="text-sm text-gray-700">Oxford Ave. Cary, NC 27511</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-orange-400 rounded-full flex items-center justify-center">
                <img src="https://cdn-icons-png.freepik.com/256/16076/16076082.png?semt=ais_hybrid" alt="Email Icon" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Email</span>
                <a
                  href="mailto:nwiger@yahoo.com"
                  className="text-sm text-gray-700 hover:text-orange-400 no-underline"
                >
                  nwiger@yahoo.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-orange-400 rounded-full flex items-center justify-center">
                <img src="https://pngimg.com/d/phone_PNG48980.png" alt="Phone Icon" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Phone</span>
                <a
                  href="tel:+5375476401"
                  className="text-sm text-gray-700 hover:text-orange-400 no-underline"
                >
                  +92-309-6143031
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Description, Socials, Useful Links, Vehicles, Download Apps */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company Description & Social Icons (spans 2 columns on large screens for more space) */}
          <div className="md:col-span-2">
            <p className="text-sm font-semibold mb-4">Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...</p>
            {/* Social Icons */}
            <div className="flex space-x-4 text-gray-700">
              <a href="#facebook" aria-label="Facebook" className="h-11 w-11 content-center">
                <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-256.png" 
                alt="Facebook" 
                className="" />
              </a>
              <a href="#instagram" aria-label="Instagram" className=" h-11 w-11 content-center">
                <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png" 
                alt="Instagram" 
                className="" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="h-11 w-11 content-center">
                <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-256.png"
                alt="Twitter" 
                className="" />
              </a>
              <a href="#youtube" aria-label="YouTube" className=" h-11 w-11 content-center">
                <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-256.png" 
                alt="YouTube" 
                className="" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Useful links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/" className="hover:text-orange-400 no-underline">Home</Link></li>
              <li><Link to="about" className="hover:text-orange-400 no-underline">About us</Link></li>
              <li><Link to="contact" className="hover:text-orange-400 no-underline">Contact us</Link></li>
              <li><Link to="#" className="hover:text-orange-400 no-underline">Blog</Link></li>
              <li><Link to="#" className="hover:text-orange-400 no-underline">F.A.Q</Link></li>
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Vehicles</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#sedan" className="hover:text-orange-400 no-underline">Sedan</a></li>
              <li><a href="#cabriolet" className="hover:text-orange-400 no-underline">Cabriolet</a></li>
              <li><a href="#pickup" className="hover:text-orange-400 no-underline">Pickup</a></li>
              <li><a href="#minivan" className="hover:text-orange-400 no-underline">Minivan</a></li>
              <li><a href="#suv" className="hover:text-orange-400 no-underline">SUV</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div >
            <h3 className="text-sm font-semibold mb-4">Download App</h3>
            <div className="space-y-4">
              <a href="#appstore">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store" 
                className="w-32 my-3" />
              </a>
              <a href="#playstore">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="w-32" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="text-center text-sm text-gray-500">
          © Copyright Pentagon 2024. Powered By Pentagon Group of Companies.  
        </div>
      </div>
    </footer>
  );
};

export default Footer;

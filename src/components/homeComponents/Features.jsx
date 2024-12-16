const Features = () => {
    return ( 
        <div className="container mx-auto p-8">
        {/* <!-- Top Features Section --> */}
        <div className="grid grid-cols-3 gap-8 text-center mb-12">
          {/* <!-- Availability --> */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6116/6116634.png"
                // src="icon-availability.svg"
                alt="Availability"
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg">Availability</h3>
            <p className="text-gray-500 text-sm">
              Diam tincidunt tincidunt erat at semper fermentum. Id ultricies
              quis
            </p>
          </div>
          {/* <!-- Comfort --> */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn3.iconfinder.com/data/icons/automotive-modification-1/100/car_seat_front_driver_comfort_stock-512.png"
                //   src="icon-comfort.svg"
                alt="Comfort"
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg">Comfort</h3>
            <p className="text-gray-500 text-sm">
              Gravida auctor fermentum morbi vulputate ac egestas orci
            </p>
          </div>
          {/* <!-- Savings --> */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn-icons-png.freepik.com/512/2845/2845642.png"
                //   src="icon-savings.svg"
                alt="Savings"
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg">Savings</h3>
            <p className="text-gray-500 text-sm">
              Pretium convallis id diam sed commodo vestibulum lobortis volutpat
            </p>
          </div>
        </div>

        {/* <!-- Content with Image and List --> */}
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* <!-- Blurred Image --> */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png"
              alt="Blurred Image"
              className="w-full h-full object-cover blur-sm opacity-60"
            />
          </div>

          {/* <!-- Text Content --> */}
          <div>
            {/* <!-- Feature List --> */}
            <div className="space-y-6">
              {/* <!-- Item 1 --> */}
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-purple-500 text-white font-bold rounded-full mr-4">
                  1
                </span>
                <div>
                  <h4 className="font-bold">Erat at semper</h4>
                  <p className="text-gray-500 text-sm">
                    Non amet fermentum est in enim at sit ullamcorper. Sit
                    elementum rhoncus nullam feugiat.
                  </p>
                </div>
              </div>
              {/* <!-- Item 2 --> */}
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-purple-500 text-white font-bold rounded-full mr-4">
                  2
                </span>
                <div>
                  <h4 className="font-bold">
                    Urna nec vivamus risus duis arcu
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Aliquam adipiscing velit semper morbi. Quis nunc interdum
                    gravida.
                  </p>
                </div>
              </div>
              {/* <!-- Item 3 --> */}
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-purple-500 text-white font-bold rounded-full mr-4">
                  3
                </span>
                <div>
                  <h4 className="font-bold">
                    Lobortis euismod imperdiet tempus
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Vivamus scelerisque mauris et nullam molestie et. Augue
                    adipiscing praesent nisi.
                  </p>
                </div>
              </div>
              {/* <!-- Item 4 --> */}
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-purple-500 text-white font-bold rounded-full mr-4">
                  4
                </span>
                <div>
                  <h4 className="font-bold">
                    Cras nulla aliquet nam eleifend amet
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Aliquam adipiscing velit semper morbi. Quisque eleifend
                    tincidunt vulputate libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Features;
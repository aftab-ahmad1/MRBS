const Booking = () => {
    return ( 
        <div className="relative w-full h-[500px] bg-indigo-600 overflow-hidden rounded-lg">
        {/* <!-- Background Div --> */}
        <div className="absolute inset-0">
          {/* <!-- Blurred Car Image --> */}
          <img
            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_fb7c95b9bcda3fa4920063715b1f478a.webp"
            alt="Car Image"
            class="w-fit h-3/4 object-cover blur-sm opacity-90
            absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* <!-- Content Div --> */}
        <div className="relative z-10 flex items-center justify-between p-8">
          {/* <!-- Left Content --> */}
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-4">
              Experience the road like never before
            </h1>
            <p className="text-lg mb-6">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium">
              View all cars
            </button>
          </div>

          {/* <!-- Right Content (Booking Form) --> */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Book your car</h2>
            <form className="space-y-4">
              <select className="w-full p-2 border rounded-md">
                <option>Car type</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option>Place of rental</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option>Place of return</option>
              </select>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                placeholder="Rental date"
              />
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                placeholder="Return date"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
              >
                Book now
              </button>
            </form>
          </div>
        </div>
      </div>
     );
}
 
export default Booking;
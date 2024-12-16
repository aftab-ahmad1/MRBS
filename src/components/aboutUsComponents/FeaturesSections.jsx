import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Big Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Where every drive feels extraordinary
          </h2>
        </div>

        {/* Right Section - Two Columns of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
          {/* First Column of Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Variety Brands</h3>
              <p className="text-sm text-gray-700 mt-2">
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Maximum Freedom</h3>
              <p className="text-sm text-gray-700 mt-2">
                Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in.
              </p>
            </div>
          </div>

          {/* Second Column of Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Awesome Support</h3>
              <p className="text-sm text-gray-700 mt-2">
                Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Flexibility On The Go</h3>
              <p className="text-sm text-gray-700 mt-2">
                Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

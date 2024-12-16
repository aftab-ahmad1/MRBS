import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
      company: "Kuphal LLC",
      name: "Emanuel Boyle",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png" 
    },
    {
      quote: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
      company: "Glover - Orn",
      name: "River Graves",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png" 
    },
    {
      quote: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
      company: "Haag LLC",
      name: "Ryder Malone",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Reviews from our customers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((data, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            {/* Top Section with Quote */}
            <div className="flex-grow bg-gray-50 p-6 flex flex-col items-center text-center rounded-t-xl">
              <span className="text-purple-700 text-6xl mb-4">“</span>
              <p className="text-sm text-gray-900">
                {data.quote}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="relative bg-purple-700 text-white mt-5 p-6 rounded-b-xl flex flex-col items-center">
              {/* Avatar */}
              <div className="absolute -top-8 w-16 h-16 rounded-full overflow-hidden ring-1 ring-white">
                <img src={data.avatar} alt={data.name} className="w-full h-full object-cover" />
              </div>

              {/* Spacer to accommodate avatar */}
              <div className="h-8"></div>

              <span className="text-xs text-purple-200">{data.company}</span>
              <span className="text-sm font-semibold mt-1">{data.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

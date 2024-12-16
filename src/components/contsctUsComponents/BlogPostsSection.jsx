import React from 'react';

const BlogPostsSection = () => {
  const posts = [
    {
      title: "How To Choose The Right Car",
      category: "News",
      date: "12 April 2024",
      image: "/path/to/your-image1.jpg",
    },
    {
      title: "Which plan is right for me?",
      category: "News",
      date: "12 April 2024",
      image: "/path/to/your-image2.jpg",
    },
    {
      title: "Enjoy Speed, Choice & Total Control",
      category: "News",
      date: "12 April 2024",
      image: "/path/to/your-image3.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Latest blog posts & news
      </h2>
      
      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Image Container */}
            <div 
              className="w-full h-48 md:h-64 rounded-xl overflow-hidden bg-cover bg-center shadow"
            //   style={{ backgroundImage: `url('${post.image}')` }}
              style={{ backgroundImage: "url('https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F11eebc34-864c-4994-aad2-0a10a962aaa9.jpg&w=3840&q=75')" }}
            ></div>

            {/* Post Title */}
            <h3 className="mt-4 text-lg font-semibold">{post.title}</h3>
            
            {/* Post Meta Information */}
            <p className="text-sm text-gray-500">
              {post.category} / {post.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPostsSection;

import React from 'react';

const BrandLogos = () => {
  const logos = [
    { name: 'Toyota', src: 'https://cdn.iconscout.com/icon/free/png-256/free-toyota-logo-icon-download-in-svg-png-gif-file-formats--label-automobile-auto-car-brand-logos-pack-icons-827471.png?f=webp&w=256', alt: 'Toyota' },
    { name: 'Ford', src: 'https://www.pikpng.com/pngl/b/95-951011_ford-png-image-background-ford-logo-vector-black.png', alt: 'Ford' },
    { name: 'Mercedes', src: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-1-logo-png-transparent.png', alt: 'Mercedes-Benz' },
    { name: 'Jeep', src: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-1-logo-png-transparent.png', alt: 'Jeep' },
    { name: 'BMW', src: 'https://www.freepnglogos.com/uploads/bmw-logo-33.png', alt: 'BMW' },
    { name: 'Audi', src: 'https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png', alt: 'Audi' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 rounded-xl">
      <div className="flex flex-wrap justify-evenly items-center gap-8">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;

import React from 'react';

const InfoSection = () => {
  const items = [
    {
      icon: '📍',
      label: 'Address',
      detail: 'Oxford Ave. Cary, NC 27511',
      clickable: false,
    },
    {
      icon: '✉️',
      label: 'Email',
      detail: 'contact.haashirofficial@gmail.com',
      clickable: true,
      href: 'contact.haashirofficial@gmail.com',
    },
    {
      icon: '📞',
      label: 'Phone',
      detail: '+537 547-6401',
      clickable: true,
      href: 'tel:+5375476401',
    },
    {
      icon: '⏰',
      label: 'Opening hours',
      detail: 'Sun–Mon: 10am - 10pm',
      clickable: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center md:justify-between gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="w-12 h-12 flex items-center justify-center bg-orange-400 rounded-full text-white text-xl">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{item.label}</span>
              {item.clickable ? (
                <a
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-orange-400 no-underline"
                >
                  {item.detail}
                </a>
              ) : (
                <span className="text-sm text-gray-700">{item.detail}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

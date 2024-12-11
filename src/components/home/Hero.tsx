import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[#041e42] h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="/img/Al-Aqsa-Mosque.webp"
          alt="Islamic Architecture"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Zetech Muslim Union
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Fostering unity, spiritual growth, and community service among Muslim students at Zetech University.
          Join us in our journey of faith, knowledge, and brotherhood.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#cd6015] hover:bg-[#b85512] transition-colors"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-opacity-20 bg-white hover:bg-opacity-30 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  background = 'white'
}) => {
  const bgColor = background === 'white' ? 'bg-white' : 'bg-gray-50';
  
  return (
    <section className={`${bgColor} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
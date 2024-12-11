import React from 'react';
import { colors } from '../../constants/colors';

const leaders = [
  {
    name: 'Ahmed Hassan',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'Final year Computer Science student, passionate about community building.'
  },
  {
    name: 'Ali Omar',
    role: 'Secretary General',
    image: 'https://i.pravatar.cc/150?img=51',
    bio: 'Business Administration student with a focus on organizational leadership.'
  },
  {
    name: 'Ibrahim Musa',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    bio: 'Finance major bringing professional experience in resource management.'
  }
];

const Leadership = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#041e42] text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="h-64 w-full object-cover"
                src={leader.image}
                alt={leader.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#041e42]">{leader.name}</h3>
                <p className="text-[#cd6015] font-medium">{leader.role}</p>
                <p className="mt-4 text-gray-600">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
import React from 'react';
import { Target } from 'lucide-react';
import { colors } from '../../constants/colors';

const Mission = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Target className="h-12 w-12 text-[#cd6015] mx-auto" />
          <h2 className="mt-2 text-3xl font-bold text-[#041e42]">Our Mission</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            To nurture spiritual growth, promote Islamic values, and create a supportive community
            for Muslim students at Zetech University while fostering interfaith dialogue and understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
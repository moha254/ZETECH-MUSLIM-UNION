import React, { useEffect, useState } from 'react';
import { Heart, X } from 'lucide-react';
import { isToday, getDay } from 'date-fns';

const FridaySadaqa = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFriday, setIsFriday] = useState(false);

  useEffect(() => {
    const checkIfFriday = () => {
      const today = new Date();
      const dayOfWeek = getDay(today);
      setIsFriday(dayOfWeek === 5); // 5 represents Friday
    };

    checkIfFriday();
    setIsVisible(true);

    // Check every day at midnight
    const interval = setInterval(checkIfFriday, 86400000);
    return () => clearInterval(interval);
  }, []);

  if (!isFriday || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg p-6 border-2 border-[#cd6015] z-50">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-center space-x-4">
        <Heart className="h-8 w-8 text-[#cd6015]" />
        <div>
          <h3 className="text-lg font-semibold text-[#041e42]">Friday Sadaqa Reminder</h3>
          <p className="text-gray-600 mt-1">
            Don't forget to give Sadaqa today! Every small contribution makes a difference.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <a
          href="/community"
          className="block w-full bg-[#cd6015] text-white text-center py-2 px-4 rounded hover:bg-[#b85512] transition-colors"
        >
          Contribute Now
        </a>
      </div>
    </div>
  );
};

export default FridaySadaqa;
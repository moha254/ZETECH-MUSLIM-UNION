import React from 'react';
import { Sun, Sunrise, Cloud, Sunset, Moon } from 'lucide-react';
import { colors } from '../../constants/colors';

const prayers = [
  { name: 'Fajr', icon: Sunrise, time: '5:45 AM' },
  { name: 'Dhuhr', icon: Sun, time: '12:30 PM' },
  { name: 'Asr', icon: Cloud, time: '3:45 PM' },
  { name: 'Maghrib', icon: Sunset, time: '6:45 PM' },
  { name: 'Isha', icon: Moon, time: '8:00 PM' }
];

const PrayerTimes = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#041e42] mb-8">Prayer Times - Nairobi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {prayers.map(({ name, icon: Icon, time }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="h-8 w-8 text-[#cd6015] mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-[#041e42]">{name}</h3>
              <p className="text-gray-600 mt-2">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
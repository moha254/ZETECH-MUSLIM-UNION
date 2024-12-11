import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Weekly Qur\'an Study Circle',
    date: 'Every Thursday',
    time: '5:00 PM - 6:30 PM',
    location: 'Prayer Room, Main Campus',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae'
  },
  {
    id: 2,
    title: 'Islamic Awareness Week',
    date: 'March 15-21, 2024',
    time: 'Various Times',
    location: 'Multiple Venues',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427'
  },
  {
    id: 3,
    title: 'Ramadan Preparations Workshop',
    date: 'March 8, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Conference Hall',
    image: '/img/ramadan.avif'
  }
];

const FeaturedEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#041e42] mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#041e42] mb-4">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-[#cd6015]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-[#cd6015]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-[#cd6015]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-[#041e42] text-white py-2 px-4 rounded hover:bg-[#082a5c] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
import React from 'react';
import SectionContainer from '../components/shared/SectionContainer';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Zetech Muslim Union Hosts Annual Iftar Dinner',
      date: 'March 25, 2024',
      description: 'The Zetech Muslim Union cordially invites all members to our annual Iftar dinner, an evening of unity and reflection.',
      image: '/img/iftar.jpg',
    },
    {
      id: 2,
      title: 'Weekly Quran Study Sessions',
      date: 'Every Friday',
      description: 'Join us every Friday for Quran study sessions led by esteemed scholars. Open to all students.',
      image: '/img/Reading-Quran-Basics-Course.webp',
    },
    {
      id: 3,
      title: 'Islam Awareness Week',
      date: 'April 15-20, 2024',
      description: 'Experience a week of learning and cultural exchange during Islam Awareness Week. Activities include lectures, exhibitions, and workshops.',
      image: '/img/week-awareness.jpg',
    },
    {
      id: 4,
      title: 'Ramadan Charity Drive',
      date: 'Ongoing during Ramadan',
      description: 'Support our Ramadan charity drive by donating non-perishable food items or volunteering your time. Let’s give back to the community.',
      image: '/img/Ramadan-Giving.jpg',
    },
  ];

  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold text-[#041e42] mb-8">Zetech Muslim Union News & Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {newsItems.map((news) => (
          <div key={news.id} className="border rounded-lg overflow-hidden shadow-lg">
            {/* Increased image height and margin adjustments */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-80 object-cover mb-8"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#041e42] mb-3">{news.title}</h3>
              <p className="text-sm text-gray-500 mb-5">{news.date}</p>
              <p className="text-gray-700">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default NewsPage;

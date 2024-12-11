import React from 'react';
import { Heart, Users, Book, Utensils } from 'lucide-react';
import { colors } from '../../constants/colors';

const opportunities = [
  {
    title: 'Food Bank Program',
    icon: Utensils,
    description: 'Help distribute food packages to those in need during Ramadan.',
    commitment: '4-6 hours weekly'
  },
  {
    title: 'Tutoring Initiative',
    icon: Book,
    description: 'Support fellow students with academic subjects and Islamic studies.',
    commitment: '2-3 hours weekly'
  },
  {
    title: 'Community Outreach',
    icon: Users,
    description: 'Participate in local community service and dawah activities.',
    commitment: 'Flexible hours'
  }
];

const VolunteerOpportunities = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-[#cd6015] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#041e42]">Volunteer Opportunities</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join us in making a difference in our community through various volunteer programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <div key={opportunity.title} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Icon className="h-8 w-8 text-[#cd6015] mb-4" />
                <h3 className="text-xl font-semibold text-[#041e42] mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <p className="text-sm text-[#cd6015] font-medium">
                  Time Commitment: {opportunity.commitment}
                </p>
                <button className="mt-4 w-full bg-[#041e42] text-white py-2 px-4 rounded hover:bg-[#082a5c] transition-colors">
                  Sign Up
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunities;
import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
  return (
    <SectionContainer background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#041e42]">Contact Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have questions or want to get involved? We'd love to hear from you.
          Reach out to us using any of the methods below.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </SectionContainer>
  );
};

export default ContactPage;
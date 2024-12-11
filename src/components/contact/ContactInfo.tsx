import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: 'Call: 0719034500 or WhatsApp: 0706622557',
    link: 'https://wa.me/254719034500'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'zmu@zetech.ac.ke',
    link: 'mailto:zmu@zetech.ac.ke'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Zetech University, Ruiru Campus',
    link: 'https://maps.google.com'
  },
  {
    icon: Globe,
    label: 'Social Media',
    value: '@ZetechMuslimUnion',
    link: 'https://twitter.com'
  }
];

const ContactInfo = () => {
  return (
    <div className="bg-[#041e42] text-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          return (
            <a
              key={detail.label}
              href={detail.link}
              className="flex items-start space-x-4 hover:text-[#cd6015] transition-colors"
            >
              <Icon className="h-6 w-6 mt-1" />
              <div>
                <p className="font-medium">{detail.label}</p>
                <p className="text-gray-300">{detail.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
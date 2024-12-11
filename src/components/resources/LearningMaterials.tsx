import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';
import { colors } from '../../constants/colors';

const materials = [
  {
    title: 'Basics of Islamic Studies',
    type: 'PDF',
    icon: FileText,
    description: 'A comprehensive guide to fundamental Islamic concepts.',
    downloadUrl: '#'
  },
  {
    title: 'Qur\'an Recitation Guide',
    type: 'Video',
    icon: Video,
    description: 'Learn proper Tajweed rules with expert guidance.',
    downloadUrl: '#'
  },
  {
    title: 'Islamic History Series',
    type: 'PDF',
    icon: BookOpen,
    description: 'Explore the rich history of Islamic civilization.',
    downloadUrl: '#'
  }
];

const LearningMaterials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#041e42] mb-8">Learning Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material) => {
            const Icon = material.icon;
            return (
              <div key={material.title} className="bg-white rounded-lg shadow-md p-6">
                <Icon className="h-8 w-8 text-[#cd6015] mb-4" />
                <h3 className="text-xl font-semibold text-[#041e42] mb-2">{material.title}</h3>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <a
                  href={material.downloadUrl}
                  className="inline-flex items-center text-[#cd6015] hover:text-[#b85512]"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download {material.type}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningMaterials;
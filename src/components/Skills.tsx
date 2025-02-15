import React from 'react';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'JavaScript',
      items: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'React Query']
    },
    {
      category: 'Tools',
      items: ['Git', 'VS Code', 'Vite', 'npm', 'Figma']
    },
    {
      category: 'Other',
      items: ['Responsive Design', 'UI/UX', 'Performance', 'SEO', 'Accessibility']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text relative">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2 relative">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
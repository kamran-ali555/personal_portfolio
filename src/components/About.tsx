import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver outstanding results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-400">
            I'm a passionate frontend developer with expertise in creating modern web applications.
            My focus is on building responsive, accessible, and performant user interfaces that
            provide exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React and Next.js, featuring a responsive design and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=500',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800&h=500',
      tags: ['React', 'TypeScript', 'Redux', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and animations.',
      image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=800&h=500',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60" />
              </div>
              
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
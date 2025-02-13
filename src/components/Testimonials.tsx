import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Solutions Inc."
    },
    {
      quote: "Working with them was a great experience. They brought creative solutions to our project and were always responsive to feedback.",
      author: "Michael Chen",
      role: "CTO",
      company: "StartUp Labs"
    },
    {
      quote: "Their expertise in frontend development helped us create a beautiful and performant application that our users love.",
      author: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Digital"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
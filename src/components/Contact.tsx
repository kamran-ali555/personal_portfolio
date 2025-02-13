import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">contact@example.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-400">+1 (234) 567-890</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
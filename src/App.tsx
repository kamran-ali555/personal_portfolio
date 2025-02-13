import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
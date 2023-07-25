// pages/Home.tsx
import React from 'react';

import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

import Resume from '../components/Resume';

import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Resume />
    </>
  );
};

export default Home;

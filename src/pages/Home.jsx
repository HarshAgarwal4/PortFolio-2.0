import React, { useState  , useRef} from 'react';
import Skills from '../components/SkillSection';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Projects from '../components/ProjectSection';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { useStore } from '../zustand/store';


const Home = () => {
  const portfolioData = useStore((state) => state.portfolioData)

  return (
    <div className='font-poppins'>
      <Header portfolioData={portfolioData} />
      <main>
        <Hero id="home" portfolioData={portfolioData} />
        <Skills id="skills" portfolioData={portfolioData} />
        <Projects id="projects" portfolioData={portfolioData} />
        <Contact id="contact" portfolioData={portfolioData} />
      </main>
      <Footer portfolioData={portfolioData} />
    </div>
  );
};

export default Home;
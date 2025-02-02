import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './about/page';
import Project from './project/page';
import Skills from './skills/page';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home;
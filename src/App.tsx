import React from 'react';
import Header from './components/Header';
import Hero from './components/hero';
import About from './components/About';
import CoreValue from './components/CoreValue';
import Services from './components/Sevices';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-y-auto">
      <Header />
      <Hero />
      <About />
      <CoreValue />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

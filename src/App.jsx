import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AOS from 'aos';
import Features from './Components/Features';
import Cta from './Components/Cta';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Cta />
      <Pricing  />
      <Footer />
    </main>
  )
}

export default App
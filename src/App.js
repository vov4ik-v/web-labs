import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Reviews/>
        <FAQ/>
        <AboutUs/>
        <Footer/>
      </div>
  );
}

export default App;
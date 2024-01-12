// App.js

import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Slider />
      <CategorySection />
      <Footer />
    </div>
  );
};

export default App;

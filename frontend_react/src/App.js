import React from 'react';
import './App.scss';

import { Navbar } from './components';
import {About, Header, Footer, Skills, Testimonial, Work } from './container';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About/>
      <Skills/>
      <Work/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;

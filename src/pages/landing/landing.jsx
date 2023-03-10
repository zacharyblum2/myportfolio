import React from 'react';
import './landing.css';

import { Navbar, Footer, Intro, About, Contact } from '../../components';
import { Works } from '../../containers';

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing
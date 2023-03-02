import React from 'react';
import './landing.css';

import { Navbar, Footer, Intro, Works, About, Contact } from '../../components';

const landing = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Footer/>
    </div>
  )
}

export default landing
import React from 'react';
import './landing.css';

import { Navbar, Footer, About } from '../../components';

const landing = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default landing
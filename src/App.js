import React from 'react';
import './App.css';

import { Landing } from './pages';
import { About } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Add some comments inside app.js
function App() {
  return (
    <>
      <Landing/>
    </>    
  );
}

export default App;

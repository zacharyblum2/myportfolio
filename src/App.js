import React from 'react';
import './App.css';

import { Landing } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Add some comments inside app.js
function App() {
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;

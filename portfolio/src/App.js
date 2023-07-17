import React from 'react';
import './index.css';
import Home from './pages/Home/Home.js';
import Projects from './pages/Projects/Projects.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects /> } />
          </Routes>
          
        </div>
      </Router>
    </div>
  );
}

export default App;

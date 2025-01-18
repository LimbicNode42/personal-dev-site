import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import About from './components/About';  // Import About component
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div>
        {/* Static Toolbar */}
        <nav>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        {/* <hr></hr> */}

        {/* Main content */}
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

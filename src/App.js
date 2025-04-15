import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import About from './components/About';  // Import About component
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-[#EBE8E2]">
        {/* Navbar */}
        <nav className="w-full py-[5vh] border-b border-transparent">
          <ul className="flex justify-center items-center gap-10 list-none p-0 m-0">
            <li>
              <Link
                to="/"
                className="text-gray-800 text-lg px-4 py-2 rounded hover:bg-gray-300 no-underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-800 text-lg px-4 py-2 rounded hover:bg-gray-300 no-underline"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="p-4">
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

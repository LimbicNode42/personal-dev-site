// src/components/About.js
import './About.css';
import React from 'react';

function About() {
  console.log('About component rendered');
  return (
    <div className="About">
      <header className="About-header">
        <h1>Welcome to My React Homepage</h1>
        <p>This is a simple homepage with an image and links.</p>

        {/* Image Section */}
        <img 
          src={`${process.env.PUBLIC_URL}/images/ai-me.png`}  // Replace with your image URL
          alt="Placeholder"
          style={{ width: '400px', height: 'auto', marginBottom: '20px' }}  // Optional inline styling
        />

        {/* Links Section */}
        <div>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Example Link 1</a>
          <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Example Link 2</a>
        </div>
      </header>
    </div>
  );
}

export default About;
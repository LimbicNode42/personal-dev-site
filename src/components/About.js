// src/components/About.js
import './About.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
  console.log('About component rendered');
  return (
    <div className="About">
      <header className="About-header">
        {/* Image Section */}
        <img 
          src={`${process.env.PUBLIC_URL}/images/ai-me.png`}  // Replace with your image URL
          alt="ai-me.png"
          class="header-image"
        />
        
        {/* Me */}
        <h2>Ben Wheeler</h2>

        {/* Me Diarrhea */}
        <p>
          <div class="info-line"><b>Who</b> <span class="info-text">&ndash; imposter</span> <img src={`${process.env.PUBLIC_URL}/emotes/among_us.png`} alt=":among_us:" class="inline-image" /></div>
          <br></br>
          <div class="info-line"><b>What</b> <span class="info-text">&ndash; shitposts, walkthroughs, demos, anything</span> <img src={`${process.env.PUBLIC_URL}/emotes/egg_poop.png`} alt=":egg_poop:" class="inline-image" /></div>
          <br></br>
          <div class="info-line"><b>Why</b> <span class="info-text">&ndash; vomit thoughts, remember stuff, show off</span> <img src={`${process.env.PUBLIC_URL}/emotes/yeet.png`} alt=":yeet:" class="inline-image" /></div>
          <br></br>
          <div class="info-line"><b>Where</b> <span class="info-text">&ndash; Sydney en route to Cali</span> <img src={`${process.env.PUBLIC_URL}/emotes/australia.png`} alt=":australia:" class="inline-image" /></div>
          <br></br>
          <div class="info-line"><b>When</b> <span class="info-text">&ndash; as soon as ya mum and I are done</span> <img src={`${process.env.PUBLIC_URL}/emotes/frog_tehe.png`} alt=":frog_tehe:" class="inline-image" /></div>
        </p>

        {/* Socials */}
        <div className="socials">
          <div className="icon-with-arrow">
            <a href="https://github.com/LimbicNode42" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
            </a>
          </div>
          <div className="icon-with-arrow">
            <a href="https://www.linkedin.com/in/b-wheeler/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} />
            </a>
          </div>
          <div className="icon-with-arrow">
            <a href="mailto:b.j.wheeler484@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.5rem' }} />
            </a>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default About;
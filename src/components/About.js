// src/components/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
  console.log('About component rendered');
  return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center">
        {/* Image Section */}
        <img
          src={`${process.env.PUBLIC_URL}/images/ai-me.png`}
          alt="ai-me"
          className="rounded-full h-[25vmin]"
        />

        {/* Name */}
        <h2 className="text-2xl mt-4">Ben Wheeler</h2>

        {/* Info Lines */}
        <div className="mt-4 space-y-4 text-left">
          {[
            {
              label: "Who",
              text: "– imposter",
              img: "among_us.png",
              alt: ":among_us:",
            },
            {
              label: "What",
              text: "– shitposts, walkthroughs, demos, anything",
              img: "egg_poop.png",
              alt: ":egg_poop:",
            },
            {
              label: "Why",
              text: "– vomit thoughts, remember stuff, show off",
              img: "yeet.png",
              alt: ":yeet:",
            },
            {
              label: "Where",
              text: "– Sydney en route to Cali",
              img: "australia.png",
              alt: ":australia:",
            },
            {
              label: "When",
              text: "– as soon as ya mum and I are done",
              img: "frog_tehe.png",
              alt: ":frog_tehe:",
            },
          ].map(({ label, text, img, alt }) => (
            <div key={label} className="flex items-center mb-1">
              <b className="mr-2">{label}</b>
              <span className="text-gray-800">{text}</span>
              <img
                src={`${process.env.PUBLIC_URL}/emotes/${img}`}
                alt={alt}
                className="h-[1em] w-auto ml-2 align-middle"
              />
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-around items-center mt-8 space-x-6 text-black">
          <a
            href="https://github.com/LimbicNode42"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <FontAwesomeIcon icon={faGithub} className="text-[1.5rem]" />
          </a>
          <a
            href="https://www.linkedin.com/in/b-wheeler/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-[1.5rem]" />
          </a>
          <a
            href="mailto:b.j.wheeler484@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-[1.5rem]" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default About;
import React from 'react'
import '../css/front.css'
import { useEffect, useState } from "react";

const messages = [
  "Python Developer",
  "Software Developer",
  "Full Stack Developer",
  "AI/ML Developer",
  "Web Developer",
];

function Front() {
  
      // for dynamic typing
      const [text, setText] = useState("");
      const [messageIndex, setMessageIndex] = useState(0);
      const [charIndex, setCharIndex] = useState(0);
      const [removing, setRemoving] = useState(false);
  
      const typingSpeed = 100;
      const pauseAfterTyping = 1500;
      const pauseAfterDeleting = 500;
  
      useEffect(() => {
        const currentMessage = messages[messageIndex];
        let timeout;
  
        if (!removing) {
          setText(currentMessage.substring(0, charIndex));
          if (charIndex < currentMessage.length) {
            timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
          } else {
            timeout = setTimeout(() => setRemoving(true), pauseAfterTyping);
          }
        } else {
          setText(currentMessage.substring(0, charIndex));
          if (charIndex > 0) {
            timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed);
          } else {
            timeout = setTimeout(() => {
              setRemoving(false);
              setMessageIndex((messageIndex + 1) % messages.length);
            }, pauseAfterDeleting);
          }
        }
  
        return () => clearTimeout(timeout);
      }, [charIndex, removing, messageIndex]);
  
  return (
    <>
      {/* FRONT PAGE */}
      <div id='front'  className='front-container'>
      {/* CENTER CONTENT */}
        <div className='front-div'>
          <div className="availability-status">
            <span className="availability-dot"></span>
            <span>Available for opportunities</span>
          </div>
          <p  className='front-name'>FATHIMATH NAHLA SALAMI E</p>
          <div className='typing-text'>
            {text}
            <span className='typing-text-cursor'>|</span>
          </div>
          <p className='front-description'>who builds LLM-powered applications from the ground up — 
            HTML, CSS, and React frontends to Django backends,
             prompt-driven chatbots to computer vision pipelines. 
             Currently based in the UAE and open to full-stack & 
             AI engineering roles.</p>
          <div className='front-resume'>
            <a href="/FathimathNahlaSalamiEResume.pdf" target='_blank' rel='noopener noreferrer'>View Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default Front
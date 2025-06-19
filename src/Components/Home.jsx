import React from 'react'
import "../css/home.css"
import { useEffect, useState } from "react";
import myimage from "../Images/FathimathNahlaSalamiEImage.jpg"
import Button from 'react-bootstrap/Button';

const messages = [
  "Web Developer",
  "Python Developer",
  "Software Developer",
  "Full Stack Developer"
];

const Home = () => {

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
    <div id='home' className='page my-details'>
      <div className='my-paragraph div1'>
        <h1 style={{fontWeight:"600"}}>Fathimath Nahla Salami E</h1>
        {/* <h2>Software Developer</h2> */}
        <div style={styles.text}>
          {text}
          <span style={styles.cursor}>|</span>
        </div>
        <div className='sentence'>
          <p>Enthusiastic and detail-oriented
          Web Developer with a strong foundation in designing, developing, and
          maintaining scalable web applications. Proficient in Python frameworks like Django for back-end
          development and experienced in
          front-end technologies such as
          HTML, CSS, JavaScript, and React.
          Skilled in database management
          with MySQL. Interested in contributing to dynamic teams and solving
          real-world problems with innovative and efficient solutions.</p>
        </div>
        <Button variant="dark"><a className='a-button' href="https://drive.google.com/file/d/1brUaWJYtM71FjWjO3FPyDshPRWWDfHfk/view?usp=drivesdk">View Resume</a></Button>
      </div>
      <div className='my-image div1'>
        <div>
          <img className='edit-image' src={myimage} alt="Image of Fathimath Nahla Salami E" />
        </div>
      </div>
    </div>
  )
}

const styles = {
  text: {
    fontFamily: "monospace",
    fontSize: "24px",
    whiteSpace: "pre"
  },
  cursor: {
    animation: "blink 0.8s infinite",
    marginLeft: "2px"
  }
};

export default Home

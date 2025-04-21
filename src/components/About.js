import React from 'react';
import './styles/Styles.css'; // Import the CSS file for styling

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>I'm a <span>Full Stack Developer</span></h3>
        <p>
          Hello, I'm joud krasneh, a Junior Full Stack Developer with a strong passion for 
          building applications and learning new technologies. Although I'm at the beginning 
          of my career, I've gained solid skills in front-end technologies like HTML, CSS, 
          JavaScript, and React, as well as back-end development using Node.js and Express.
          I enjoy applying the concepts I learn to real-world projects and am always looking 
          for opportunities to grow my practical and technical skills. Even though I'm a beginner, 
          I'm excited to learn and grow in this dynamic field.
          I'm eager to work with professional teams to deliver outstanding results and expand 
          my experience in the software industry.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
      <div className="about-img">
        <img src="/images/joud1.jpg" alt="About" />
      </div>
    </section>
  );
};

export default About;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Web Developer', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src="/images/joud.jpg" alt="Profile" />
      </div>
      <div className="home-content">
        <h3>Hi, I'm</h3>
        <h1>Joud Krasneh</h1>
        <h3>And I'm a <span ref={typedTextRef} className="multiple-text"></span></h3>
        <p>If you're looking for excellence, you've come to the right place.</p>
        <div className="social-media">
          <a href="www.linkedin.com/in/joud-krasneh"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Jouddmk"><i className='bx bxl-github'></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1tVNCnnJlb7yl9Sm0TPmDy-aLxigI5eGM/view" className="btn">Download CV</a>
      </div>
    </section>
  );
};

export default Home;
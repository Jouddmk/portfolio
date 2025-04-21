import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="social">
        <a href="www.linkedin.com/in/joud-krasneh"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/Jouddmk"><i className='bx bxl-github'></i></a>
    
      </div>
      <p className="copyright">
        &copy; {currentYear} JoudKrasneh - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
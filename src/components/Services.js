import React from 'react';

// ServiceBox Component for each service item
const ServiceBox = ({ title, description }) => {
  return (
    <div className="services-box">
      <i className="bx bx-code"></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="btn">Read More</a>
    </div>
  );
};

const Services = () => {
  const serviceItems = [
    {
      title: "Full Stack Development",
      description: "I offer comprehensive full-stack web development services, from building responsive front-end interfaces to creating powerful back-end systems. I work with technologies such as HTML, CSS, JavaScript, React, Node.js, and Express to deliver scalable and efficient web applications."
    },
    {
      title: "Front-End Development",
      description: "I specialize in creating visually appealing and user-friendly front-end interfaces using modern technologies like HTML5, CSS3, JavaScript, and React. My goal is to craft intuitive, responsive designs that provide an excellent user experience across all devices."
    },
    {
      title: "Back-End Development",
      description: "I build robust back-end systems with Node.js, Express, and databases such as MongoDB and SQL. I ensure efficient, secure, and scalable server-side logic to power your web applications."
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        {serviceItems.map((service, index) => (
          <ServiceBox 
            key={index} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
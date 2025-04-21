import React from 'react';

// TestimonialItem Component
const TestimonialItem = ({ name, image, text }) => {
  return (
    <div className="testimonial-item">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="bx bxs-star" id="star"></i>
        ))}
      </div>
      <p>{text}</p>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      name: "Thomas",
      image: "/images/user.jpg",
      text: "Joud Krasneh has proven to be an extremely talented Full Stack Developer. She developed strong and flexible solutions on both the front-end and back-end and paid great attention to quality and details. I wish her success in her future projects"
    },
    {
      name: "Ella",
      image: "/images/user2.png",
      text: "I've worked with Joud Krasneh on many software projects, and she is always creative and dedicated. Her ability to solve problems and turn ideas into reality is amazing, and she always handles pressure well. I look forward to working with her again in the future!"
    },
    {
      name: "Fidaa",
      image: "/images/user2.png",
      text: "I was lucky to work with Joud Krasneh on developing our website. She was extremely professional, quickly understood our needs, and provided innovative and practical solutions. The website is working great, and we are completely satisfied with the final result. Thank you!"
    }
  ];

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-box">
        <h2 className="heading">Testimonial</h2>
        <div className="wrapper">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
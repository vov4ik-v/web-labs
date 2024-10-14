import React from 'react';
import '../styles/AboutUs.css';
import AboutUsCard from './AboutUsCard';

const AboutUs = () => {
  const cardData = [
    {
      title: 'Cars Sold:',
      text: 'Over 50,000 cars have found new homes with our satisfied customers.',
    },
    {
      title: 'Years in Business:',
      text: "We've been proudly serving car enthusiasts since 1975.",
    },
    {
      title: 'Customer Rating:',
      text: 'Our commitment to quality has earned us a 96% satisfaction rate among our customers.',
    },
    {
      title: 'Car Variety:',
      text: 'We offer over 100 different models of cars, ensuring a wide selection for our customers.',
    },
    {
      title: 'Expert Mechanics:',
      text: 'Our team of certified mechanics ensures the highest quality and performance of our cars.',
    },
    {
      title: 'Nationwide Service:',
      text: 'We provide service and support in over 50 states, so you can enjoy your car worry-free.',
    },
    {
      title: 'Quality Assurance:',
      text: "Our commitment to 100% genuine parts and rigorous inspections ensures that you're getting the best quality vehicles.",
    },
    {
      title: 'Customer Support:',
      text: 'Our dedicated customer support team is available 24/7 to assist you with any inquiries or assistance you may need.',
    },
  ];

  return (
      <div className="about-us">
        <h2><span className="underline-light_blue">About us</span></h2>
        <div className="about-us__container_wrapper">
          {cardData.map((card, index) => (
              <AboutUsCard key={index} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
  );
};

export default AboutUs;
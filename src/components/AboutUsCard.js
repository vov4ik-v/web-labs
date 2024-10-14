import React from 'react';
import '../styles/AboutUsCard.css';

const AboutUsCard = ({ title, text }) => {
  return (
    <div className="about-us__card">
      <p className="about-us__card__title">{title}</p>
      <p className="about-us__card__text">{text}</p>
    </div>
  );
};

export default AboutUsCard;

import React from 'react';
import '../styles/FAQItem.css';

const FAQItem = ({ question, answer }) => {
  return (
    <div role="listitem" className="faq-wrapper w-dyn-item">
      <div className="faq-dropdown w-dropdown">
        <div className="faq-toggle w-dropdown-toggle">
          <div>{question}</div>
        </div>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;

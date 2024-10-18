import React from 'react';
import '../styles/FAQ.css';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqData = [
    {
      question: 'What types of cars do you offer?',
      answer: 'We offer a wide variety of cars, including sedans, SUVs, sports cars, and electric vehicles. You can explore our complete car catalog for more details.',
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we provide various financing options to suit different needs. Our finance team can work with you to find the best solution.',
    },
    {
      question: 'What is your return policy for car purchases?',
      answer: 'We offer a 7-day return policy for most of our vehicles. Please review our detailed return policy for more information.',
    },
    {
      question: 'Do you provide warranty for your cars?',
      answer: 'Yes, all our cars come with a warranty. The duration and coverage may vary depending on the vehicle. We also offer extended warranty options.',
    },
  ];

  return (
      <div id="section-faq" className="faq-section">
        <div className="faq-contents">
          <div className="faq-left">
            <h2>Frequently Asked <span className="underline-blue">Questions</span></h2>
          </div>
          <div className="faq-right">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FAQ;
import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const quest = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows..."
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: "Netflix offers several membership plans to suit different needs and budgets..."
    },
    {
      id: 3,
      question: "Where can I watch Netflix?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account..."
    },
    {
      id: 4,
      question: "Is there a free trial for Netflix?",
      answer: "Netflix does not currently offer a free trial..."
    },
    {
      id: 5,
      question: "Can I cancel my Netflix subscription?",
      answer: "Yes, you can cancel your Netflix subscription at any time..."
    },
    {
      id: 6,
      question: "What devices can I use to watch Netflix?",
      answer: "You can watch Netflix on a wide range of devices..."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        {quest.map((item, index) => (
          <div className="faq-item" key={item.id}>
            <div className="faq-question" >
              <h2>{item.question}</h2>
              <span className="icon"onClick={() => toggleAnswer(index)}>{activeIndex === index ? '×' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
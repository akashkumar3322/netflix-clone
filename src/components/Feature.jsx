import React from 'react'
import './Feature.css'

const Feature = () => {
  const card = [
    {
      id: 1,
      head: "Enjoy on your TV",
      title: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      id: 2,
      head: "Download your shows to watch offline",
      title: "Save your favorites easily and always have something to watch.",
    },
    {
      id: 3,
      head: "Watch everywhere",
      title: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      id: 4,
      head: "Create profiles for kids",
      title: "Send kids on adventures with their favorite characters in a space made just for them—free with your membershi"
    }
  ];

  return (
    <div className="maine">
      <h1>More Reasons to Join</h1>
      <div className="maine-container">
        {card.map((cards) => (
          <div className="cards" key={cards.id}>
              <h2>{cards.head}</h2>
              <p>
                {cards.title.split('. ').map((line, index) => (
                  <span key={index}>
                    {line}.
                    <br />
                  </span>
                ))}
              </p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;

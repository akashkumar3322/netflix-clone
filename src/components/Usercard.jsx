import React, { useRef, useState } from 'react';
import './Usercard.css';

const Usercard = () => {
  const scrollRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const cards = [
    {
      id: 1,
      title: 'The Batman',
      description: 'A dark and gritty take on the iconic DC superhero.',
      url: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kMDUS7VmFhb2coRfVBoGLR8ADBt.jpg',
    },
    {
      id: 2,
      title: 'Spider-Man: No Way Home',
      description: 'Peter Parker faces multiverse madness.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/jWcxcTE0LfDL1M4NSN2NORvEyho.jpg',
    },
    {
      id: 3,
      title: 'John Wick 4',
      description: 'Baba Yaga returns to take revenge one last time.',
      url: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yOtukBOsfPgn3T0Wq1DUxUWtj9j.jpg',
    },
    {
      id: 4,
      title: 'Oppenheimer',
      description: 'The story of the man who created the atomic bomb.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/yqsCU5XOP2mkbFamzAqbqntmfav.jpg',
    },
    {
      id: 5,
      title: 'Dune: Part Two',
      description: 'The desert calls again in this epic sequel.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/gbnglqTlBFratrUJG9hu2EZmQ2J.jpg',
    },
    {
      id: 6,
      title: 'Avengers: Endgame',
      description: 'Earth’s mightiest heroes assemble for the final battle.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/7leESXSdb8mgRLsIjWvIMKCH4Qu.jpg',
    },
    {
      id: 7,
      title: 'Joker',
      description: 'A gritty character study of Gotham’s clown prince.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/mKp4euM5Cv3m2U1Vmby3OGwcD5y.jpg',
    },
    {
      id: 8,
      title: 'The Flash',
      description: 'Barry Allen messes up the timeline in a wild adventure.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/abeH7n5pcuQcwYcTxG6DTZvXLP1.jpg',
    },
    {
      id: 9,
      title: 'Transformers: Rise of the Beasts',
      description: 'Autobots team up with beast warriors to save Earth.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg',
    },
    {
      id: 10,
      title: 'Aquaman and the Lost Kingdom',
      description: 'Arthur returns to protect the oceans once more.',
      url: 'https://media.themoviedb.org/t/p/w440_and_h660_face/fiK3u7oQb2Nsi2kuR73RRyIIGDD.jpg',
    },
  ];

  return (
    <div className="main">
      <h1>Trending Movies</h1>
      <div className="main-container">
        <div className="con">
          <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>

          <div className="main-scroll-container" ref={scrollRef}>
            <div className="scroll-content">
              {cards.map((card) => (
                <div className="card" key={card.id} onClick={() => setSelectedCard(card)}>
                  <img src={card.url} alt={card.title} />
                </div>
              ))}
            </div>
          </div>

          <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
        </div>
      </div>

      {selectedCard && (
        <div className="overlay" onClick={() => setSelectedCard(null)}>
          <div className="expanded-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard.url} alt={selectedCard.title} />
            <div className="expanded-content">
              <h2>{selectedCard.title}</h2>
              <p>{selectedCard.description}</p>
              <button className="close-btn" onClick={() => setSelectedCard(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usercard;

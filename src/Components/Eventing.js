import React, { useEffect, useState, useRef } from 'react';

const Eventing = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const cardRowRef = useRef(null);
  const backgroundTextRef = useRef(null);

  // Cards data
  const cards = [
    {
      image: '/c2carnival.jpg',
      title: 'C^2 Carnival',
      content: 'This is a short description for card 1.',
    },
    {
      image: '/Bootcamp.jpg',
      title: 'FrontEnd Bootcamp',
      content: 'This is a short description for card 2.',
    },
    {
      image: '/Greet.png',
      title: 'Greet & Meet',
      content: 'This is a short description for card 3.',
    },
    {
      image: '/Tekathon2.0.jpeg',
      title: 'Tekathon 2.0',
      content: 'This is a short description for card 4.',
    },
    {
      image: '/Diwali.jpg',
      title: 'Diwali Extra Vaganeza',
      content: 'This is a short description for card 5.',
    },
    {
      image: 'https://newsstation.media/wp-content/uploads/2024/02/image00282N2-780x398.jpg',
      title: 'Dark Pattern Buster Hackathon',
      content: 'This is a short description for card 6.',
    },
    {
      image: '/teknoxian.png',
      title: 'Teknoxian Internal Competition',
      content: 'This is a short description for card 7.',
    },
  ];
  // Scroll event listener to toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      const cardRow = cardRowRef.current;
      const backgroundText = backgroundTextRef.current;
      
      if (cardRow && backgroundText) {
        const cardRowRect = cardRow.getBoundingClientRect();
        const backgroundTextRect = backgroundText.getBoundingClientRect();
        
        // Check if the card row is close to the background text
        if (cardRowRect.top <= backgroundTextRect.bottom) {
          setIsBlurred(true);
        } else {
          setIsBlurred(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Styles for the card container and cards
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    width: '30%',
    margin: '10px',
    boxSizing: 'border-box',
  };

  return (
    <div className="cards-containers">
      {/* Background text with dynamic blur effect */}
      <div
        ref={backgroundTextRef}
        className={`background-texts ${isBlurred ? 'blurred' : ''}`}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'filter 0.3s ease',
          filter: isBlurred ? 'blur(8px)' : 'none', // Apply blur effect dynamically
        }}
      >
        Events
      </div>
      
      {/* Cards */}
      <div className="card-row" ref={cardRowRef} style={cardContainerStyle}>
        {cards.map((card, index) => (
          <div key={index} className="cardsss" style={cardStyle}>
            <img src={card.image} alt={card.title} className="cards-images" />
            <div className="cards-contents">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventing;

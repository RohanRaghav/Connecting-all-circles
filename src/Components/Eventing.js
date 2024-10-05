import React, { useEffect, useState, useRef } from 'react';

const Eventing = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // For managing the selected card
  const cardRowRef = useRef(null);
  const backgroundTextRef = useRef(null);

  // Cards data
  const cards = [
    {
      image: '/c2carnival.jpg',
      title: 'C^2 Carnival',
      content: 'The event was a vibrant showcase of student talents, featuring interactive games, guest lectures, and a dynamic flash mob embodying the spirit of community, creativity, and collaboration within CAC.',
    },
    {
      image: '/Boot.jpg',
      title: 'FrontEnd Bootcamp',
      content: 'The three-day Frontend Web Development Bootcamp equipped participants with essential skills in HTML, CSS, and JavaScript. It fostered hands-on learning, empowering attendees to build dynamic, responsive websites.',
    },
    {
      image: '/Greet.png',
      title: 'Greet & Meet',
      content: "The Greet and Meet event was filled with excitement, featuring member introductions, fun activities, a goodies giveaway, and a lively DJ. The success was driven by the management team's creativity, leadership, and teamwork throughout.",
    },
    {
      image: '/Tekathon2.0.jpeg',
      title: 'Tekathon 2.0',
      content: 'Tekathon 2.0 encouraged students to solve real-world challenges using advanced technologies. It promoted creativity, teamwork, and skills, helping participants represent our institution at **SIH 2023** with innovative, impactful solutions.',
    },
    {
      image: 'https://newsstation.media/wp-content/uploads/2024/02/image00282N2-780x398.jpg',
      title: 'Dark Pattern Buster Hackathon',
      content: 'Round 2 of the ‘Dark Patterns Buster Hackathon 2024’ at Chandigarh University showcased innovative solutions from the top 5 teams highlighting the spirit of collaboration and problem-solving.',
    },
    {
      image: '/teknoxian.png',
      title: 'Teknoxian Internal Competition',
      content: 'We conducted an internal competition of Technoxian World Cup 2024, World biggest robotics competitions where participants from 75+ countries are competing in 45+ sports.',
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

  // Function to handle card click and open the modal
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedCard(null);
  };

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
    cursor: 'pointer',
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
          <div
            key={index}
            className="cardsss"
            style={cardStyle}
            onClick={() => handleCardClick(card)} // Handle card click
          >
            <img src={card.image} alt={card.title} className="cards-images" />
            <div className="cards-contents">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed card view */}
      {selectedCard && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '80%',
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eventing;

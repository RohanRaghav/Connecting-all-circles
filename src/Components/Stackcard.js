import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stackcard = () => {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(0);

  const cardContent = [
    { _id: '1', title: '', content: '', image: '', alt: '' }, // First transparent card
    { _id: '2', title: 'Card 1', content: 'This is the first card', image: '/Greet.png', alt: 'Image 1' },
    { _id: '3', title: 'Card 2', content: 'This is the second card', image: '/teknoxian.png', alt: 'Image 2' },
    { _id: '4', title: 'Card 3', content: 'This is the third card', image: '/image3.png', alt: 'Image 3' },
    // Add more cards as needed
  ];

  useEffect(() => {
    setCards(cardContent);
  }, []);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const responses = await Promise.all(
          cardContent.map(async (card) => {
            const response = await axios.get(`http://localhost:3001/get-likes/${card._id}`);
            return response.data.likes;
          })
        );

        setCards((prevCards) =>
          prevCards.map((card, index) => ({ ...card, likes: responses[index] }))
        );
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikes();
  }, [cardContent]);

  const handleLike = async (cardId) => {
    try {
      const response = await axios.post(`http://localhost:3001/like-card/${cardId}`);
      const updatedLikes = response.data.likes;

      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === cardId ? { ...card, likes: updatedLikes } : card
        )
      );
    } catch (error) {
      console.error('Error liking card:', error);
    }
  };

  return (
    <div className="stack-container">
      <div className="background-text">Share Your Spark!</div>
      {cards.map((card, index) => (
        <div
          key={card._id} // Use card ID as the key
          className={`stack-card ${activeCard === index ? 'active' : ''} ${
            index === 0 ? 'transparent' : ''
          }`}
        >
          {index !== 0 && (
            <>
              <div className="stack-title">
                <img className="stack-image" src={card.image} alt={card.alt} />
                <h2 className="stack-head">{card.title}</h2>
                <div className="likes-card">
                  <input
                    id={`toggle-heart-${card._id}`} // Unique ID for each card
                    key={index}
                    type="checkbox"
                    onClick={() => handleLike(card._id)}
                  />
                  <label style={{}} htmlFor={`toggle-heart-${card._id}`} aria-label="like">
                    ❤
                  </label>
                  <span>{card.likes} Likes</span>
                </div>
              </div>
              <p>{card.content}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stackcard;

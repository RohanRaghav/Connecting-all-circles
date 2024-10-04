import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stackcard = () => {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(0);

  const cardContent = [
    { _id: '1', title: '', content: '', image: '', alt: '' }, // First transparent card
    { _id: '2', title: 'How has Connecting All Circles helped you in your personal or professional growth?', content: 'Being part of Connecting All Circles has tremendously boosted my networking and communication skills. The collaborative environment encouraged me to step out of my comfort zone, and I gained valuable insights from peers and mentors. This experience has positively influenced both my academic journey and professional career.', image: '/Greet.png', alt: 'Image 1' },
    { _id: '3', title: 'What do you enjoy the most about being a member of the Connecting All Circles community?', content: 'I love the diversity and inclusivity of this community. The club offers a platform where people from different fields come together to share knowledge, ideas, and resources. It’s a place where creativity flourishes, and everyone’s input is valued.', image: '/teknoxian.png', alt: 'Image 2' },
    { _id: '4', title: 'How has the club’s events and activities impacted your skill development?', content: 'The workshops and hackathons organized by Connecting All Circles have been a game-changer for me. They are always well-structured and provide hands-on experience that has helped me refine my problem-solving skills and broaden my technical expertise.', image: '/Diwali.jpg', alt: 'Image 3' },
    { _id: '5', title: 'Why would you recommend someone to join Connecting All Circles?', content: "I would highly recommend joining Connecting All Circles for anyone looking to grow both personally and professionally. The club offers incredible opportunities for learning, leadership, and collaboration. It's a great platform for students who want to build a network and gain real-world experience while making lifelong connections.", image: '/think.png', alt: 'Image 4' },
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
                  <span className='span'>{card.likes} Likes</span>
                </div>
              </div>
              <p style={{fontSize:'0.9rem'}}>{card.content}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stackcard;

import React from 'react'

// Hardcoded API data as a constant
const eventData = [
  {
    id: 1,
    image: '/c2carnival.jpg',
    headline: 'C^2 Carnival',
    description: 'The event was a vibrant showcase of student talents, featuring interactive games, guest lectures, and a dynamic flash mob embodying the spirit of community, creativity, and collaboration within CAC.'
  },
  {
    id: 2,
    image: '/Boot.jpg',
    headline: 'FrontEnd Bootcamp',
    description: 'The three-day Frontend Web Development Bootcamp equipped participants with essential skills in HTML, CSS, and JavaScript. It fostered hands-on learning, empowering attendees to build dynamic, responsive websites.'
  },
  {
    id: 3,
    image: '/Greet.png',
    headline: 'Greet & Meet',
    description: "The Greet and Meet event was filled with excitement, featuring member introductions, fun activities, a goodies giveaway, and a lively DJ. The success was driven by the management team's creativity, leadership, and teamwork throughout.",
  },
  {
    id: 4,
    image: '/Tekathon2.0.jpeg',
    headline: 'Tekathon 2.0',
    description: 'Tekathon 2.0 encouraged students to solve real-world challenges using advanced technologies. It promoted creativity, teamwork, and skills, helping participants represent our institution at **SIH 2023** with innovative, impactful solutions.'
  },
  {
    id: 6,
    image: 'https://newsstation.media/wp-content/uploads/2024/02/image00282N2-780x398.jpg',
    headline: 'Dark Pattern Buster Hackathon',
    description: 'Round 2 of the ‘Dark Patterns Buster Hackathon 2024’ at Chandigarh University showcased innovative solutions from the top 5 teams highlighting the spirit of collaboration and problem-solving.'
  },
  {
    id: 7,
    image: '/teknoxian.png',
    headline: 'Teknoxian Internal Competition',
    description: 'We conducted an internal competition of Technoxian World Cup 2024, World biggest robotics competitions where participants from 75+ countries are competing in 45+ sports.'
  }
];

const MobileEvent = () => {
    const isSingleEvent = eventData.length === 1;
  return (
    <div>
         <div className='Mobile-event'>
            <h1 style={{color:'red'}}>Events</h1>
         </div>
         <div
        className={`mobile-event-container ${isSingleEvent ? 'center-event' : ''}`} // Add center-event class if single
      >
      {eventData.map((event) => (
        <div key={event.id} className="mobile-event-card">
          <img src={event.image} alt={event.headline} className="mobile-event-image" />
          <h3 className="mobile-event-headline">{event.headline}</h3>
          <p className="mobile-event-description">{event.description}</p>
        </div>
      ))}
    </div></div>
  )
}

export default MobileEvent

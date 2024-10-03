import React from 'react'

const Greet = () => {
  return (
    <div className="diary-event">
      <b> <p style={{fontSize:'0.8rem'}}>Greet & Meet</p></b>
      <p>06 August, 2024</p>
      <p>
      We hosted Greet & Meet, an exclusive event for the members of our club, designed to foster connections and encourage collaboration among the community. The event provided a relaxed and friendly environment where new and existing members could introduce themselves, share their experiences, and get to know each other better.
      <img 
          src="/Greet.png" 
          alt="Event" 
          className="event-image"
        />
Through engaging conversations, ice-breaking activities, and networking opportunities, Greet & Meet allowed members to forge meaningful connections, exchange ideas, and discuss potential collaborations. Whether it was brainstorming new project ideas or simply building friendships, this event was an important step in strengthening the sense of unity and camaraderie within our club.

It was a fantastic opportunity for everyone to interact, learn, and grow together as a team, making the club experience more enriching and fulfilling for all.
      </p>
    </div>
  )
}

export default Greet

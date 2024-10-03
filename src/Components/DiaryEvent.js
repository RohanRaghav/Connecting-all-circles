import React from 'react';

const DiaryEvent = () => {
  return (
    <div className='team-container'>
        Events
    <div className="diary-event">
   <b> <p style={{fontSize:'0.8rem'}}>Tekathon 2.0</p></b>
   <p>06 September, 2023</p>
      <p>
      In 2023, we organized Tekathon 2.0, an internal hackathon designed to identify and select the brightest talents for the Smart India Hackathon (SIH) 2023. This event, also known as the Internal SIH, served as a platform for students to showcase their innovative problem-solving skills and cutting-edge ideas.
      <img 
          src="/Tekathon2.0.jpeg" 
          alt="Event" 
          className="event-image"
        />
Tekathon 2.0 provided an exciting and challenging environment where teams collaborated to tackle real-world problems through the application of technology. With participants competing in various domains like AI, IoT, software development, and sustainable tech, the hackathon was a testament to their creativity and technical expertise. The selected teams from this event went on to represent our institution at the prestigious national-level SIH 2023, putting forth solutions with the potential to make a significant impact on the country.

This initiative not only honed the skills of our students but also fostered teamwork, creativity, and a spirit of innovation, making Tekathon 2.0 a crucial step in shaping future tech leaders.
      </p>
    </div>
    </div>
  );
}

export default DiaryEvent;

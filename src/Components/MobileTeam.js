import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
`;

const TeamMember = styled.div`
  display: inline-block;
  background-color: white; 
  padding: 10px;
  border-radius: 10px;
  width: 120px; /* Adjust as needed */
  color: black;
  border: 4px solid grey;
  text-align: center;
  transition: transform 0.3s ease; 
  position: relative;
  
  /* Bring Alice Johnson's card upward */
  &.highlight {
    position: absolute; /* Use absolute positioning for the highlighted card */
    top: 100px; /* Adjust this value to control how far upward */
    left: 50%; /* Center it horizontally relative to the container */
    transform: translateX(-50%); /* Adjust positioning to center */
  }
`;



const MobileTeam = () => {
  const teamMembers = [
    { image:'/Ankita Mam.png', name: 'Er. Ankita Sharma', post: 'Club Counselor' },
    {image:'/Yogirajsir.png', name: 'Er. Yogiraj Bhale', post: 'Co-Faculty Advisor' },
    {   image:'/Harkirat Sir.png',name: 'Er. Harkirat Singh Bhullar', post: 'Faculty Advisor' },
  ];

  return (
    <div>
    <Container>
      <Title>Our Amazing Team</Title>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', position: 'relative' }}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} className={member.name === 'Er. Harkirat Singh Bhullar' ? 'highlight' : ''}>
           <img className='mobile-avtar' src={member.image} alt='lead' />
            <p style={{fontSize:'0.8rem'}}>{member.name}</p>
            <p style={{fontSize:'0.8rem'}}>{member.post}</p>
          </TeamMember>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default MobileTeam;

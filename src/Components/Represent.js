import React, { useState } from 'react';
import Cuboide from './Cuboide';
import Team from './Team';
import TeamPart from './TeamPart';

const cards = [
  {
    image: '/Ankita Mam.png',
    headline: 'Er. Ankita Sharma',
    describe: 'Asst. Dean, Chandigarh University',
    post: 'Club Counselor',
  },
  {
    image: '/Harkirat Sir.png',
    headline: 'Prof. Harkirat Singh Bhullar',
    describe: 'Asst. Professor, Chandigarh University',
    post: 'Faculty Advisor',
  },
  {
    image: '/Yogirajsir.png',
    headline: 'Prof. YogiRaj Bhale',
    describe: 'Asst. Professor, Chandigarh University',
    post: 'Faculty Co-Advisor',
  },
  {
    image: '/Atul.png',
    headline: 'Mr. Atul Raj',
    describe: 'Secretary',
  },
  // Add more card data as needed
];

const Represent = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Function to handle click on "Team"
  const handleTeamClick = () => {
    setShowOverlay(true);
  };

  // Function to close the overlay
  const handleCloseModal = () => {
    setShowOverlay(null);
  };

  return (
    <div className='response-cube'>
      <h1 className='team'>Our Amazing Team</h1>
      <Cuboide cards={cards} />
      
      {/* Clickable "Team" Text */}
      <div 
        className='team' 
        style={{ marginTop: '-150px', cursor: 'pointer' }}
        onClick={handleTeamClick}
      >
        Team
      </div>

      {/* Overlay modal */}
      {showOverlay && (
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
             maxHeight: '80vh', // Restrict height to 80% of viewport
             overflowY: 'auto', // Enable vertical scroll if content overflows
             textAlign: 'center',
           }}
         >
            {/* Fixed close button */}
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
            <h2>Team Overview</h2>
            <p>Here you can add more details about the team, roles, and additional information.</p>
            <Team />
            <TeamPart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Represent;

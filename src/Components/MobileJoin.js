import React, { useState, useEffect } from 'react';

const MobileJoin = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  const [formHeight, setFormHeight] = useState(260);
  const [formPosition, setFormPosition] = useState(-30);
  const [formData, setFormData] = useState({
    name: '',
    uid: '',
    department: '',
    occupation: '',
    email: '',
  });

  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showLogoSeal, setShowLogoSeal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      uid: formData.uid.toLowerCase(),
    };

    try {
      const response = await fetch('https://feedserver.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await response.json();
      if (response.status === 201) {
        setMessage('Applied successfully');
        setSubmitted(true); // Mark as submitted
        setIsSubmitted(true); // Start the animation
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error submitting form');
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const foldInterval = setInterval(() => {
        setFormHeight((prevHeight) => {
          if (prevHeight > 0) {
            return prevHeight - 5;
          } else {
            clearInterval(foldInterval);
            return 0;
          }
        });
        setFormPosition((prevPosition) => {
          if (prevPosition < 0) {
            return prevPosition + 1;
          } else {
            return 0;
          }
        });
      }, 20);
    }
  }, [isSubmitted]);

  const formStyle = {
    width: '260px',
    height: `70vh`,
    border: '1px solid #ccc',
    padding: '20px',
    transition: 'height 0.25s, transform 0.25s',
    overflow: 'hidden',
    transformOrigin: 'top',
    transform: `translateY(${formPosition}px) ${isSubmitted ? 'perspective(1000px) rotateX(-90deg)' : 'rotateX(0)'}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const envelopeStyle = {
    width: '350px',
    height: '80vh',
    backgroundColor: '#f0f0f0',
    border: '1px solid #999',
    position: 'relative',
    overflow: 'hidden',
    display: 'grid',
    placeItems: 'center',
    marginBottom: '10px',
  };

  const flapStyle = {
    width: '10px',
    height: '0',
    borderLeft: '170px solid transparent',
    borderRight: '170px solid transparent',
    borderTop: '120px solid #e0e0e0',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: isSubmitted ? 'rotateX(0)' : 'rotateX(-180deg)',
    transformOrigin: 'top',
    transition: 'transform 1s',
    transitionDelay: '0.75s',
  };

  return (
    <div>
      <div className='Mobile-event'>
        <h1 className='mobile-title'>Join Us</h1>
        <p style={{color:'white',textAlign:'justify',padding:'10px'}}> Connecting All Circles is a vibrant community dedicated to igniting creativity and encouraging exploration among students. Our mission is to provide opportunities for students to discover and pursue their passions across various domains.
            <br />
            At CAC Club, we believe in the power of community, creativity, and collaboration. We aim to bring together individuals from diverse backgrounds to share knowledge, skills, and experiences that foster growth and innovation.
            </p>
          <div className='mobileForm'>
          <div style={envelopeStyle}>
          <div style={flapStyle}></div>
          <form onSubmit={handleSubmit} style={formStyle} className="application-form">
            <div>
              <h1 className="abc">Register Now!</h1>
              <input
                type="text"
                name="name"
                placeholder="Name"
                style={{ marginTop: 30 }}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="uid"
                placeholder="UID"
                value={formData.uid}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Student">Student</option>
                <option value="Engineer">Engineer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
            <button type="submit" className='button'>Apply</button>
          </form>
          {submitted && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              fontSize: '1.5rem',
              textAlign: 'center',
              zIndex: 1,
            }}>
              Thanks for applying for further process please keep checking your mail!
            </div>
          )}
        </div>
      </div></div>
    </div>
  )
}

export default MobileJoin

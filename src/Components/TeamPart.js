import React from 'react'

const TeamPart = () => {
  return (
    <div>
       <div className='team-container'>
      Our team
      <div className='team-member'>
        <div className='team-1'>
            <img src='/Abhishek.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Abhishek Kumar Pandey</p>
            <p style={{fontSize:'0.5rem'}}>Record Executive</p></div>
        </div>
        <div className='team-2'>
            <img src='/Chirag.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Chirag Kalucha</p>
            <p style={{fontSize:'0.5rem'}}>Event & Program Executive</p></div>
        </div>
        </div>
        <div className='team-member'>
        <div className='team-1'>
            <img src='/Rama.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Rama`</p>
            <p style={{fontSize:'0.5rem'}}>Graphic Design Executive</p></div>
        </div>
        <div className='team-2'>
            <img src='/Abhinav.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Abhinav Kumar</p>
            <p style={{fontSize:'0.5rem', maxWidth:'100px',lineHeight:'10px'}}>Sponsorship & Partnership Executive</p></div>
        </div>
        </div>
        <div className='team-member'>
        <div className='team-1'>
            <img src='/Anshoom.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Anshoom Jain</p>
            <p style={{fontSize:'0.5rem'}}>Graphic Design Intern</p></div>
        </div>
        <div className='team-2'>
            <img src='/Sushil.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Sushil Kumar Patra</p>
            <p style={{fontSize:'0.5rem', maxWidth:'100px',lineHeight:'10px'}}>Intern</p></div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default TeamPart

import React from 'react'

const Team = () => {
  return (
    <div>
        <div className='team-container'>
      Our team
      <div className='team-member'>
        <div className='team-1'>
            <img src='/Ankita Mam.png' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Er. Ankita Sharma</p>
            <p style={{fontSize:'0.5rem'}}>Club Counselor</p></div>
        </div>
        <div className='team-2'>
            <img src='/Harkirat Sir.png' alt='faculty' className='ankitamam' />
            <div style={{textAlign:'center', lineHeight:'2px'}}>
            <p style={{fontSize:'0.5rem'}}>Er. Harkirat Singh Bhullar</p>
            <p style={{fontSize:'0.5rem'}}>Faculty Advisor</p>
            </div>
        </div>
      </div>
      <div className='team-member'>
      <div className='team-1'>
            <img src='/Yogirajsir.jpg' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Er. Yogiraj Bhale</p>
            <p style={{fontSize:'0.5rem'}}>Co-Faculty Advisor</p></div>
        </div>
        <div className='team-2'>
            <img src='/Atul.png' alt='faculty' className='ankitamam' />
            <div style={{textAlign:'center', lineHeight:'2px'}}>
            <p style={{fontSize:'0.5rem'}}>Atul Raj</p>
            <p style={{fontSize:'0.5rem'}}>Secretary</p>
            </div>
        </div>
      </div>
      <div className='team-member'>
      <div className='team-1'>
            <img src='/Shivansh-CAC.png' alt='Faculty' className='ankitamam' />
            <div style={{lineHeight:'2px',textAlign:'center'}}>
            <p style={{fontSize:'0.5rem'}}>Shivansh Tiwari</p>
            <p style={{fontSize:'0.5rem'}}>Treasurer</p></div>
        </div>
        <div className='team-2'>
            <img src='/Siddharth.png' alt='faculty' className='ankitamam' />
            <div style={{textAlign:'center', lineHeight:'2px'}}>
            <p style={{fontSize:'0.5rem'}}>Siddharth</p>
            <p style={{fontSize:'0.5rem'}}>Multi-Media Executive</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Team

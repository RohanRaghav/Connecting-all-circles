import React from 'react';
import Cuboide from './Cuboide';

const cards = [
  {
    image: '/Ankita Mam.png',
    headline: 'Er. Ankita Sharma',
    describe: 'Asst. Dean, Chandigarh University',
    post:'Club Counselor',
  },
  {
    image: '/Harkirat Sir.png',
    headline: 'Prof. Harkirat Singh Bhullar',
    describe: 'Asst. Professor, Chandigarh University',
    post:'Faculty Advisor',
  },
  {
    image: '/Yogirajsir.png',
    headline: 'Prof. YogiRaj Bhale',
    describe: 'Asst. Professor, Chandigarh University',
    post:'Faculty Co-Advisor',
  },
  {
    image: '/Atul.png',
    headline: 'Mr. Atul Raj',
    describe: 'Secretary',
  },
  // Add more card data as needed
];

const Represent = () => {
  return (
    <div className='response-cube'>
      <h1 className='team'>Our Amazing Team</h1>
      <Cuboide cards={cards} />
    </div>
  );
};

export default Represent;

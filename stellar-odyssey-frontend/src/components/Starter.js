import { useEffect } from 'react';
import React from 'react';
import Planet from './Planet';

function Starter() {

  return (
    <>
    <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            justifyContent: 'space-evenly',
            paddingTop: '50px',
            paddingBottom: '100px'
            }}>
        <div >
          <h1 style={{fontSize: '90px', color: 'white', textAlign: 'left', paddingLeft: '80px'}}>Edmund's Planet</h1>
          <h1 style={{fontSize: '40px', color: '#d4d4d4e8', textAlign: 'left', paddingLeft: '80px'}}>Escape to Paradise</h1>
          <h1 style={{fontSize: '25px', color: '#d4d4d4e8', textAlign: 'left', paddingLeft: '80px', marginTop: '-10px'}}>12,000 Light-years, 1095 Earth Days In Orbit</h1>
          <p className='p' style={{padding: '0 40px', backgroundColor: 'transparent', color: 'e1e1e1', marginLeft: '40px', fontSize: '20px'}}>Edmund's Planet Vacation!
Imagine an otherworldly getaway on Edmund's Planet, nestled in the enchanting Seraphinae Universe. It's the ultimate cosmic vacation you've been dreaming of!
<br></br>Revel in a year of idyllic weather during Edmund's Planet's Goldilocks Zone. Perfect temperatures, lush landscapes, and pristine beaches await. Explore lush forests, meandering rivers, and ethereal canyons. Hike the towering mountains and unwind by crystalline lakes. It's nature at its finest! Plunge into mystical oceans teeming with bioluminescent creatures and vibrant coral reefs. Snorkel, swim, or just bask in the underwater wonders. Discover cosmic marvels like wormholes and black holes. Stargaze under a breathtaking night sky, a celestial show like no other. Your cosmic adventure is just a click away! Reserve your spot on Edmund's Planet for an unforgettable vacation. Don't miss out on this once-in-a-lifetime cosmic retreat. Book now and prepare for the vacation of a lifetime on Edmund's Planet!" 
          </p>
        </div>
        <div style={{width: '100%', height: '100%'}}>
          <Planet  />
        </div>

    </div>
   </> 
  )
}

export default Starter;
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
            }}>
        <div >
          <h1 style={{fontSize: '90px', color: 'white'}}>Europa</h1>
          <p style={{padding: '0 40px', backgroundColor: 'transparent', color: 'white', marginLeft: '40px'}}>300 word description. One of the most important uses of technology in nature is the development of conservation tools. 
            From wildlife tracking devices to habitat restoration techniques, we are constantly finding new ways to protect endangered species and their ecosystems. 
            With the help of technology, we can make a real difference in the fight against extinction.  
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
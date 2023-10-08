import React from 'react';
import Planet from './Planet';

function Starter() {
  return (
    <>
    <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff3c4',
            justifyContent: 'space-evenly'
            }}>
        <div>
          <h1 style={{fontFamily: 'cursive', fontSize: '90px'}}>Europa</h1>
          <p style={{padding: '15px 30px'}}>300 word description. One of the most important uses of technology in nature is the development of conservation tools. 
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
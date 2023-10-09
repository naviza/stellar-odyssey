import React from 'react';

function Header() {
  return (
    <>
    <h1 style={{
        fontSize: '40px',
        backgroundColor: 'transparent',
        color: 'white',
        paddingTop: '45px',
        left: 0, 
        display: 'flex', 
        textIndent: '50px'
        }}>
        PlanetBNB
    </h1>
    <h5 style={{
        backgroundColor: 'transparent',
        color: '#B0B0B0',
        marginBottom: '40px',
        left: 0,
        fontStyle: 'italic',
        textAlign: 'left' ,
        display: 'flex', 
        textIndent: '50px',
        }}>
          Cosmic Gateways brought to you by Steller Odyssey

    </h5>
   </> 
  )
}

export default Header;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spline from '@splinetool/react-spline';
import Dome from './Dome';
import Human from './Human'

function PlanetInfo() {
  return (
    <div className="flex-container" style={{ backgroundColor: 'transparent' }}>
      <h1 style={{fontSize: '90px', color: 'white', paddingTop: '50px', marginBottom: '-160px'}}>Planet Info</h1>
      <Carousel interval={null}> 
        <Carousel.Item style={{ height: '900px' }}>
          {/* Your slide content for the first item */}
          <Dome />
          <Carousel.Caption>
            <h3 style={{fontSize: '35px'  }}>Dome</h3>
            <p style={{textAlign: 'justify'}}>Edmund's Planet features advanced habitat domes equipped with a self-contained information technology system for seamless internet access and connectivity within the domes. These dome infrastructures facilitate communication, data exchange, and coordination among the various facilities, including the main resort, vertical farming systems, meat/poultry cloning facilities, medical clinics, and security facilities.
              <br></br><br></br>During harsh conditions, residents and visitors find refuge in these domes, which will have an automated elevating feature, not only shielding the inhabitants from the planet’s challening terrain, but also offering a unique stargazing experience. This celestial retreat enhances their quality of life, safety, and well-being, providing an extraordinary connection with the cosmos within the domes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '900px' }}>
          <Human />
          {/* Your slide content for the second item */}
          <Carousel.Caption>
            <h3 style={{fontSize: '35px'  }}>Gravity</h3>
            <p style={{textAlign: 'justify'}}>With its Earth-like atmosphere, pristine air, lighter gravity, and a perfect beach climate thanks to its Goldilocks zone orbit, Edmund's Planet offers the ultimate beach vacation experience. Whether you're building sandcastles, snorkeling in crystal-clear waters, or simply basking in the sun, this cosmic paradise is your dream destination.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '900px' }}>
          {/* Your slide content for the third item */}
          <Carousel.Caption>
            <h3 style={{fontSize: '35px'  }}>Third slide label</h3>
            <p style={{textAlign: 'justify'}}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PlanetInfo;

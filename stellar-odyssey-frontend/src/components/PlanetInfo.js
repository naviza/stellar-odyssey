import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spline from '@splinetool/react-spline';

function PlanetInfo() {
  return (
    <div className="flex-container" style={{ backgroundColor: 'blue' }}>
      <h1>PlanetInfo</h1>
      <Carousel interval={null}> 
        <Carousel.Item style={{ height: '500px' }}>
          {/* Your slide content for the first item */}
          <Spline scene="https://prod.spline.design/Cs7idGADVQuddYDo/scene.splinecode" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px' }}>
          {/* Your slide content for the second item */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px' }}>
          {/* Your slide content for the third item */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PlanetInfo;

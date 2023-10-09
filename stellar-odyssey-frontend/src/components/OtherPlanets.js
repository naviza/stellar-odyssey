import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function OtherPlanets() {
  return (
    <div style={{
      padding: '20px'
      }}>
    <h1 style={{color:'white'}}> Recommended Planets </h1>
    <div style={{
      display:'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
      }}>
    {/* </div> */}
    <Card text={'white'}  className="collapseStyle" style={{ width: '18rem', margin: '10px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', backdropFilter: 'blur(2.6px)', WebkitBackdropFilter: 'blur(2.6px)', border: '1px solid rgba(255, 255, 255, 0.23)' }}>
        <Card.Body>
          <Row>
          {/* <Col xs={6} md={4}>
          <i class="fa-solid fa-user"></i>
          </Col> */}
          <Col>
          <Card.Title>Kepler-452b</Card.Title>
          </Col>
          
          </Row>
          <Card.Text>
          Kepler-452b, often likened to Earth, circles a star similar to our sun within the habitable zone. This positioning suggests the possibility of liquid water and conducive conditions for life. Noteworthy traits encompass a steady orbit, terrestrial dimensions, and geological processes, heightening its potential as a habitat for alien life.
          </Card.Text>
        </Card.Body>
      </Card>
      
    <Card text={'white'}  className="collapseStyle" style={{ width: '18rem', margin: '10px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', backdropFilter: 'blur(2.6px)', WebkitBackdropFilter: 'blur(2.6px)', border: '1px solid rgba(255, 255, 255, 0.23)' }}>
        <Card.Body>
          <Card.Title>Kepler-442b</Card.Title>
          <Card.Text>
          Kepler-442b orbits a K-dwarf star in the habitable zone, offering hope for liquid water and life-friendly conditions. Its super-Earth size and favorable orbit make it a promising candidate for potential habitability, although further research is needed for conclusive evidence.
          </Card.Text>
        </Card.Body>
      </Card>
      
      
    <Card text={'white'}  className="collapseStyle" style={{ width: '18rem', margin: '10px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', backdropFilter: 'blur(2.6px)', WebkitBackdropFilter: 'blur(2.6px)', border: '1px solid rgba(255, 255, 255, 0.23)' }}>
        <Card.Body>
          <Card.Title>Kepler-22b</Card.Title>
          <Card.Text>
          Kepler-22b, discovered by NASA's Kepler Space Telescope, is an exoplanet within the habitable zone of a sun-like star. While its Earth-like size and location suggest potential for liquid water and habitability, more research is required to confirm its conditions for supporting life.
          </Card.Text>
        </Card.Body>
      </Card>
      
      
    <Card text={'white'}  className="collapseStyle" style={{ width: '18rem', margin: '10px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', backdropFilter: 'blur(2.6px)', WebkitBackdropFilter: 'blur(2.6px)', border: '1px solid rgba(255, 255, 255, 0.23)' }}>
        <Card.Body>
          <Card.Title>Kepler-186f</Card.Title>
          <Card.Text>
          Kepler-186f, a captivating exoplanet in the habitable zone of its star, Kepler-186, boasts an Earth-like size and potential for liquid water. This makes it a hopeful candidate for habitability and the search for extraterrestrial life.
          </Card.Text>
        </Card.Body>
      </Card>
   </div> 
   </ div>

  )
}

export default OtherPlanets;
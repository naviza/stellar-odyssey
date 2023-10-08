import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function Footer() {
  return (
    <>
    <h1 style={{
        backgroundColor: 'transparent',
        padding: '50px',
        color: 'black',
        fontFamily: '-moz-initial'
        }}>
        PlanetBNB
    </h1>
    <div style={{display:'flex', justifyContent: 'space-around'}}>
    <Form>
      <Row>
          <Form.Control placeholder="Your Name" />
      </Row>
      <Row>
      <Form.Control placeholder="Your Email" />
      </Row>
      <Row>
      <Form.Control placeholder="Subject" />
      </Row>
      <Row>
      <Form.Control placeholder="Message" />
      </Row>
    </Form>
    </div>
   </> 
  )
}

export default Footer;


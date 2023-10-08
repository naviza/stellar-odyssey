import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <>
      <h1
        style={{
          backgroundColor: 'transparent',
          padding: '50px',
          color: 'black',
          fontFamily: '-moz-initial',
        }}
      >
        Contact Us
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <Form>
          <Row style={{marginBottom: '10px' }}>
            <Form.Control placeholder="Your Name" />
          </Row>
          <Row style={{marginBottom: '10px' }}>
            <Form.Control placeholder="Your Email" />
          </Row>
          <Row style={{marginBottom: '10px' }}>
            <Form.Control placeholder="Subject" />
          </Row>
          <Row style={{marginBottom: '10px' }}>
            <Form.Control
              placeholder="Message"
              style={{ height: '150px', width: '1000px' }}
            />
          </Row>
        </Form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '100px' }}>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Footer;

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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ width: '70%' }}>
          <Form>
            <Row style={{ marginBottom: '10px' }}>
              <Form.Control placeholder="Name" />
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Form.Control placeholder="Email" />
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Form.Control placeholder="Subject" />
            </Row>
            <Row>
              <textarea rows="10" name="message" placeholder="Message" style={{ borderRadius: '7px', padding: '10px'}}></textarea>
            </Row>
          </Form>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '100px' }}>
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

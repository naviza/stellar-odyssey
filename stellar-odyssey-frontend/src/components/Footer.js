import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <>
    <div className='contact'>
      <h1
        style={{
          backgroundColor: 'transparent',
          padding: '50px',
          color: 'white',
          fontSize: '80px'
        }}
      >
        Contact Us
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ width: '70%' }}>
          <Form>
            <Row style={{ marginBottom: '20px' }}>
              <Form.Control placeholder="Name" />
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Form.Control placeholder="Email" />
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Form.Control placeholder="Subject" />
            </Row>
            <Row>
              <textarea rows="10" name="message" placeholder="Message" style={{ borderRadius: '7px', padding: '10px'}}></textarea>
            </Row>
          </Form>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '20px' }}>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;

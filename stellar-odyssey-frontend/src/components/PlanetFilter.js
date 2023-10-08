
import { React, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PlanetFilter() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>

    <div style={{
        display: 'd-flex', 
        padding: '20px',
    }} >
    <Form>
        <Container>
        <Row>
            <Col sm={3}>
            <Form.Group controlId="text1">
                {/* <Form.Label>Text 1:</Form.Label> */}
                <Form.Control type="text" placeholder="Origin Planet" />
            </Form.Group>
            </Col>
            <Col sm={3}>
            <Form.Group controlId="text2">
                {/* <Form.Label>Text 1:</Form.Label> */}
                <Form.Control type="text" placeholder="Destination Planet" />
            </Form.Group>
            </Col>
            <Col sm={2}>
            <Form.Group controlId="text3">
                {/* <Form.Label>When</Form.Label> */}
                <Form.Control type="date" placeholder="Start Date" />
            </Form.Group>
            </Col>
            
            <Col sm={2}>
            <Form.Group controlId="text4">
                {/* <Form.Label>When</Form.Label> */}
                <Form.Control type="date" placeholder="End Date" />
            </Form.Group>
            </Col>

            <Col sm={2}>
            <Form.Group controlId="text5">

            <Button variant="primary" onClick={handleShow}>
                Submit
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your booking is going to cost $7357!</Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="outline-success" onClick={handleClose}>
                Confirm
            </Button>
            </Modal.Footer>
            </Modal>
            </Form.Group>
            </Col>

        </Row>
        </Container>
        </Form>

</div>
    
   </> 
  )
}

export default PlanetFilter;
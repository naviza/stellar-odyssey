import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Reviews() {
  return (
    // <div>
    // <h1>Reviews</h1>
    
    <div style={{
      padding: '10px'
      }}>
    <h1> Testimonials </h1>
    <div style={{
      display:'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
      }}>
    {/* </div> */}
    <Card border="primary" style={{ width: '36rem', margin: '10px' }}>
        <Card.Body>
          <Row>
          <Col xs={6} md={4}>
          <i class="fa-solid fa-user"></i>
          </Col>
          <Col>
          <Card.Title>Star Lord</Card.Title>
          </Col>
          
          </Row>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '36rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>X Æ A-Xii</Card.Title>
          <Card.Text>
          The Planet in Edmunds offers a luxurious and convenient stay for those willing to invest in a top-tier experience. Its central location, impeccable service, and dining options make it a solid choice for both business travelers and tourists. However, travelers on a tight budget might want to explore more economical alternatives in the galaxy.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card border="primary" style={{ width: '36rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>Kokey</Card.Title>
          <Card.Text>
          ☹︎□︎❒︎♏︎❍︎ ♓︎◻︎⬧︎◆︎❍︎ ♎︎□︎●︎□︎❒︎ ⬧︎♓︎⧫︎ ♋︎❍︎♏︎⧫︎📪︎ ♍︎□︎■︎⬧︎♏︎♍︎⧫︎♏︎⧫︎◆︎❒︎ ♋︎♎︎♓︎◻︎♓︎⬧︎♍︎♓︎■︎♑︎ ♏︎●︎♓︎⧫︎📪︎ ⬧︎♏︎♎︎ ♎︎□︎ ♏︎♓︎◆︎⬧︎❍︎□︎♎︎ ⧫︎♏︎❍︎◻︎□︎❒︎ ♓︎■︎♍︎♓︎♎︎♓︎♎︎◆︎■︎⧫︎ ◆︎⧫︎ ●︎♋︎♌︎□︎❒︎♏︎ ♏︎⧫︎ ♎︎□︎●︎□︎❒︎♏︎ ❍︎♋︎♑︎■︎♋︎ ♋︎●︎♓︎❑︎◆︎♋︎📬︎ 🕆︎⧫︎ ♏︎■︎♓︎❍︎ ♋︎♎︎ ❍︎♓︎■︎♓︎❍︎ ❖︎♏︎■︎♓︎♋︎❍︎📪︎ ❑︎◆︎♓︎⬧︎ ■︎□︎⬧︎⧫︎❒︎◆︎♎︎ ♏︎⌧︎♏︎❒︎♍︎♓︎⧫︎♋︎⧫︎♓︎□︎■︎ ◆︎●︎●︎♋︎❍︎♍︎□︎ ●︎♋︎♌︎□︎❒︎♓︎⬧︎ ■︎♓︎⬧︎♓︎ ◆︎⧫︎ ♋︎●︎♓︎❑︎◆︎♓︎◻︎ ♏︎⌧︎ ♏︎♋︎ ♍︎□︎❍︎❍︎□︎♎︎□︎ ♍︎□︎■︎⬧︎♏︎❑︎◆︎♋︎⧫︎📬︎
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card border="primary" style={{ width: '36rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>Alien X</Card.Title>
          <Card.Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          </Card.Text>
        </Card.Body>
      </Card>
   </div> 
   </ div>
  )
}

export default Reviews;
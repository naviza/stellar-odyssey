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
    <Card text={'white'}  className="collapseStyle" style={{ width: '36rem', margin: '10px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.23)' }}>
        <Card.Body>
          <Row>
          {/* <Col xs={6} md={4}>
          <i class="fa-solid fa-user"></i>
          </Col> */}
          <Col>
          <Card.Title>Star Lord</Card.Title>
          </Col>
          
          </Row>
          <Card.Text>
          The overall vibe of the planet was okay. Not really a lot of food option, given the planet is barren most of the time, but it was okay. You still have hyperspatial satellite so you can communicate with everyone you need to. I couldn't park my spaceship anywhere on this planet so watch out for that.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg={'secondary'} text={'white'}  border="primary" style={{ width: '36rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>X Æ A-Xii</Card.Title>
          <Card.Text>
          The Planet in Edmunds offers a luxurious and convenient stay for those willing to invest in a top-tier experience. Its central location, impeccable service, and dining options make it a solid choice for both business travelers and tourists. However, travelers on a tight budget might want to explore more economical alternatives in the galaxy.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card bg={'secondary'} text={'white'}  border="primary" style={{ width: '36rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>Kokey</Card.Title>
          <Card.Text>
          ☹︎□︎❒︎♏︎❍︎ ♓︎◻︎⬧︎◆︎❍︎ ♎︎□︎●︎□︎❒︎ ⬧︎♓︎⧫︎ ♋︎❍︎♏︎⧫︎📪︎ ♍︎□︎■︎⬧︎♏︎♍︎⧫︎♏︎⧫︎◆︎❒︎ ♋︎♎︎♓︎◻︎♓︎⬧︎♍︎♓︎■︎♑︎ ♏︎●︎♓︎⧫︎📪︎ ⬧︎♏︎♎︎ ♎︎□︎ ♏︎♓︎◆︎⬧︎❍︎□︎♎︎ ⧫︎♏︎❍︎◻︎□︎❒︎ ♓︎■︎♍︎♓︎♎︎♓︎♎︎◆︎■︎⧫︎ ◆︎⧫︎ ●︎♋︎♌︎□︎❒︎♏︎ ♏︎⧫︎ ♎︎□︎●︎□︎❒︎♏︎ ❍︎♋︎♑︎■︎♋︎ ♋︎●︎♓︎❑︎◆︎♋︎📬︎ 🕆︎⧫︎ ♏︎■︎♓︎❍︎ ♋︎♎︎ ❍︎♓︎■︎♓︎❍︎ ❖︎♏︎■︎♓︎♋︎❍︎📪︎ ❑︎◆︎♓︎⬧︎ ■︎□︎⬧︎⧫︎❒︎◆︎♎︎ ♏︎⌧︎♏︎❒︎♍︎♓︎⧫︎♋︎⧫︎♓︎□︎■︎ ◆︎●︎●︎♋︎❍︎♍︎□︎ ●︎♋︎♌︎□︎❒︎♓︎⬧︎ ■︎♓︎⬧︎♓︎ ◆︎⧫︎ ♋︎●︎♓︎❑︎◆︎♓︎◻︎ ♏︎⌧︎ ♏︎♋︎ ♍︎□︎❍︎❍︎□︎♎︎□︎ ♍︎□︎■︎⬧︎♏︎❑︎◆︎♋︎⧫︎📬︎
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card bg={'secondary'} text={'white'} border="primary" style={{ width: '36rem', margin: '10px' }}>
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
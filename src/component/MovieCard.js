import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function MovieCard({ mov }) {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={mov.image} alt=""/>
        <Card.Body>
          <Card.Title>{mov.name}</Card.Title>
          
          <Card.Text>
          {mov.date} <br/>
           {mov.type}  <br/>
           {mov.seasons}  <br/>
           {mov.rating}  <br/>
           {mov.description}
          </Card.Text>
          <Button variant="primary">Play</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default MovieCard

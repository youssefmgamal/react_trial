import "./App.css";
import Name from './name';
import Price from './price';
import Description from './description';
import Img from './img';
import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Card style={{ width: '18rem', backgroundColor:'grey'}} className='card'>
      <Img />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Price /></ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Img from "./img";
import products from "./products";
import "./App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function App() {
  return (
    <React.Fragment>
      <div className="App">
        {products.map((product) => (
        <Card
          style={{ width: "18rem", backgroundColor: "grey" }}
          className="card"
        >
          <Img image = {product.image} />
          <Card.Body>
            <Card.Title>
              <Name name ={product.name}/>
            </Card.Title>
            <Card.Text>
              <Description description ={product.description} />
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Price price = {product.price}/>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;

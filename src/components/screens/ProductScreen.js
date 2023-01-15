import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import products from "../../products";
import Rating from "../Rating";

function ProductScreen(match) {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"f8e825"}
              ></Rating>
            </ListGroup.Item>

            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>

            <ListGroupItem>Description : {product.description}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price : </Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status : </Col>
                  <Col>
                    {product.workersActive > 0? "Avaliable" : "Not Available"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
               
                  <Button className="btn-block" disabled={product.workersActive===0} type='button'>Add to Cart</Button>
                  
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {product.name}
    </div>
  );
}

export default ProductScreen;

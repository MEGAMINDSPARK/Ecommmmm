import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useCart } from "./CartContext";

export default function ProductList() {
  const [arr, setArr] = useState("");
  const [prod, setProd] = useState([]);

  const { addToCart } = useCart();

  const setCart = (product, index) => {
    const newProd = {
      title: product.title,
      url: product.imageUrl,
      price: product.price,
      id: product.index,
      quantity: 3
    };
    addToCart(newProd);
  };

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
    }
  ];


  return (
    <Container>
      <Row>
        {productsArr.map((product, index) => (
          <Col md={6} key={index}>
            <Card className="mb-2 m-auto mt-2" style={{ maxWidth: "250px" }}>
              <Card.Img
                src={product.imageUrl}
                style={{ maxHeight: "200px" }}
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <p>Price: ${product.price}</p>
                <Button onClick={() => setCart(product, index)}>
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import "./Cart.css";
import { useCart } from "./CartContext";

function Cart(props) {
  const { prod } = useCart();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link
        variant="primary"
        href="#cart"
        className="cart-holder"
        onClick={handleShow}
      >
        Cart
        <span className="cart-number">{prod.length}</span>
      </Nav.Link>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {prod.map((item, index) => (
            <div key={index}>
              <img
                style={{ width: "60px", borderRadius: "10px" }}
                src={item.url}
                alt="imag"
              />
              <span>
                {" "}
                {item.title} - ${item.price} Quantity= {item.quantity}
              </span>
              <hr />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <p>
            Total: $
            {prod.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <Button variant="primary">PURCHASE</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;

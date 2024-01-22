import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="custom-navbar" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/store" className="nav-link">
            Store
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>

      <Cart />
    </Navbar>
  );
}


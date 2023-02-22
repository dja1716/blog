import React from "react";
import { Col, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <Container className="align-item-center">
        <Col sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col sm={6} className="text-center text-sm-end"></Col>
      </Container>
    </footer>
  );
}

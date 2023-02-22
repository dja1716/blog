import React from "react";
import { Col, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <Container className="align-item-center">
        <Col sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col sm={12} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="">
              <img src={navIcon1} />
            </a>
            <a href="">
              <img src={navIcon2} />
            </a>
            <a href="">
              <img src={navIcon3} />
            </a>
          </div>
          <p>CopyRight 2023. All Right Reserved by Hyeon Um</p>
        </Col>
      </Container>
    </footer>
  );
}

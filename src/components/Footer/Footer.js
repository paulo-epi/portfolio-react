import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import './Footer.css';

const Footer = () => (
  <section>
    <Container fluid className="footer">
      <Row>
        <Col md={4}>
          <h3> Created by Paul Petit</h3>
        </Col>
        <Col md={4}>
          <h3>© {new Date().getFullYear()} Paul Petit</h3>
        </Col>
        <Col md={4} className="footer-icons">
          <a
            href="https://www.linkedin.com/in/paul-julien-petit/"
            target="_blank"
            rel="noreferrer"
            className="icons"
          ><AiFillLinkedin /></a>
          <a
            href="https://github.com/paulo-epi"
            target="_blank"
            rel="noreferrer"
            className="icons"
          ><AiFillGithub /></a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import TextWritter from "./TypeWritter";

import aboutImg from "../../assets/images/pp.png";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="header-header">
              <h1>I'm Paul, a Full Stack and Mobile Developer</h1>
              <p>Welcome to my portfolio, you will be able to learn more about me here!</p>
              <div className="text-writter">
                <TextWritter />
              </div>
            </Col>
            <Col md={5} className="content-section offset-ml-1">
              <Row className="info-section">
                <Col>
                  <div className="info-block">
                    <h2>About me</h2>
                    <p>I'm currently in a Study Abroad Program in Engineering and Computer Science at Dublin City University. Click below if you want to learn more about me!</p>
                    <a href="/about">Learn more <span className="arrow">→</span></a>
                  </div>
                  <div className="info-block">
                    <h2>My experiences</h2>
                    <p>If you'd like to find out more about my background, my professional experiences and some of my projects, click for details.</p>
                    <a href="/experiences">Browse experiences <span className="arrow">→</span></a>
                  </div>
                </Col>
              </Row>
              <div className="follow-section">
                <h2>Follow me</h2>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/paul-julien-petit/"
                    target="_blank"
                    rel="noreferrer"
                    className="icons linkedin-icon"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://github.com/paulo-epi"
                    target="_blank"
                    rel="noreferrer"
                    className="icons github-icon"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="background-image-wrapper">
          <img src={aboutImg} alt="Paul Petit" className="img-fluid" style={{ maxHeight: "690px" }} />
        </div>
      </Container>
    </section>
  );
};

export default Home;

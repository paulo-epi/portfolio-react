import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import my_skills from "./skills";

import aboutImg from "../../assets/images/pp.png";
import frontImg from "../../assets/images/frontend.png";
import backImg from "../../assets/images/backend.png";
import mobileImg from "../../assets/images/mobile.png";
import "./About.css";

const About = () => {
  const skills = my_skills;

  return (
    <section>
      <Container fluid className="about-section" id="about">
        <Container className="about-content">
          <Col md={12} className="about-header">
            <h1>About Me</h1>
          </Col>
          <Row>
            <Col md={6} className="left-section d-flex justify-content-center">
              <img src={aboutImg} alt="About" />
            </Col>
            <Col md={6} className="right-section">
              <div className="about-container">
                <h2>
                  Embark on a Journey Through Pixels and Lines
                </h2>
              </div>
              <p>
                I'm Paul, a Full Stack and Mobile Developer. Creativity and adaptability thrive in an international
                and multicultural environment. My attributes include open-mindedness, multitasking, pugnacity, rigor,
                good interpersonal skills, team spirit, and the ability to analyze and synthesize.
              </p>
              <p>
                I'm passionate about Full Stack, Front-end, and Mobile development, as well as UI/UX design.
              </p>
            </Col>
          </Row>
          <Col md={12} className="services-section">
            <h2>What Services I'm Providing</h2>
            <Row>
              <Col md={4} className="service">
                <img src={frontImg} alt="Front End Development" />
                <h3>Front-end Development</h3>
                <p>Designing and developing user interfaces for websites and applications.</p>
                <a href="/experiences">Read more</a>
              </Col>
              <Col md={4} className="service">
                <img src={backImg} alt="Back End Development" />
                <h3>Back-end Development</h3>
                <p>Building and maintaining server-side applications and databases.</p>
                <a href="/experiences">Read more</a>
              </Col>
              <Col md={4} className="service">
                <img src={mobileImg} alt="Mobile Development" />
                <h3>Mobile Development</h3>
                <p>Creating mobile applications for iOS and Android devices.</p>
                <a href="/experiences">Read more</a>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col>
              <h2 className="skill-title">Professional <strong>Skillset</strong></h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {skills.map((skill) => (
              <SkillCard
                title={skill.title}
                img={skill.img}
                text={skill.text}
                key={skill.id}
              />
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default About;

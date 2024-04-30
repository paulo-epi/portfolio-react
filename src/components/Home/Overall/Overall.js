import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CV from '../../../assets/CV_Paul_PETIT.pdf';
import './Overall.css';

const Overall = () => {
  return (
    <section>
      <Container fluid className="overall-section" id='overall'>
        <Container className='overall-content'>
          <Row>
            <Col md={6} className="left-section">
              <h2>
                Experienced Full Stack Developer and Master's Student in Computer Science
              </h2>
              <p>
                Creativity and adaptability in an international and multicultural environment. Open-mindedness,
                multitasking, pugnacity, rigor, good interpersonal skills, team spirit, ability to analyze and synthesize.
              </p>
              <a href="/about">More about me <span className="arrow">→</span></a>
            </Col>
            <Col md={6} className="right-section">
              <p>
                I'm passionate about Full Stack, Front-end and Mobile development as well as UI/UX.
              </p>
              <a href={CV} download="CV_Paul_PETIT.pdf" className="primary_btn">
                <span>
                  Download CV
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Overall;

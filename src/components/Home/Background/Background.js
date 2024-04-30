import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Background.css';

const Background = () => {
  return (
    <section>
      <Container fluid className="background-section" id="background">
        <Container className="background-content">
          <Row>
            <Col md={6} className="left-section">
              <h2>
                My experiences and skills
              </h2>
              <p>
                As you explore my career path, you'll discover a rich tapestry of diverse experiences and unique skills.
                Each position I've held has not only honed my technical abilities, but also sculpted my problem-solving and
                creative thinking skills. Whether leading innovative projects or collaborating in dynamic teams, my career
                path is a testament to my adaptability and commitment to excellence.
              </p>
              <a href="about">More about my experiences <span className="arrow">→</span></a>
            </Col>
            <Col md={6} className="right-section">
              <div className="stats-container">
                <div className="stat">
                  <span className="number">4</span>
                  <span className="description">
                    Years of
                    <br />
                    experience
                  </span>
                </div>
                <div className="stat">
                  <span className="number">100+</span>
                  <span className="description">
                    Successful
                    <br />
                    projects
                  </span>
                </div>
              </div>
              <p>
                These experiences have not only shaped my professional identity, they have also enabled me to acquire a set of
                versatile skills, ready to take on new challenges.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Background;

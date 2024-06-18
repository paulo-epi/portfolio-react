import React from "react";
import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SkillCard = ({ title, img, text }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={2}>
      <Card className="skill">
        <div>
          <img src={img} alt={title} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;

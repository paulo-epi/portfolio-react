import React from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Experiences.css";

const CompanyBlockLeft = ({ title, subtitle, description, imgSrc }) => {
  return (
    <Row className="company-block company-block-reverse">
      <Col md={5}>
        <div className="company-logo">
          <img src={imgSrc} alt={title} />
        </div>
      </Col>
      <Col md={6} className="company-info-left">
        <h2>{title}</h2>
        <span className="line"></span>
        <h4>{subtitle}</h4>
        <ul>
          {description.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

CompanyBlockLeft.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default CompanyBlockLeft;
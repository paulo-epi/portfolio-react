import React from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Experiences.css";
import { AiFillGithub } from "react-icons/ai";

const CompanyBlockRight = ({ title, subtitle, description, imgSrc, link }) => {
  return (
    <Row className="company-block">
      <Col md={6} className="company-info">
        <h2>{title}</h2>
        <span className="line"></span>
        <h4>{subtitle}</h4>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="icons github-icon"
          >
            <AiFillGithub />
          </a>
        )}
      </Col>
      <Col md={5}>
        <div className="company-logo">
          <img src={imgSrc} alt={title} />
        </div>
      </Col>
    </Row>
  );
};

CompanyBlockRight.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default CompanyBlockRight;

import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineExperiment,
  AiOutlineMail,
} from "react-icons/ai";
import "./Navbar.css";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, setNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className='container'>
        <Navbar.Brand href="/" className="d-flex text-uppercase fw-bold">
          Paul Petit
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  scrollToTop();
                }}
                style={{ marginBottom: "2px" }}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="about"
                onClick={() => {
                  updateExpanded(false);
                  scrollToTop();
                }}
                style={{ marginBottom: "2px" }}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="experiences"
                onClick={() => {
                  updateExpanded(false);
                  scrollToTop();
                }}
                style={{ marginBottom: "2px" }}
              >
                <AiOutlineExperiment /> Experiences
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='/#contact'
                onClick={() => updateExpanded(false)}
                style={{ marginBottom: "2px" }}
              >
                <AiOutlineMail /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

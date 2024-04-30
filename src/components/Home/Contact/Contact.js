import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Container className="contact-content">
          <Row className="row">
            <div className="section_heading text-center mb-5">
              <h2>Contact Me</h2>
            </div>
            <Col md={7}>
              <form action="" method="post" className="row" id="contactForm" noValidate="novalidate">
                <div className="name-input">
                  <div className="form-group">
                    <input id="fname" name="name" placeholder="First Name" onFocus={() => { }} onBlur={() => { }} className="form-control" required="" type="text" />
                  </div>
                </div>

                <div className="name-input">
                  <div className="form-group">
                    <input id="lname" name="name" placeholder="Last Name" onFocus={() => { }} onBlur={() => { }} className="form-control" required="" type="text" />
                  </div>
                </div>

                <div className="form-group">
                  <input id="email" name="email" placeholder="Your email address" onFocus={() => { }} onBlur={() => { }} className="form-control" required="" type="email" />
                </div>

                <div className="form-group">
                  <input id="subject" name="subject" placeholder="Subject" onFocus={() => { }} onBlur={() => { }} className="form-control" required="" type="text" />
                </div>

                <div className="form-group">
                  <textarea id="message" className="form-control" name="message" placeholder="Message" onFocus={() => { }} onBlur={() => { }} required cols="30" rows="5"></textarea>
                </div>
                <div className="col-lg-12">
                  <button className="primary_btn" type="submit" value="submit">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </Col>
            <Col md={4} className="info-content">
              <h4 className="mb-4">Contact Info</h4>
              <AiOutlineHome className="info-icons" />
              <div className="info_item">
                <div className="info_text">
                  <h6>Dublin, Ireland</h6>
                  <p>Ossory Rd, East Wall, Dublin, D03 A038, Ireland</p>
                </div>
              </div>
              <LuPhone className="info-icons" />
              <div className="info_item">
                <div className="info_text">
                  <h6><a href="tel:+33675145232">+33 6 75 14 52 32</a></h6>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <AiOutlineMail className="info-icons" />
              <div className="info_item">
                <div className="info_text">
                  <h6><a href="mailto:paul.petit88@gmail.com" target="_blank" rel="noopener noreferrer">paul.petit88@gmail.com</a></h6>
                  <p>Send me your query anytime!</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contact;

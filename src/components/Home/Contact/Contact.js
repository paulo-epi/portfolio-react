import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    from_email: "",
    subject: "",
    body: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required.";
      }
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        // Send the form data to your backend
        axios.post('https://server-nodejs.paul-petit.fr/send-email', formData)
          .then(response => {
            alert("Email Sent Successfully!");
          })
          .catch(error => console.log(error));
        // Optionally, reset the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          from_email: "",
          subject: "",
          body: ""
        });
      } catch (error) {
        console.error('Error sending email:', error);
        // Optionally, display an error message to the user
      }
    }
  };

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Container className="contact-content">
          <Row className="row">
            <div className="section_heading text-center mb-5">
              <h2>Contact Me</h2>
            </div>
            <Col md={7}>
              <form
                className="row"
                id="contactForm"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="name-input">
                  <div className="form-group">
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                      required
                      type="text"
                    />
                    {formErrors.firstName && (
                      <span className="error">{formErrors.firstName}</span>
                    )}
                  </div>
                </div>

                <div className="name-input">
                  <div className="form-group">
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                      required
                      type="text"
                    />
                    {formErrors.lastName && (
                      <span className="error">{formErrors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <input
                    id="from_email"
                    name="from_email"
                    placeholder="Your email address"
                    value={formData.from_email}
                    onChange={handleChange}
                    className="form-control"
                    required
                    type="email"
                  />
                  {formErrors.from_email && (
                    <span className="error">{formErrors.from_email}</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                    type="text"
                  />
                  {formErrors.subject && (
                    <span className="error">{formErrors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    id="body"
                    className="form-control"
                    name="body"
                    placeholder="Message"
                    value={formData.body}
                    onChange={handleChange}
                    required
                    cols="30"
                    rows="5"
                  ></textarea>
                  {formErrors.body && (
                    <span className="error">{formErrors.body}</span>
                  )}
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

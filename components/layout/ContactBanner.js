import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import styles from "./contactbanner.module.css";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

const ContactBanner = () => {
  return (
    <>
      <section className={styles.contactbanner}>
        <Container className="py-5">
          <Row className="py-5">
            <Col lg="6" md="6" sm="12" xs="12" xxl="6">
              <h2 className={styles.whitecontact}>Get In Touch</h2>
              <p className={styles.whitecontactsub}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12" xxl="6"></Col>
          </Row>
        </Container>
      </section>

      <section className={styles.contactformarea}>
        <Container>
          <Row>
            <Col
              lg="8"
              md="8"
              sm="12"
              xs="12"
              xxl="8"
              className={styles.whitearea}
            >
              <h4 className={styles.sendhead}>Send a Message</h4>
              <Form className={styles.contactform}>
                <Row className="mb-3">
                  <Col lg="6" md="6" sm="12" xs="12" xxl="6">
                    <FormGroup>
                      <Input
                        id="firstname"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12" xxl="6">
                    <FormGroup>
                      <Input
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="6" md="6" sm="12" xs="12" xxl="6">
                    <FormGroup>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12" xxl="6">
                    <FormGroup>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="12" md="12" sm="12" xs="12" xxl="12">
                    <FormGroup>
                      <Input id="slect-service" name="select" type="select">
                        <option value="trends">
                          What Service do you Require?
                        </option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="Four">Four</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="12" md="12" sm="12" xs="12" xxl="12">
                    <FormGroup>
                      <Input
                        id="textareacontact"
                        name="textarea"
                        type="textarea"
                        placeholder="How can we Help?"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="6" md="6" sm="12" xs="12" xxl="6">
                    <FormGroup>
                      <Input
                        name="submit"
                        value="Send Message"
                        type="submit"
                        className={styles.submitcontact}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col
              lg="4"
              md="4"
              sm="12"
              xs="12"
              xxl="4"
              className={styles.darkarea}
            >
              <h4 className={styles.darkhead}>Contact Info</h4>
              <div className={styles.contact_phoneicon_bx}>
                <div className={styles.iconarea}>
                  <BsFillTelephoneFill />
                </div>
                <div className="icon-content-area">
                  <p>+123 456 7890</p>
                </div>
              </div>

              <div className={styles.contact_emailicon_bx}>
                <div className={styles.iconarea}>
                  <BsFillEnvelopeFill />
                </div>
                <div className="icon-content-area">
                  <p>info@xyz.com</p>
                </div>
              </div>
              <div className={styles.maparea}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.6618256473!2d76.84966030460818!3d28.423187826026158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1657714678864!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" loading="lazy"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactBanner;

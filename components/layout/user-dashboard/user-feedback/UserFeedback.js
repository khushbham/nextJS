import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
import Image from "next/image";
import styles from "./userfeedback.module.css";


const UserFeedback = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Container fluid className="pb-5 pt-3">
        <Row>
          <Col lg={8} md={8} xs={12} sm={12}>
            <Card className={styles.feedback_section}>
              <CardBody>
                <Row className={styles.feedback_section_row}>
                  <Col lg={8} md={6} xs={12} sm={12}>
                    <CardTitle tag="h3">Have some feedback?</CardTitle>
                    <CardText>
                      Let us know what you want to see in the User Dashboard!
                    </CardText>
                  </Col>
                  <Col lg={4} md={6} xs={12} sm={12}>
                    <Button color="primary" onClick={toggle} className={styles.suggestion_buttons}>
                      Give Feedback or Suggesstions
                    </Button>
                  </Col>
                </Row>

                <Modal isOpen={modal} toggle={toggle} className={styles.suggestion_feedback_modal}>
                  <ModalHeader toggle={toggle} className={styles.suggestion_feedback_modal_header}>
                    Do you have suggestions for dashboard features? Let us know!
                  </ModalHeader>
                  <ModalBody className={styles.suggestion_feedback_modal_body}>
                    <Form className={styles.feedback_form}>
                      <FormGroup>
                        <Input
                          id="feedback-email"
                          name="feedback-email"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          id="feedback-message"
                          name="text"
                          type="textarea"
                          placeholder="Type your message and include a number if you want a call"
                        />
                      </FormGroup>

                      <Button type="submit" className={styles.suggestion_feedback_modal_send_button}>Send</Button>
                    </Form>
                  </ModalBody>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} md={6} xs={12} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default UserFeedback;
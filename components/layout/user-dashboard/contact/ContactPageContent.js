import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import styles from "./contact.module.css";
import UserStats from "../RightSidebar/UserStats";
import {contactUs} from "../../../../redux/action/frontend";
import { useDispatch } from "react-redux";
// import TopViewedCategories from "../RightSidebar/TopViewedCategories";

const ContactPageContent = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    var formData = {
      message : message
    }
    if(formData.message.trim() != ""){
      dispatch(contactUs(formData)).then(res => {
        if(res && res.success){
          setMessage("")
        }
      })
    }
  }
  return (
    <>
      <Container fluid className="mt-5 mb-5">
        <Row className={styles.contact_area_row}>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Form className={styles.contact_area} onSubmit={e => submitForm(e)}>
              <div className={styles.contact_header}>
                <h3>
                  <strong>Contact Us</strong>
                </h3>
              </div>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Enter something"
                  type="textarea"
                  style={{height:"150px"}}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" className={styles.contact_submit}>Submit</Button>
              </FormGroup>
            </Form>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <UserStats />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPageContent;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import styles from "./forgot.module.css";
import { forgotPassword } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router from "next/router";
const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: ""
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email != "") {
      dispatch(forgotPassword(formData)).then((res) => {
        if (res && res.success) {
          Router.push(`/otp-verify/${res.data}`);
        }
      });
    }
  };
  return (
    <>
      <Container className="my-5 py-5">
        <Row>
          <Col lg={2} md={2} xs={12} sm={12} xl={2} xxl={2}></Col>
          <Col lg={8} md={8} xs={12} sm={12} xl={8} xxl={8}>
            <Card className={styles.forgotform}>
              <CardTitle tag="h3">Forgot Password</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut onsequatur.
              </CardText>
              <CardBody className={styles.forgotcardbody}>
                <Form className="forgot-frm" onSubmit={e => handleSubmit(e)}>
                  <Row>
                    <Col lg={12} md={12} xs={12} sm={12} xl={12} xxl={12}>
                      <FormGroup>
                        <Input
                          id="email-phone"
                          name="email"
                          placeholder="Email"
                          onChange={e => onChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} md={4} xs={12} sm={12} xl={4} xxl={4}>
                      <FormGroup>
                        <Input type="submit" className={styles.forgotbutton} value="Send Email">
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row> 
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col lg={2} md={2} xs={12} sm={12} xl={2} xxl={2}></Col>
        </Row>
      </Container>
    </>
  );
};
export default ForgotPasswordForm;

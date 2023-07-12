import React, { useState } from "react";
import {
  Container,
  Row,
  Nav,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import Link from "next/link";
import styles from "./otp.module.css";

import { verifyOtp } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router from "next/router";
const OtpForm = (props) => {
  const dispatch = useDispatch();
  console.log(props.userId);
  const [formData, setFormData] = useState({
    userId: props.userId,
    otp: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var newObject = {};
    newObject.userId = props.userId;
    newObject.otp = formData.otp;
    if (newObject.userId != "" && newObject.otp != "") {
      dispatch(verifyOtp(newObject)).then((res) => {
        if (res && res.success) {
          Router.push(`/change-password/${props.userId}/${res.data.otptoken}`);
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
            <Card className={styles.otpform}>
              <CardTitle tag="h3">Verify OTP</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut onsequatur.
              </CardText>
              <CardBody className={styles.otpcardbody}>
                <Form className="forgot-frm" onSubmit={e => handleSubmit(e)}>
                  <Row>
                    <Col lg={12} md={12} xs={12} sm={12} xl={12} xxl={12}>
                      <FormGroup>
                        <Input type="number" id="otp" name="otp" onChange={e => onChange(e)} placeholder="Enter OTP" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className={styles.rightresend}>
                    <Col>
                      <FormGroup>
                        <Link href="/">Resend OTP</Link>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} md={4} xs={12} sm={12} xl={4} xxl={4}>
                      <FormGroup>
                        <Input type="submit" className={styles.otpbutton} value="Verify OTP"> 
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
export default OtpForm;

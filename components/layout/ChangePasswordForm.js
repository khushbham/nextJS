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
import styles from "./changepass.module.css";

import { changePassword } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router from "next/router";
const ChangePasswordForm = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userId: props.userId,
    otptoken: props.otptoken,
    password: "",
    confirm_password: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var newObject = {};
    newObject.userId = props.userId;
    newObject.otptoken = props.otptoken;
    newObject.password = formData.password;
    newObject.confirm_password = formData.confirm_password;
    if (
      newObject.userId != "" &&
      newObject.otptoken != "" &&
      newObject.password != ""
    ) {
      dispatch(changePassword(newObject)).then((res) => {
        if (res && res.success) {
          Router.push(`/signin`);
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
            <Card className={styles.changepassform}>
              <CardTitle tag="h3">Change Password</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut onsequatur.
              </CardText>
              <CardBody className={styles.changepasscardbody}>
                <Form className="forgot-frm" onSubmit={(e) => handleSubmit(e)}>
                  <Row>
                    <Col lg={12} md={12} xs={12} sm={12} xl={12} xxl={12}>
                      <FormGroup>
                        <Input
                          type="password"
                          id="new-password"
                          name="password"
                          placeholder="New Password"
                          onChange={(e) => onChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} xs={12} sm={12} xl={12} xxl={12}>
                      <FormGroup>
                        <Input
                          type="password"
                          id="change-password"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          onChange={(e) => onChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} md={4} xs={12} sm={12} xl={4} xxl={4}>
                      <FormGroup>
                        <Input
                          type="submit"
                          className={styles.changepassbutton}
                          value="Update Password"
                        ></Input>
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
export default ChangePasswordForm;

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
  Alert,
} from "reactstrap";
import Link from "next/link";
import styles from "./signin.module.css";
import { signIn } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
const SignInForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { redirect_success } = router.query;
  console.log(redirect_success);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    visibility: false,
    message: "",
    className: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage({
      visibility: false,
      message: "",
      className: "",
    });
    if (formData.email != "" && formData.password != "") {
      dispatch(signIn(formData)).then((res) => {
        if (res && res.success) {
          if (redirect_success) {
            Router.push(redirect_success);
          } else {
            Router.push("/user-panel");
          }
        } else if (res && !res.success) {
          setErrorMessage({
            visibility: true,
            message: res[0].msg,
            className: "danger",
          });
        }
      });
    }
  };
  return (
    <>
      <Container className="my-5 py-5">
        <style
          dangerouslySetInnerHTML={{
            __html: ".toast.show {\n    margin-top: 5px;\n}",
          }}
        />
        <Row>
          <Col lg={2} md={2} xs={12} sm={12} xl={2} xxl={2}></Col>
          <Col lg={8} md={8} xs={12} sm={12} xl={8} xxl={8}>
            <Card className={styles.signinform}>
              <CardTitle tag="h3">Login</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut onsequatur.
              </CardText>
              <CardBody className={styles.signincardbody}>
                {errorMessage.visibility && (
                  <Alert color={errorMessage.className}>
                    {errorMessage.message}
                  </Alert>
                )}
                <Form className="sign-up-frm" onSubmit={(e) => handleSubmit(e)}>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="email-phone"
                          name="email"
                          placeholder="Email"
                          required
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="Password"
                          name="password"
                          placeholder="Password"
                          type="password"
                          required
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      {/* <FormGroup check>
                        <Input type="checkbox" /> Login with OTP
                      </FormGroup> */}
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                      xl={6}
                      xxl={6}
                      className={styles.textright}
                    >
                      <Link href="/forgot-password">Forgot Password ?</Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          type="submit"
                          className={styles.signinbutton}
                          value="Login"
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
export default SignInForm;

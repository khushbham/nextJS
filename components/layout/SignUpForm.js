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
  Input,
} from "reactstrap";
import styles from "./signup.module.css";
import { signUp } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router from "next/router";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const { username, email, phone, password, confirm_password } = formData;

  // const [errormessageforusername, seterrormessageforusername] = useState ('');
  // const [errormessageforemail, seterrormessageforemail] = useState ('');
  // const [errormessageforphone, seterrormessageforphone] = useState ('');
  // const [errormessageforpassword, seterrormessageforpassword] = useState ('');
  // const [errormessageforconfirmpassword, seterrormessageforconfirmpassword] = useState ('');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData))
      .then((res) => {
        // seterrormessageforusername('')
        // seterrormessageforemail('')
        // seterrormessageforphone('')
        // seterrormessageforpassword('')
        // seterrormessageforconfirmpassword('')
        if (res && res.success) {
          console.log("User added");
          setFormData({
            username: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
          });
          Router.push("/");
        } else {
          // res.forEach(err => {
          //     if (err.param == 'username'){
          //             seterrormessageforusername(err.msg);
          //     }
          //     if(err.param == "email"){
          //         seterrormessageforemail(err.msg)
          //     }
          //     if(err.param == "phone"){
          //       seterrormessageforphone(err.msg)
          //   }
          //     if(err.param == "password"){
          //         seterrormessageforpassword(err.msg)
          //     }
          //     if(err.param == "confirm_password"){
          //         seterrormessageforconfirmpassword(err.msg)
          //     }
          // });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className="my-5 py-5">
        <Row>
          <Col lg={2} md={2} xs={12} sm={12} xl={2} xxl={2}></Col>
          <Col lg={8} md={8} xs={12} sm={12} xl={8} xxl={8}>
            <Card className={styles.signupform}>
              <CardTitle tag="h3">Register User</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut onsequatur.
              </CardText>
              <CardBody className={styles.signupcardbody}>
                <Form className="sign-up-frm" onSubmit={(e) => onSubmit(e)}>
                  <Row>
                    <Col lg={12} md={12} xs={12} sm={12} xl={12} xxl={12}>
                      <FormGroup>
                        <Input
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={onChange}
                        />
                      </FormGroup>
                      {/* {
                         {errormessageforusername} != "" ? 
                           <p style={{color: "red"}} >{errormessageforusername}</p> : ""
                        } */}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={onChange}
                        />
                      </FormGroup>
                      {/* {
                         {errormessageforemail} != "" ? 
                           <p style={{color: "red"}} >{errormessageforemail}</p> : ""
                        } */}
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Contact No."
                          value={phone}
                          onChange={onChange}
                        />
                      </FormGroup>
                      {/* {
                         {errormessageforphone} != "" ? 
                           <p style={{color: "red"}} >{errormessageforphone}</p> : ""
                        } */}
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="Password"
                          name="password"
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={onChange}
                        />
                      </FormGroup>
                      {/* {
                         {errormessageforpassword} != "" ? 
                           <p style={{color: "red"}} >{errormessageforpassword}</p> : ""
                        } */}
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="Confirm-Password"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          type="password"
                          value={confirm_password}
                          onChange={onChange}
                        />
                      </FormGroup>
                      {/* {
                         {errormessageforconfirmpassword} != "" ? 
                           <p style={{color: "red"}} >{errormessageforconfirmpassword}</p> : ""
                        } */}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          type="submit"
                          className={styles.signupbutton}
                          value="Sign Up"
                        ></Input>
                      </FormGroup>
                      {/* <p style={{color: "red"}} >{errormessageforconfirmpassword}</p> */}
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

export default SignUpForm;

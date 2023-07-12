import React, { useEffect, useState } from "react";
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
import { accountVerification } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router from "next/router";

const VerifyAccount = ({ verification_link }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (verification_link) {
      dispatch(
        accountVerification({
          verify_link: verification_link,
        })
      )
        .then((res) => {
          if (res && res.success) {
            setMessage("Your account has been successfully verified.");
          } else if (res && !res.success) {
            console.log(res);
            res.forEach((element) => {
              setMessage(element.msg);
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage("Invalid link");
        });
    }
  }, [verification_link]);
  return (
    <>
      <Container className="my-5 py-5">
        <Row>
          <Col lg={2} md={2} xs={12} sm={12} xl={2} xxl={2}></Col>
          <Col lg={8} md={8} xs={12} sm={12} xl={8} xxl={8}>
            <Card className={styles.signupform}>
              <CardTitle tag="h3">Account Verification</CardTitle>
              <CardText>{message}</CardText>
            </Card>
          </Col>
          <Col lg={2} md={2} xs={12} sm={12} xl={2} xxl={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default VerifyAccount;

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
} from "reactstrap";
import Image from "next/image";
import styles from "./pageheader.module.css";

const PageHeader = () => {
  return (
      <Container fluid className={`${styles.page_header_main_area} py-3`}>
        <Row className={`${styles.page_header_row} mt-3`}>
          <Col lg={12} md={12} xs={12} sm={12}>
            <h5>Profile Completion</h5> 
          </Col>
        </Row>
      </Container>
  );
};

export default PageHeader;

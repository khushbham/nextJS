import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";
import dynamic from "next/dynamic";
import styles from "./usertrends.module.css";
import Image from "next/image";
import imagetrendsone from "../../../../public/images/keywords.jpg";
const TrafficPerCategory = dynamic(() => import("./TrafficPerCategory"), {
  ssr: false,
});

const TopTenTrends= dynamic(() => import("./TopTenTrends"), {
  ssr: false,
});

const UserTrendsContent = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          <Col lg={12} md={12} xs={12} sm={12}>
            <div className={styles.top_trends_heading}>
              <h3>
                <strong>Trends</strong>
              </h3>
            </div>
          </Col>
        </Row>

        <Row className="mt-3 mb-5">
          {/* <Col lg={12} md={12} xs={12} sm={12}>
            <h5 className={styles.traffic_per_categoryhead}>
              Trends Per Category
            </h5>
          </Col> */}

          <Col lg={6} md={12} xs={12} sm={12}>
          <h5 className={styles.traffic_per_categoryhead}>
              Top 10 Trends
            </h5>
            <TopTenTrends />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            <h5 className={styles.traffic_per_categoryhead}>
              Trends Per Category
            </h5>
            <TrafficPerCategory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserTrendsContent;

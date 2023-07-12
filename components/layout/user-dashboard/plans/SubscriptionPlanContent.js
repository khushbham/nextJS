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
import styles from "./subscriptionplans.module.css";
import { BsCheck2Circle } from "react-icons/bs";

const SubscriptionPlanContent = () => {
  return (
    <div>
      <Container className={styles.main_content_plansarea}>
        <Row>
          <Col lg={12} md={12} xs={12} sm={12}>
            <div className={styles.subscription_heading}>
              <h3>
                <strong>Get a Subscription and Save More!!</strong>
              </h3>
            </div>
            <Row className={styles.subtitle_plansarea}>
              <Col lg={2} md={2} xs={12} sm={12}></Col>
              <Col lg={8} md={8} xs={12} sm={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col lg={2} md={2} xs={12} sm={12}></Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3 mb-5 pb-5">
          <Col lg={4} md={4} xs={12} sm={12}>
            <Card className={styles.plans_cards_section}>
              <div className={styles.pink_header_section}>
                <h3 className={styles.pricing_header}>Basic</h3>
                <h2 className={styles.pricing_money}>
                  $250<span className={styles.pricing_money_span}>/month</span>
                </h2>
              </div>
              <CardBody>
                {/* <CardTitle tag="h5">Card title</CardTitle> */}
                <CardSubtitle className="mb-3 text-muted mt-2" tag="h6">
                  For Businesses that are just starting out
                </CardSubtitle>
                {/* <div className={`${styles.get_a_quote_btn_area} mb-5`}>
                  <Button className={styles.get_a_quote_btn}>
                    Get a Quote
                  </Button>
                </div> */}

                <div className={styles.main_plancontent_area}>
                  <h6>For Companies with</h6>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> 1 User per account
                  </div>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Unlimited events
                  </div>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Registration Forms
                  </div>
                </div>
                <div className={styles.plan_disabled_button}>
                  <Button disabled>
                    Plan Subscribed
                  </Button>{" "}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} md={4} xs={12} sm={12}>
            <Card className={styles.plans_cards_section}>
              <div className={styles.green_header_section}>
                <h3 className={styles.pricing_header}>Premium</h3>
                <h2 className={styles.pricing_money}>
                  $950<span className={styles.pricing_money_span}>/month</span>
                </h2>
              </div>
              <CardBody>
                {/* <CardTitle tag="h5">Card title</CardTitle> */}
                <CardSubtitle className="mb-3 text-muted mt-2" tag="h6">
                  Select monthly revenue band of your business to calculate the
                  price
                </CardSubtitle>
                {/* <div className={`${styles.get_a_quote_btn_area} mb-5`}>
                  <Button className={styles.get_a_quote_btn}>
                    Get a Quote
                  </Button>
                </div> */}

                <div className={styles.main_plancontent_area}>
                  <h6>For Companies with</h6>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Revenue band from $500.00 and up to
                    $10,000.00
                  </div>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Registration Forms
                  </div>
                  {/* <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Registration Forms
                  </div> */}
                </div>
                <div className={styles.getaquote_button}>
                  <Button>Buy Now</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} md={4} xs={12} sm={12}>
            <Card className={styles.plans_cards_section}>
              <div className={styles.violet_header_section}>
                <h3 className={styles.pricing_header}>Standard</h3>
                <h2 className={styles.pricing_money}>
                  $550<span className={styles.pricing_money_span}>/month</span>
                </h2>
              </div>
              <CardBody>
                {/* <CardTitle tag="h5">Card title</CardTitle> */}
                <CardSubtitle className="mb-3 text-muted mt-2" tag="h6">
                  For Businesses that are just starting out
                </CardSubtitle>
                {/* <div className={`${styles.get_a_quote_btn_area} mb-5`}>
                  <Button className={styles.get_a_quote_btn}>
                    Get a Quote
                  </Button>
                </div> */}

                <div className={styles.main_plancontent_area}>
                  <h6>For Companies with</h6>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Unlimited Users
                  </div>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Unlimited events
                  </div>
                  <div
                    className={`${styles.check_area} d-flex align-items-center`}
                  >
                    <BsCheck2Circle /> Unlimited Registration Forms
                  </div>
                </div>
                <div className={styles.getaquote_button}>
                  <Button>Buy Now</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubscriptionPlanContent;

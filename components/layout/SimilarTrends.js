import React, { useState, useEffect } from "react";
import styles from "./similartrends.module.css";
import { Container, Row, Col, Card } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import populartrendpic from "../../public/images/Layer 33.webp";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiFillDislike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

const SimilarTrends = () => {
  return (
    <Container fluid className="mt-5 pt-5 mb-5 pb-5">
      <Row>
        <Col lg="12" md="12" sm="12" col="12">
          <h2 className={styles.similartrendsheading}>Similar trends of your interest</h2>
        </Col>
      </Row>

      <Row className="mt-3 mb-5 newtrends">
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.similartrendswrap}>
              <div className={styles.similartrendsimageouter}>
                <Image
                  className={styles.similartrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.similartrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.similartrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.similartrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.similartrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.similartrendsactions}>
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.similartrendsactions}>
                      <AiFillDislike /> 4.3k
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.similartrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.similartrendswrap}>
              <div className={styles.similartrendsimageouter}>
                <Image
                  className={styles.similartrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.similartrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.similartrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.similartrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.similartrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.similartrendsactions}>
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.similartrendsactions}>
                      <AiFillDislike /> 4.3k
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.similartrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.similartrendswrap}>
              <div className={styles.similartrendsimageouter}>
                <Image
                  className={styles.similartrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.similartrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.similartrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.similartrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.similartrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.similartrendsactions}>
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.similartrendsactions}>
                      <AiFillDislike /> 4.3k
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.similartrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.similartrendswrap}>
              <div className={styles.similartrendsimageouter}>
                <Image
                  className={styles.similartrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.similartrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.similartrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.similartrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.similartrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.similartrendsactions}>
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.similartrendsactions}>
                      <AiFillDislike /> 4.3k
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.similartrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>

        </Row>
    </Container>
  );
};

export default SimilarTrends;

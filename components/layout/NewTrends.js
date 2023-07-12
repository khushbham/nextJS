import React, { useState, useEffect } from "react";
import styles from "./newtrends.module.css";
import { Container, Row, Col, Card } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import populartrendpic from "../../public/images/Layer 33.webp";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiFillDislike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

const NewTrends = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col lg="12" md="12" sm="12" col="12">
          <h2 className={styles.newtrendsheading}>New Trends</h2>
        </Col>
      </Row>

      <Row className="mt-3 mb-5 newtrends">
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.newtrendsWrap}>
              <div className={styles.newtrendsimageouter}>
                <Image
                  className={styles.newtrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.newtrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.newtrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.newtrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.newtrendscat}>Commercial s</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.newtrendsactions}>
                      {/* {" "} */}
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.newtrendsactions}>
                      {/* {" "} */}
                      <AiFillDislike /> 4.3k{" "}
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.newtrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.newtrendsWrap}>
              <div className={styles.newtrendsimageouter}>
                <Image
                  className={styles.newtrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.newtrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.newtrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.newtrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.newtrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.newtrendsactions}>
                      {/* {" "} */}
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.newtrendsactions}>
                      {/* {" "} */}
                      <AiFillDislike /> 4.3k{" "}
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.newtrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.newtrendsWrap}>
              <div className={styles.newtrendsimageouter}>
                <Image
                  className={styles.newtrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.newtrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.newtrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.newtrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.newtrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.newtrendsactions}>
                      {/* {" "} */}
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.newtrendsactions}>
                      {/* {" "} */}
                      <AiFillDislike /> 4.3k{" "}
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.newtrendsbookmarkicon}>
                <a href="#">
                  <BiBookmark />
                </a>
              </div>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
          <Link href={`/trend/`}>
            <Card className={styles.newtrendsWrap}>
              <div className={styles.newtrendsimageouter}>
                <Image
                  className={styles.newtrendscardImage}
                  src={populartrendpic}
                  alt="inspire"
                  width={500}
                  height={400}
                />
                <div className={styles.newtrendsfireicon}>
                  <img src="../images/Fire.svg" alt="icon" />
                  <span className={styles.newtrendsfiretext}>
                    <p>50%</p>
                  </span>
                </div>
              </div>
              <Row className="mt-2">
                <Col lg="12" md="12" sm="6" xs="12" col="12">
                  <h3 className={styles.newtrendstitle}>
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className={styles.newtrendscat}>Commercial Cultures</p>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12" col="12">
                  <div className="d-flex justify-content-end">
                    <span className={styles.newtrendsactions}>
                      <BsSuitHeartFill />
                      442
                    </span>
                    <span className={styles.newtrendsactions}>
                      <AiFillDislike /> 4.3k
                    </span>
                  </div>
                </Col>
              </Row>
              <div className={styles.newtrendsbookmarkicon}>
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

export default NewTrends;

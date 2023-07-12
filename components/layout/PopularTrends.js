import React, { useState, useEffect } from "react";
import styles from "./populartrends.module.css";
import { Container, Row, Col, Card} from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import populartrendpic from "../../public/images/Layer 33.webp";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiFillDislike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

const PopularTrends = () => {
  return (
    <Container fluid className="pt-5 pb-5">
        <Row className="mt-5">
        <Col lg="12" md="12" sm="12" col="12">
          <h2 className={styles.populartrendsheading}>Popular Trends</h2>
        </Col>
      </Row>

      <Row className="mt-3 newtrends">
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
                <Link href={`/trend/`}>
                  <Card className={styles.trendsWrap}>
                    <div className={styles.popularimageouter}>
                      <Image
                        className={styles.popularcardImage}
                        src={populartrendpic}
                        alt="inspire"
                        width={500}
                        height={400}
                      />
                      <div className={styles.popularfireicon}>
                      <img src="../images/Fire.svg" alt="icon" />
                      <span className={styles.popularfiretext}>
                        <p>50%</p>
                      </span>
                    </div>
                    </div>
                    <Row className="mt-2">
                      <Col lg="12" md="12" sm="6" xs="12" col="12">
                        <h3 className={styles.populartrendstitle}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.populartrendscat}>Commercial Cultures</p>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12" col="12">
                        <div className="d-flex justify-content-end">
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <BsSuitHeartFill />
                            442
                          </span>
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <AiFillDislike /> 4.3k{" "}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <div className={styles.popularbookmarkicon}>
                      <a href="#">
                        <BiBookmark />
                      </a>
                    </div>
                   
                  </Card>
                </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
                <Link href={`/trend/`}>
                  <Card className={styles.trendsWrap}>
                    <div className={styles.popularimageouter}>
                      <Image
                        className={styles.popularcardImage}
                        src={populartrendpic}
                        alt="inspire"
                        width={500}
                        height={400}
                      />
                      <div className={styles.popularfireicon}>
                      <img src="../images/Fire.svg" alt="icon" />
                      <span className={styles.popularfiretext}>
                        <p>50%</p>
                      </span>
                    </div>
                    </div>
                    <Row className="mt-2">
                      <Col lg="12" md="12" sm="6" xs="12" col="12">
                        <h3 className={styles.populartrendstitle}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.populartrendscat}>Commercial Cultures</p>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12" col="12">
                        <div className="d-flex justify-content-end">
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <BsSuitHeartFill />
                            442
                          </span>
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <AiFillDislike /> 4.3k{" "}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <div className={styles.popularbookmarkicon}>
                      <a href="#">
                        <BiBookmark />
                      </a>
                    </div>
                   
                  </Card>
                </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
                <Link href={`/trend/`}>
                  <Card className={styles.trendsWrap}>
                    <div className={styles.popularimageouter}>
                      <Image
                        className={styles.popularcardImage}
                        src={populartrendpic}
                        alt="inspire"
                        width={500}
                        height={400}
                      />
                      <div className={styles.popularfireicon}>
                      <img src="../images/Fire.svg" alt="icon" />
                      <span className={styles.popularfiretext}>
                        <p>50%</p>
                      </span>
                    </div>
                    </div>
                    <Row className="mt-2">
                      <Col lg="12" md="12" sm="6" xs="12" col="12">
                        <h3 className={styles.populartrendstitle}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.populartrendscat}>Commercial Cultures</p>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12" col="12">
                        <div className="d-flex justify-content-end">
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <BsSuitHeartFill />
                            442
                          </span>
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <AiFillDislike /> 4.3k{" "}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <div className={styles.popularbookmarkicon}>
                      <a href="#">
                        <BiBookmark />
                      </a>
                    </div>
                   
                  </Card>
                </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12" className="mt-4">
                <Link href={`/trend/`}>
                  <Card className={styles.trendsWrap}>
                    <div className={styles.popularimageouter}>
                      <Image
                        className={styles.popularcardImage}
                        src={populartrendpic}
                        alt="inspire"
                        width={500}
                        height={400}
                      />
                      <div className={styles.popularfireicon}>
                      <img src="../images/Fire.svg" alt="icon" />
                      <span className={styles.popularfiretext}>
                        <p>50%</p>
                      </span>
                    </div>
                    </div>
                    <Row className="mt-2">
                      <Col lg="12" md="12" sm="6" xs="12" col="12">
                        <h3 className={styles.populartrendstitle}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.populartrendscat}>Commercial Cultures</p>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12" col="12">
                        <div className="d-flex justify-content-end">
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <BsSuitHeartFill />
                            442
                          </span>
                          <span className={styles.popularactions}>
                            {/* {" "} */}
                            <AiFillDislike /> 4.3k{" "}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <div className={styles.popularbookmarkicon}>
                      <a href="#">
                        <BiBookmark />
                      </a>
                    </div>
                   
                  </Card>
                </Link>
        </Col>
        









        {/* <Col lg="3" md="4" sm="6" col="12">
          <Link href={`/trend/`}>
            <Card className={styles.trendsWrap}>
              <Image src={populartrendpic} alt="column" />
              <h3 className={styles.populartrendstitle}>
                Lorem ipsum dolor sit amet
              </h3>
              <p className={styles.populartrendscat}>Commercial Cultures</p>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12">
          <Link href={`/trend/`}>
            <Card className={styles.trendsWrap}>
              <Image src={populartrendpic} alt="column" />
              <h3 className={styles.populartrendstitle}>
                Lorem ipsum dolor sit amet
              </h3>
              <p className={styles.populartrendscat}>Commercial Cultures</p>
            </Card>
          </Link>
        </Col>
        <Col lg="3" md="4" sm="6" col="12">
          <Link href={`/trend/`}>
            <Card className={styles.trendsWrap}>
              <Image src={populartrendpic} alt="column" />
              <h3 className={styles.populartrendstitle}>
                Lorem ipsum dolor sit amet
              </h3>
              <p className={styles.populartrendscat}>Commercial Cultures</p>
            </Card>
          </Link>
        </Col> */}
      </Row>

    </Container>
  );
};

export default PopularTrends;

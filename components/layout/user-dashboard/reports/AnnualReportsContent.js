import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormText,
  FormFeedback,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import styles from "./annualreports.module.css";
import Image from "next/image";
import Link from "next/link";
import trendsreportimage from "../../../../public/images/s-3.jpg";
import { MdViewModule, MdViewList } from "react-icons/md";
import reportimage from "../../../../public/images/value2.jpg";

const AnnualReportsContent = () => {
  const [gridselected, setGridSelected] = useState("col-xl-3 col-lg-4 col-md-6 col-12");
  const [isgridActive, setGridActive] = useState("gridreportrow");
  const [cardclass, setCardClass] = useState("gridreportcards");

  const toggleGridClass = () => {
    setGridSelected("col-xl-3 col-lg-4 col-md-6 col-12");
    setGridActive("gridreportrow");
    setCardClass("gridreportcards");
  };

  const toggleListClass = () => {
    setGridSelected("col-lg-12 col-md-12 col-12");
    setGridActive("listreportrow");
    setCardClass("listreportcards");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="text-center mt-5">
              <h3>
                <strong>Annual Reports</strong>
              </h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="py-3">
            <Button className={styles.gridreportbutton} onClick={toggleGridClass}>
              <MdViewModule />
            </Button>
            <Button className={styles.listreportbutton} onClick={toggleListClass}>
              <MdViewList />
            </Button>
          </Col>
        </Row>

        <Row className={`${isgridActive} mb-3`}>
          <Col className={gridselected + " mt-2 mb-2"}>
            {/* <Link href="/"> */}
              <Card className={cardclass}>
                <div className="reportsimage_section">
                  <Image
                    className={styles.annualreports_Image}
                    src={reportimage}
                    alt="inspire"
                    width={500}
                    height={400}
                  />
                </div>
                <CardBody className={styles.annualreportsbody}>
                  <CardTitle
                    className={`${styles.annualreports_title} mb-3`}
                    tag="h4"
                  >
                    2022 Trend Report
                  </CardTitle>
                  <h5 className={`${styles.annualreports_subtitle} mb-3`}>
                    100 Pages of Consumer Insights
                  </h5>
                  <p className={styles.annualreports_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Button className={styles.download_reports_button}>
                    Download Report
                  </Button>
                </CardBody>
              </Card>
            {/* </Link> */}
          </Col>
          {/* ))} */}
          {/* {apiHit && data.length == 0 && (
            <Col>
              <Alert color="primary">Opps ! No Search Result Found ..</Alert>
            </Col>
          )} */}
        </Row>

        {/* <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row className={`${styles.annual_reports_cards} mt-3 mb-3`}>
              <Col xl={2} lg={3} md={4} sm={12} xs={12}>
                <div className={styles.reports_image_sect}>
                  <Image src={trendsreportimage} />
                </div>
              </Col>
              <Col xl={10} lg={9} md={8} sm={12} xs={12}>
                <div className={styles.annual_reports_details}>
                  <h3 className={`${styles.annualreports_title} mb-3`}>
                    2022 Trend Report
                  </h3>
                  <h5 className={`${styles.annualreports_subtitle} mb-3`}>
                    100 Pages of Consumer Insights
                  </h5>
                  <p className={styles.annualreports_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Button className={styles.download_reports_button}>
                    Download Report
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className={`${styles.annual_reports_cards} mt-3 mb-3`}>
              <Col xl={2} lg={3} md={4} sm={12} xs={12}>
                <div className={styles.reports_image_sect}>
                  <Image src={trendsreportimage} />
                </div>
              </Col>
              <Col xl={10} lg={9} md={8} sm={12} xs={12}>
                <div className={styles.annual_reports_details}>
                  <h3 className={`${styles.annualreports_title} mb-3`}>
                    2021 Trend Report
                  </h3>
                  <h5 className={`${styles.annualreports_subtitle} mb-3`}>
                    1045 Pages of Consumer Insights
                  </h5>
                  <p className={styles.annualreports_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Button className={styles.download_reports_button}>
                    Download Report
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className={`${styles.annual_reports_cards} mt-3 mb-3`}>
              <Col xl={2} lg={3} md={4} sm={12} xs={12}>
                <div className={styles.reports_image_sect}>
                  <Image src={trendsreportimage} />
                </div>
              </Col>
              <Col xl={10} lg={9} md={8} sm={12} xs={12}>
                <div className={styles.annual_reports_details}>
                  <h3 className={`${styles.annualreports_title} mb-3`}>
                    2020 Trend Report
                  </h3>
                  <h5 className={`${styles.annualreports_subtitle} mb-3`}>
                    600 Pages of Consumer Insights
                  </h5>
                  <p className={styles.annualreports_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Button className={styles.download_reports_button}>
                    Download Report
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default AnnualReportsContent;

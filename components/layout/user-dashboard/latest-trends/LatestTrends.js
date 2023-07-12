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
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Link from "next/link";
import { BsSuitHeartFill, BsArrowRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import styles from "./latestdashtrends.module.css";
import cardimageone from "../../../../public/images/1.1.jpg";
import cardimagetwo from "../../../../public/images/2.2.jpg";
import cardimagethree from "../../../../public/images/3.3.jpg";
import cardimagefour from "../../../../public/images/4.4.jpg";
import cardimagefive from "../../../../public/images/5.5.jpg";
import cardimagesix from "../../../../public/images/6.6.jpg";
import fireicon from "../../../../public/images/Fire.svg";
import trendoneimage from "../../../../public/images/Your-Image-0.png";
import trendtwoimage from "../../../../public/images/Your-Image-1.png";
import trendthreeimage from "../../../../public/images/Your-Image-2.png";
import trendfourimage from "../../../../public/images/Your-Image-3.png";
import trendfiveimage from "../../../../public/images/Your-Image-4.png";
import TopViewedCategories from "../RightSidebar/TopViewedCategories";
import RecentViewed from "../../RecentViewed";

const LatestTrends = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col sm={12} xs={12} md={12} lg={12}>
            <h2 className={styles.trends_dash_head}>Recent Viewed Trends</h2>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
            <div className={styles.main_container_cards}>
              <Row className={styles.main_dash_trends_info}>
                <Col xs={12} sm={12} lg={4} md={6} xxl={4} className="mb-3">
                  <Link className={styles.link_cardsinfo} href="/">
                    <Card className={styles.main_cards_dash_wrapper}>
                      <div className={styles.card_image_section}>
                        <Image
                          className="w-100"
                          src={cardimageone}
                          alt="Image One"
                        />
                        <div className={styles.card_fireicon}>
                          <Image src={fireicon} alt="icon" />
                          <span className={styles.card_firetext}>
                            <p>10%</p>
                          </span>
                        </div>
                      </div>
                      <div>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
                            <CardBody
                              className={`${styles.trends_dash_cards} p-0`}
                            >
                              <CardTitle tag="h5">Men in Rugby</CardTitle>
                              <ul className={`${styles.category_card_info}`}>
                                <li>Sports</li>
                              </ul>
                            </CardBody>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xxl={5}>
                            <div
                              className={`${styles.cards_icon_box_text} d-flex`}
                            >
                              <span className={styles.card_hearticontext}>
                                <BsSuitHeartFill />
                                412
                              </span>
                              <span className={styles.card_eyeicontext}>
                                <FaEye />3
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col xs={12} sm={12} lg={4} md={6} xxl={4} className="mb-3">
                  <Card className={styles.main_cards_dash_wrapper}>
                    <div className={styles.card_image_section}>
                      <Image
                        className="w-100"
                        src={cardimagetwo}
                        alt="Image Two"
                      />
                      <div className={styles.card_fireicon}>
                        <Image src={fireicon} alt="icon" />
                        <span className={styles.card_firetext}>
                          <p>10%</p>
                        </span>
                      </div>
                    </div>

                    <div>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
                          <CardBody
                            className={`${styles.trends_dash_cards} p-0`}
                          >
                            <CardTitle tag="h5">Benefits of Avacado</CardTitle>
                            <ul className={`${styles.category_card_info}`}>
                              <li>Sports</li>
                            </ul>
                          </CardBody>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={5}>
                          <div
                            className={`${styles.cards_icon_box_text} d-flex`}
                          >
                            <span className={styles.card_hearticontext}>
                              <BsSuitHeartFill />
                              412
                            </span>
                            <span className={styles.card_eyeicontext}>
                              <FaEye />3
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} sm={12} lg={4} md={6} xxl={4} className="mb-3">
                  <Card className={styles.main_cards_dash_wrapper}>
                    <div className={styles.card_image_section}>
                      <Image
                        className="w-100"
                        src={cardimagethree}
                        alt="Image Three"
                      />
                      <div className={styles.card_fireicon}>
                        <Image src={fireicon} alt="icon" />
                        <span className={styles.card_firetext}>
                          <p>10%</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
                          <CardBody
                            className={`${styles.trends_dash_cards} p-0`}
                          >
                            <CardTitle tag="h5">Men in Rugby</CardTitle>
                            <ul className={`${styles.category_card_info}`}>
                              <li>Sports</li>
                            </ul>
                          </CardBody>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={5}>
                          <div
                            className={`${styles.cards_icon_box_text} d-flex`}
                          >
                            <span className={styles.card_hearticontext}>
                              <BsSuitHeartFill />
                              412
                            </span>
                            <span className={styles.card_eyeicontext}>
                              <FaEye />3
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} sm={12} lg={4} md={6} xxl={4} className="mb-3">
                  <Card className={styles.main_cards_dash_wrapper}>
                    <div className={styles.card_image_section}>
                      <Image
                        className="w-100"
                        src={cardimagefour}
                        alt="Image Four"
                      />
                      <div className={styles.card_fireicon}>
                        <Image src={fireicon} alt="icon" />
                        <span className={styles.card_firetext}>
                          <p>10%</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
                          <CardBody
                            className={`${styles.trends_dash_cards} p-0`}
                          >
                            <CardTitle tag="h5">Men in Rugby</CardTitle>
                            <ul className={`${styles.category_card_info}`}>
                              <li>Sports</li>
                            </ul>
                          </CardBody>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={5}>
                          <div
                            className={`${styles.cards_icon_box_text} d-flex`}
                          >
                            <span className={styles.card_hearticontext}>
                              <BsSuitHeartFill />
                              412
                            </span>
                            <span className={styles.card_eyeicontext}>
                              <FaEye />3
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} sm={12} lg={4} md={6} xxl={4} className="mb-3">
                  <Card className={styles.main_cards_dash_wrapper}>
                    <div className={styles.card_image_section}>
                      <Image
                        className="w-100"
                        src={cardimagefive}
                        alt="Image Five"
                      />
                      <div className={styles.card_fireicon}>
                        <Image src={fireicon} alt="icon" />
                        <span className={styles.card_firetext}>
                          <p>10%</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
                          <CardBody
                            className={`${styles.trends_dash_cards} p-0`}
                          >
                            <CardTitle tag="h5">Men in Rugby</CardTitle>
                            <ul className={`${styles.category_card_info}`}>
                              <li>Sports</li>
                            </ul>
                          </CardBody>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={5}>
                          <div
                            className={`${styles.cards_icon_box_text} d-flex`}
                          >
                            <span className={styles.card_hearticontext}>
                              <BsSuitHeartFill />
                              412
                            </span>
                            <span className={styles.card_eyeicontext}>
                              <FaEye />3
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} sm={12} lg={4} md={6} xxl={4} className="mb-3">
                  <Card className={styles.main_cards_dash_wrapper}>
                    <div className={styles.card_image_section}>
                      <Image
                        className="w-100"
                        src={cardimagesix}
                        alt="Image Six"
                      />
                      <div className={styles.card_fireicon}>
                        <Image src={fireicon} alt="icon" />
                        <span className={styles.card_firetext}>
                          <p>10%</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
                          <CardBody
                            className={`${styles.trends_dash_cards} p-0`}
                          >
                            <CardTitle tag="h5">Men in Rugby</CardTitle>
                            <ul className={`${styles.category_card_info}`}>
                              <li>Sports</li>
                            </ul>
                          </CardBody>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={5}>
                          <div
                            className={`${styles.cards_icon_box_text} d-flex`}
                          >
                            <span className={styles.card_hearticontext}>
                              <BsSuitHeartFill />
                              412
                            </span>
                            <span className={styles.card_eyeicontext}>
                              <FaEye />3
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} xs={12} md={12} lg={4} xxl={4}>
            <TopViewedCategories />
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={6} xs={12} sm={12}>
            <Card className={styles.feedback_section}>
              <CardBody>
                <Row className={styles.feedback_section_row}>
                  <Col lg={8} md={6} xs={12} sm={12}>
                    <CardTitle tag="h3">Have some feedback?</CardTitle>
                    <CardText>
                      Let us know what you want to see in the User Dashboard!
                    </CardText>
                  </Col>
                  <Col lg={4} md={6} xs={12} sm={12}>
                    <Button color="primary" onClick={toggle} className={styles.suggestion_buttons}>
                      Give Feedback or Suggesstions
                    </Button>
                  </Col>
                </Row>

                <Modal isOpen={modal} toggle={toggle} className={styles.suggestion_feedback_modal}>
                  <ModalHeader toggle={toggle} className={styles.suggestion_feedback_modal_header}>
                    Do you have suggestions for dashboard features? Let us know!
                  </ModalHeader>
                  <ModalBody className={styles.suggestion_feedback_modal_body}>
                    <Form className={styles.feedback_form}>
                      <FormGroup>
                        <Input
                          id="feedback-email"
                          name="feedback-email"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          id="feedback-message"
                          name="text"
                          type="textarea"
                          placeholder="Type your message and include a number if you want a call"
                        />
                      </FormGroup>

                      <Button type="submit" className={styles.suggestion_feedback_modal_send_button}>Send</Button>
                    </Form>
                  </ModalBody>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} md={6} xs={12} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestTrends;

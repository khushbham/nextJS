import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Image from "next/image";
import rocketimage from "../../../../public/images/2rocket_red1.png";
import styles from "./pagecontent.module.css";
import { RiVipDiamondFill } from "react-icons/ri";
import UserStat from "../RightSidebar/UserStats";
import RecentViewed from "../../RecentViewed";
import TopViewedCategories from "../RightSidebar/TopViewedCategories";
import UserFeedback from "../user-feedback/UserFeedback";

const PageContent = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Container fluid>
        <Row className={`${styles.background_main_sect} mt-3`}>
          <Col lg={12} md={12} xs={12} sm={12}>
            <Card className={styles.colored_cards_info}>
              <CardBody className={styles.above_card_body}>
                <Row className={styles.above_cards}>
                  <Col lg={9} md={12} xs={12} sm={12}>
                    <div className={styles.side_title_above}>
                      <h4>
                        We bring you global consumer trends, insights, and
                        innovations to inspire and enable a better tomorrow.
                      </h4>
                    </div>
                  </Col>
                  <Col lg={3} md={12} xs={12} sm={12}>
                    <div className={styles.side_button_above}>
                      <Button
                        className={styles.bookdemo_button}
                        onClick={toggle}
                      >
                        Book a Demo
                      </Button>
                    </div>
                  </Col>
                </Row>
                {/* <div className={styles.above_cards}>
                  <div className={styles.side_title_above}>
                    <h4>
                      We bring you global consumer trends, insights, and
                      innovations to inspire and enable a better tomorrow.
                    </h4>
                  </div>
                  <div className={styles.side_button_above}>
                    <Button className={styles.bookdemo_button}>
                      Book a Demo
                    </Button>
                  </div>
                </div> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={8} md={12} xs={12} sm={12}>
            <Card className={styles.upper_card_dashboard}>
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={6} xs={12} sm={12}>
                    <CardBody>
                      <CardTitle className={styles.card_title_small}>
                        Create The Future
                      </CardTitle>
                      <CardSubtitle className={styles.card_title_large}>
                        Download Latest Trends Report
                      </CardSubtitle>
                      <Button className={styles.free_trend_repbtn}>
                        <span>
                          <RiVipDiamondFill />
                        </span>
                        Free Trend Report
                      </Button>
                    </CardBody>
                  </Col>
                  <Col lg={6} md={6} xs={12} sm={12}>
                    <div className={styles.rckt_img}>
                      <Image src={rocketimage} alt="Rocket" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
          <Col
            lg={4}
            md={12}
            xs={12}
            sm={12}
            className={styles.side_details_cards}
          >
            <UserStat />
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row>
          <Col lg={8} md={12} sm={12} xs={12}>
            <div className="recnt_user_views">
              <RecentViewed showExploreButton={false} onEmptyRecordShowThisSection={true}/>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <TopViewedCategories />
          </Col>
        </Row>
        {/* <LatestTrends /> */}
      </Container>
      <UserFeedback />

      <Modal isOpen={modal} toggle={toggle} className={styles.demo_modal}>
        <ModalHeader className={styles.demo_header} toggle={toggle}>
          Book a Demo
        </ModalHeader>
        <ModalBody>
          <Form className={styles.demo_form}>
            <FormGroup>
              <Label className="mb-0">Select Prefrences</Label>
            </FormGroup>
            <FormGroup check>
              <Input id="technology" name="check" type="checkbox" />
              <Label check for="technology">
                Technology
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="music" name="check" type="checkbox" />
              <Label check for="music">
                Music
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="cultures" name="check" type="checkbox" />
              <Label check for="cultures">
                Commercial Cultures
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="lifestyle" name="check" type="checkbox" />
              <Label check for="lifestyle">
                Lifestyle
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="popculture" name="check" type="checkbox" />
              <Label check for="popculture">
                Pop Culture
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="popculture" name="check" type="checkbox" />
              <Label check for="popculture">
                Sustainability
              </Label>
            </FormGroup>
            <FormGroup>
              <Input
                id="bookdemo-message"
                name="text"
                type="textarea"
                placeholder="Type your message"
              />
            </FormGroup>

            <Button type="submit" className={styles.demo_modal_send_button}>
              Send
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default PageContent;

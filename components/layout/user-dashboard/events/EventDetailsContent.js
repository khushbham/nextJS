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
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import styles from "./eventdetails.module.css";
import TopViewedCategories from "../RightSidebar/TopViewedCategories";
import UserStats from "../RightSidebar/UserStats";
import Image from "next/image";
import eventimage from "../../../../public/images/event-news.jpg";

const EventDetailsContent = () => {
  return (
    <>
      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col lg="1" md="1" sm="12" xs="12"></Col>
          <Col lg="10" md="10" sm="12" xs="12">
            <Card className={styles.main_event_cards}>
              {/* <div className="text-center">
                <h3>
                  <strong>Event Details</strong>
                </h3>
              </div> */}
              <div className={styles.event_background}>
                <Image src={eventimage} alt="Event Image" />
              </div>
              <CardBody>
                <Row className="mt-3">
                  <Col lg="8" md="8" sm="12" xs="12">
                  <h4 className={styles.main_event_labels}>Event Title:</h4>
                    <p>Event One</p>
                    <h3 className={`${styles.main_event_labels} mt-3 mb-3`}>
                      Description:
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.{" "}
                    </p>

                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis suscipit laboriosam,
                      nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                      eum iure reprehenderit qui in ea voluptate velit esse quam
                      nihil molestiae consequatur, vel illum qui dolorem eum
                      fugiat quo voluptas nulla pariatur
                    </p>

                    <h4 className={`${styles.main_event_labels} mt-3`}>
                      Organizer of the event:
                    </h4>
                    <p>Organizer name.</p>

                    <h4 className={`${styles.main_event_labels} mt-3`}>
                      Event Start Date:
                    </h4>
                    <p>12 Dec 2022</p>

                    <h4 className={`${styles.main_event_labels} mt-3`}>
                      Event End Date:
                    </h4>
                    <p>14 Dec 2022</p>

                    <h4 className={`${styles.main_event_labels} mt-3 mb-3`}>
                      Event Start Time:
                    </h4>
                    <p>10am</p>


                    <h4 className={`${styles.main_event_labels} mt-3 mb-3`}>
                      Event End Time:
                    </h4>
                    <p>12pm</p>


                  </Col>
                  <Col lg="4" md="4" sm="12" xs="12">
                    <h3 className={`${styles.main_event_labels} mb-3`}>
                      Event Location:
                    </h3>
                  

                    <h4 className={`${styles.main_event_labels} mt-3 mb-3`}>
                      Address:
                    </h4>
                    <p>Event Location</p>

                  </Col>
                </Row>
                {/* <Row>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>Event Title:</h4>
                    <p>Event One</p>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Organizer of the event:
                    </h4>
                    <p>Organizer name.</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>Event Type:</h4>
                    <p>Event type</p>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Event Location:
                    </h4>
                    <p>Event Location</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Event Start Date:
                    </h4>
                    <p>12 Dec 2022</p>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Event End Date:
                    </h4>
                    <p>14 Dec 2022</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Event Start Time:
                    </h4>
                    <p>10am</p>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Event End Time:
                    </h4>
                    <p>12pm</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="12" md="12" sm="12" xs="12">
                    <h4 className={styles.main_event_labels}>
                      Event Description:
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur
                    </p>
                  </Col>
                </Row> */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="1" md="1" sm="12" xs="12"></Col>
          {/* <Col lg="4" md="4" sm="12" xs="12">
            <TopViewedCategories />
            <div className="mt-5">
              <UserStats />
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default EventDetailsContent;

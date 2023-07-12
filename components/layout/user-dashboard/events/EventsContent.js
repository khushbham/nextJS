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
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "./events.module.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const EventsContent = () => {
  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  // handleEventClick = ({ event, el }) => {
  //   toggle();
  //   setModal({ event });
  // };

  return (
    <>
      <Row className={`${styles.events_calendar_area_row} mt-5 mb-5`}>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.events_calendar_area_colm}
        >
          <div className={styles.events_calendar_area}>
            <h3 className={styles.events_heading_area}>
              <strong>Events</strong>
            </h3>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              nowIndicator={true}
              headerToolbar={{
                start: "today prev next",
                end: "dayGridMonth dayGridWeek dayGridDay",
              }}
              // editable={true}
              // initialEvents={[{ title: "Keynote I/O 2022", start: new Date() }]}
              // eventClick={
              //   function(arg){
              //     alert(arg.event.title)
              //     alert(arg.event.start)
              //   }
              // }
              // eventClick={toggle}
              // eventContent={ViewEventContent}
              eventClick={function (info) {
                info.jsEvent.preventDefault();

                if (info.event.url) {
                  window.open(info.event.url);
                }
              }}
              events={[
                {
                  title: "Event 1",
                  date: "2022-12-13",
                  // start: "10:45:00",
                  // end: "12:45:00",
                  url: "events/event-details",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
                {
                  title: "Event 2",
                  date: "2022-12-15",
                  url: "events/event-details",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
                {
                  title: "Event 3",
                  date: "2022-12-18",
                  url: "events/event-details",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
                {
                  title: "Event 4",
                  date: "2022-12-20",
                  url: "events/event-details",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
                {
                  title: "Event 5",
                  date: "2022-12-22",
                  url: "events/event-details",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
                {
                  title: "Event 6",
                  date: "2022-12-24",
                  url: "events/event-details",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
                {
                  title: "Event 7",
                  date: "2022-12-27",
                  url: "https://www.nike.com/gb/",
                  backgroundColor: "#0000fe",
                  borderColor: "#0000fe",
                },
              ]}
            />
          </div>

          {/* <Modal
              isOpen={modal}
              toggle={toggle}
            >
              <ModalHeader toggle={toggle}>
                EVENT TITLE SHOULD GO HERE: {events.title}
              </ModalHeader>
              <ModalBody>
                <div>
                  EVENT INFO SHOULD GO HERE: {events.date}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Do Something</Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal> */}
        </Col>
      </Row>
    </>
  );
};

export default EventsContent;

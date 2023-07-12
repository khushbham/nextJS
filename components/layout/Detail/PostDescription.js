import React from "react";
import styles from "./Postdesc.module.css";
import { Row, Col, FormGroup, Input, Button } from "reactstrap";
const PostDescription = () => {
  return (
    <div className={styles.PostDescriptionWrap}>
      <div className={styles.cultureCampus}>
        <Row className="align-items-center">
          <Col lg="2" md="2" sm="6" col="12">
            <div className={styles.CulturefireIcon}>
              <div className={styles.imageOuter}>
                <img src="../images/Fire.svg" alt="icon" />
              </div>
              <span className={styles.fireText}>
                <p>72%</p>
              </span>
            </div>
          </Col>
          <Col lg="4" md="4" sm="6" col="12">
            <div className={styles.statesWrap}>
              <h1 className={styles.InsightsHead}>Culture Compass Insights</h1>
              <h3 className={styles.stateHead}>View States</h3>
              <ul>
                <li>
                  <b>Trending:</b>{" "}
                  <span className="viewList">Very New & Very Hot</span>
                </li>
                <li>
                  <b>Research:</b>{" "}
                  <span className="viewList">256 clicks in 6 hr</span>
                </li>
                <li>
                  <b>Interest:</b>
                  <span className="viewList">1 minutes</span>
                </li>
                <li>
                  <b>Concept:</b>{" "}
                  <span className="viewList">LUNO Front Cab Air Mattress</span>
                </li>
              
              </ul>
            </div>
          </Col>
          <Col lg="3" md="3" sm="12" col="12"></Col>
          <Col lg="3" md="3" sm="12" col="12">
            <img src="./images/insights.png" alt="graph" className="w-100" />
          </Col>
        </Row>
      </div>
      <p className={styles.subHeading}>
        So that's a header for you — with any luck if we've done our job
        correctly that will look pretty reasonable. Something a wise person once
        told me about typography is:
      </p>
      {/* trend card sec */}
      <Row className="align-items-center">
        <Col lg="8" sm="8" md="12" col="12">
          <div className={styles.CardsText}>
            <p>Overlooked Opportunities</p>
          </div>
        </Col>
        <Col lg="4" sm="4" md="12" col="12">
          <Button className={styles.downloadBtn}>DOWNLOAD TREND CARD</Button>
        </Col>
      </Row>
    </div>
  );
};

export default PostDescription;

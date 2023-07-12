import React from "react";
import style from "./review.module.css";
import { FaHeart } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { Row, Col } from "reactstrap";
const ReviewSec = () => {
  return (
    <div className="reviewWrap">
      <Row>
        <Col lg="12" md="12" sm="12" col="12">
          <Row>
            <Col lg="1" md="1" sm="12" col="12" className="text-center">
              <img
                src="/images/review1.png"
                alt="reviews"
                className={style.clientImg}
              />
            </Col>
            <Col lg="11" md="11" sm="12" col="12" className={style.reviewBorder}>
              <div className={style.addmore}>
                <h3 className={style.reviewhead}>
                  Truelock Alric{" "}
                  <span className={style.text}>· October 24, 2021 </span>
                </h3>
                <p>
                  <MdMoreHoriz />
                </p>
              </div>
              <p className={style.reviewtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                non turpis tellus. Duis sed efficitur mauris. Sed lobortis est
                dolor, eu commodo lorem egestas id. Mauris tincidunt justo ac
                est dictum bibendum. Duis blandit arcu eget odio venenatis
                imperdiet. Vivamus sed vehicula eros. In cursus auctor magna, in
                dictum sem sollicitudin sed.
              </p>
              <Row>
                <Col lg="6" md="6" sm="12" col="12">
                  <div className={style.icons}>
                    <div className="d-flex align-items-center">
                      <a href="#">
                        <FaHeart /> <span className={style.rating}>100</span>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <AiFillDislike />
                        <span className={style.rating}>0</span>
                      </a>
                    </div>
                  </div>
                </Col>

                <Col lg="6" md="6" sm="12" col="12" className="text-end">
                  <a href="#" className={style.replybtn}>
                    Reply
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className={style.rowOuter}>
            <Col lg="1" md="1" sm="12" col="12" className="text-center" >
              <img
                src="/images/review2.png"
                alt="reviews"
                className={style.clientImg}
              />
            </Col>
            <Col lg="11" md="11" sm="12" col="12">
              <div className={style.addmore}>
                <h3 className={style.reviewhead}>
                  Truelock Alric{" "}
                  <span className={style.text}>· October 24, 2021 </span>
                </h3>
                <p>
                  <MdMoreHoriz />
                </p>
              </div>
              <p className={style.reviewtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                non turpis tellus. Duis sed efficitur mauris. Sed lobortis est
                dolor, eu commodo lorem egestas id. Mauris tincidunt justo ac
                est dictum bibendum. Duis blandit arcu eget odio venenatis
                imperdiet. Vivamus sed vehicula eros. In cursus auctor magna, in
                dictum sem sollicitudin sed.
              </p>
              <Row>
                <Col lg="6" md="6" sm="12" col="12">
                  <div className={style.icons}>
                    <div className="d-flex align-items-center" >
                      <a href="#">
                        <FaHeart /> <span className={style.rating}>100</span>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <AiFillDislike />
                        <span className={style.rating}>0</span>
                      </a>
                    </div>
                  </div>
                </Col>

                <Col lg="6" md="6" sm="12" col="12" className="text-end">
                  <a href="#" className={style.replybtn}>
                    Reply
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default ReviewSec;

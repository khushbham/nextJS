import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./innovate.module.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import { connect } from "react-redux";
import { InspirationRecords } from "../../redux/action/frontend";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Spinner } from "reactstrap";

const Innovate = (props) => {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    props.InspirationRecordsData().then((res) => {
      //console.log(res);
      if (res && res.success) {
        setData(res.data);
        setShowLoader(false);
      }
    });
  }, []);
  return showLoader ? (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <Spinner animation="border" />
        </Col>
      </Row>
    </Container>
  ) : (
    <div className={styles.innovateSec}>
      <Container fluid>
        <Carousel
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          preventMovementUntilSwipeScrollTolerance={false}
          renderIndicator={false}
          swipeScrollTolerance={50}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className={styles.sliderbtns}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  zIndex: "9999",
                  left: "2rem",
                  background: "transparent",
                  border: "0",
                }}
              >
                <img src="../images/next.png" alt="arrow" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className={styles.sliderbtns}
                style={{
                  position: "absolute",
                  left: "0px",
                  zIndex: "9999",
                  bottom: "0",
                  border: "0",
                  background: "transparent",
                }}
              >
                <img src="../images/left-chevron.png" alt="arrow" />
              </button>
            )
          }
        >
          {data.length > 0 &&
            data.map((singleTrend, index) => (
              <Row className={styles.innnovateSlides} key={index}>
                <Col lg="6" md="6" sm="12" col="6">
                  <div className={styles.SlideLeftsec}>
                    <h1 className={styles.slideHead}>{singleTrend.title}</h1>
                    <div className="d-flex">
                      <span className={styles.icontext}>
                        {" "}
                        <BsSuitHeartFill />
                        {singleTrend.liketrends}
                      </span>
                      <span className={styles.icontext}>
                        {" "}
                        <FaEye />
                        {singleTrend.views_count_start_from}{" "}
                      </span>
                    </div>
                    <p className={styles.slideText}>
                      {singleTrend.sub_heading}
                    </p>
                    <Link
                      className={styles.sitebtn}
                      href={`/trend/${singleTrend.slug}`}
                    >
                      Continue Reading
                    </Link>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="12" col="6">
                  <div className={styles.innovateSliderWrapp}>
                    <img
                      src={singleTrend.featured_images[0]}
                      alt="innovate"
                      className={styles.SliderImg}
                    />
                    {/* <div className={styles.bookmarkIcon}>
                        <a href="#">
                          <BiBookmark />
                        </a>
                      </div> */}
                    <div className={styles.fireIcon}>
                      <img src="../images/Fire.svg" alt="icon" />
                      <span className={styles.fireText}>
                        <p>{Number(singleTrend.score) * 10}%</p>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
        </Carousel>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //data: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  InspirationRecordsData: () => dispatch(InspirationRecords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Innovate);

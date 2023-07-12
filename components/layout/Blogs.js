import React, { useState, useEffect } from "react";
import styles from "./blogs.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BiBookmark, BiBorderRadius } from "react-icons/bi";
import { Container, Card, CardImg, Row, Col, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { InspirationRecords } from "../../redux/action/frontend";
import Image from "next/image";
import Link from "next/link";
const Blogs = (props) => {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    props.InspirationRecordsData().then((res) => {
      //console.log(res);
      if (res && res.success) {
        setData(res.data.reverse());
        setShowLoader(false);
      }
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "50px",
    arrows: false,
    appendDots: (dots) => (
      <ul style={{ bottom: "-70px", left: "0", right: "0" }}>{dots}</ul>
    ),
    customPaging: (i) => (
      <div
        className="ft-slick__dots--custom"
        style={{
          width: "10px",
          height: "10px",
          background: "#0001f9",
          borderRadius: " 50% ",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return showLoader ? (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <Spinner animation="border" />
        </Col>
      </Row>
    </Container>
  ) : (
    <div className={styles.blogSection}>
      <Container fluid>
        <Row>
          <Slider className={styles.slideWrap} {...settings}>
            {data.length > 0 &&
              data.map((singleTrend, index) => (
                <Link href={`/trend/${singleTrend.slug}`}>
                  <Card className={styles.cradWrap} key={index}>
                    <div className={styles.imageOuter}>
                      <CardImg
                        className={styles.cardImage}
                        src={singleTrend.featured_images[0]}
                        alt="inspire"
                        top
                        width="100%"
                      />
                      <div className={styles.fireIcon}>
                        <img src="../images/Fire.svg" alt="icon" />
                        <span className={styles.fireText}>
                          <p>{singleTrend.score * 10}%</p>
                        </span>
                      </div>
                    </div>
                    <div className={styles.blogsContent}>
                      <Row className="mt-2">
                        <Col lg="12" md="12" sm="12" xs="12" col="12">
                          <h3 className={styles.cardHead}>
                            {singleTrend.title}
                          </h3>
                          <ul className={styles.categoryList}>
                            {singleTrend.category_ids.map((category, i) => (
                              <li className={styles.subheading} key={i}>
                                {" "}
                                {category.title}
                              </li>
                            ))}
                          </ul>
                        </Col>
                        <Col lg="12" md="12" sm="12" xs="12" col="12">
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
                        </Col>
                      </Row>
                    </div>
                    {/* <div className={styles.bookmarkIcon}>
                    <a href="#">
                      <BiBookmark />
                    </a>
                  </div> */}
                  </Card>
                </Link>
              ))}
          </Slider>
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

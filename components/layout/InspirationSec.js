import React, { useState, useEffect } from "react";
import styles from "./inspiration.module.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Container, Row, Col, Card, CardImg, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { InspirationRecords } from "../../redux/action/frontend";
import Image from "next/image";
import Link from "next/link";
const InspirationSec = (props) => {
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
  //   const imageLoader = ({ src, width, quality }) => {
  //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  //   }
  return showLoader ? (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <Spinner animation="border" />
        </Col>
      </Row>
    </Container>
  ) : (
    <div className={styles.InspirationSec}>
      <Container fluid>
        <Row>
          <Col lg="12" md="12" sm="12" col="12">
            <h2 className={styles.heading}>Your Daily Dose of Inspiration</h2>
          </Col>
        </Row>
        <Row className={styles.CardRows}>
          {data &&
            data.map((singleTrend, index) => (
              <div className={styles.inspireGallery} key={index}>
                <Link href={`/trend/${singleTrend.slug}`}>
                  <Card className={styles.cradWrap}>
                    <div className={styles.imageOuter}>
                      <Image
                        className={styles.cardImage}
                        src={singleTrend.featured_images[0]}
                        alt="inspire"
                        width={500}
                        height={400}
                      />
                      <div className={styles.fireIcon}>
                        <img src="../images/Fire.svg" alt="icon" />
                        <span className={styles.fireText}>
                          <p>{singleTrend.score * 10}%</p>
                        </span>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <Row className="mt-2">
                        <Col lg="12" md="12" sm="6" xs="12" col="12">
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
              </div>
            ))}
          <div className="text-center">
            <Link href="/search?s=">
              <a className={styles.exploreBtn}>Explore More</a>
            </Link>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InspirationSec);

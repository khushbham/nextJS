import React, { useState, useEffect } from "react";
import styles from "./inspiration.module.css";
import { Container, Row, Col, Card } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const RecentViewed = (props) => {
  const router = useRouter();
  const [recentViewedState, setRecentViewedState] = useState([]);
  const [showRecentViews, setShowRecentViews] = useState(true);
  const [applyCondition, setApplyCondition] = useState(false);
  useEffect(() => {
    if (props.dataLimit) {
      setApplyCondition(true);
    }
    var recentViewed = Cookies.get("recentViewed");
    if (recentViewed) {
      recentViewed = JSON.parse(recentViewed);
    } else {
      recentViewed = [];
    }
    setRecentViewedState(recentViewed);
  }, [router.asPath, showRecentViews]);
  useEffect(() => {
    setShowRecentViews(true);
  }, [router.asPath]);
  return (props.onEmptyRecordShowThisSection || recentViewedState.length > 0)  && (
    <div className={styles.InspirationSec}>
      <Container fluid>
        <Row>
          <Col lg="12" md="12" sm="12" col="12">
            <h2 className={styles.heading}>Recently Viewed Trends</h2>
          </Col>
        </Row>
        {applyCondition && (
          <Row className={styles.CardRows}>
            {recentViewedState &&
              recentViewedState.length > 0 &&
              recentViewedState.map(
                (singleTrend, index) =>
                  index < 5 && (
                    <div className={styles.inspireGallery} key={index}>
                      <Link href={`/trend/${singleTrend.slug}`}>
                        <Card className={styles.cradWrap}>
                          <div className={styles.imageOuter}>
                            <Image
                              className={styles.cardImage}
                              src={singleTrend.featured_images}
                              alt="inspire"
                              width={500}
                              height={400}
                            />
                            {/* <div className={styles.fireIcon}>
                        <img src="../images/Fire.svg" alt="icon" />
                        <span className={styles.fireText}>
                          <p>{singleTrend.score * 10}%</p>
                        </span>
                      </div> */}
                          </div>
                          <div className={styles.cardContent}>
                            <Row className="mt-2">
                              <Col lg="12" md="12" sm="12" xs="12" col="12">
                                <h3 className={styles.cardHead}>
                                  {singleTrend.title}
                                </h3>
                                {/* <ul className={styles.categoryList}>
                            {singleTrend.category_ids.map((category, i) => (
                              <li className={styles.subheading} key={i}>
                                {" "}
                                {category.title}
                              </li>
                            ))}
                          </ul> */}
                              </Col>
                              {/* <Col lg="12" md="12" sm="12" xs="12" col="12">
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
                        </Col> */}
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
                  )
              )}
            {recentViewedState && recentViewedState.length == 0 && (
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={styles.NoRecentView}
              >
                Recently Viewed Trends is a function which helps you keep track
                of your recent viewing trend history.
              </Col>
            )}
            {props.showExploreButton && recentViewedState.length > 5 && (
              <div className="text-center">
                <Link href="/for-you">
                  <a className={styles.exploreBtn}>Explore More</a>
                </Link>
              </div>
            )}
          </Row>
        )}
        {!applyCondition && (
          <Row className={styles.CardRows}>
            {recentViewedState &&
              recentViewedState.length > 0 &&
              recentViewedState.map((singleTrend, index) => (
                <div className={styles.inspireGallery} key={index}>
                  <Link href={`/trend/${singleTrend.slug}`}>
                    <Card className={styles.cradWrap}>
                      <div className={styles.imageOuter}>
                        <Image
                          className={styles.cardImage}
                          src={singleTrend.featured_images}
                          alt="inspire"
                          width={500}
                          height={400}
                        />
                      </div>
                      <div className={styles.cardContent}>
                        <Row className="mt-2">
                          <Col lg="12" md="12" sm="12" xs="12" col="12">
                            <h3 className={styles.cardHead}>
                              {singleTrend.title}
                            </h3>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            {recentViewedState && recentViewedState.length == 0 && (
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={styles.NoRecentView}
              >
                Recently Viewed Trends is a function which helps you keep track
                of your recent viewing trend history.
              </Col>
            )}
            {props.showExploreButton &&
              recentViewedState &&
              recentViewedState.length > 0 && (
                <div className="text-center">
                  <Link href="/for-you">
                    <a className={styles.exploreBtn}>Explore More</a>
                  </Link>
                </div>
              )}
          </Row>
        )}
      </Container>
    </div>
  );
};
export default RecentViewed;

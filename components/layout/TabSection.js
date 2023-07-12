import React, { useEffect, useState } from "react";
import styles from "./tab.module.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import {
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
  Spinner,
  Alert,
} from "reactstrap";
import Image from "next/image";
import { connect } from "react-redux";
import { categoryRecords } from "../../redux/action/frontend";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaWindowClose, FaSquare } from "react-icons/fa";

const TabSection = (props) => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [recentViewedState, setRecentViewedState] = useState([]);
  const [showRecentViews, setShowRecentViews] = useState(true);
  //console.log(router);
  useEffect(() => {
    props.categoryRecordsData().then((res) => {
      //console.log(res);
      if (res && res.success) {
        setData(res.data);
        setShowLoader(false);
      }
    });
  }, []);
  // useEffect(() => {
  //   var recentViewed = Cookies.get("recentViewed");
  //   if (recentViewed) {
  //     recentViewed = JSON.parse(recentViewed);
  //   } else {
  //     recentViewed = [];
  //   }
  //   setRecentViewedState(recentViewed);
  // }, [router.asPath, showRecentViews]);
  // useEffect(() => {
  //   setShowRecentViews(true);
  // }, [router.asPath]);
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 7,
    autoPlay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "5px",
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
    <>
      <div className={styles.tabSection}>
        <Container fluid>
          <Row className={styles.desktopView}>
            <Col lg="12" md="12" sm="12" col="12">
              <Nav className={styles.TabsList}>
                <NavItem className={styles.listWrap}>
                  <Link href="/for-you">
                    <a className={styles.tabsOuter + " nav-link"}>
                      <img
                        src="https://theculturewirebucket.s3.ap-south-1.amazonaws.com/Icon+weather-stars.svg"
                        alt="icon"
                      />
                      <h3 className={styles.tabHead}>For you</h3>
                    </a>
                  </Link>
                </NavItem>
                <NavItem className={styles.listWrap}>
                  <Link href="/search?s=">
                    <a className={styles.tabsOuter + " nav-link"}>
                      <img src="../images/menu.png" alt="icon" />
                      <h3 className={styles.tabHead}>All</h3>
                    </a>
                  </Link>
                </NavItem>
                {data.length > 0 &&
                  data.map((category, index) => (
                    <NavItem className={styles.listWrap} key={index}>
                      <Link
                        href={"/dedicated-category/" + category.slug}
                        className={styles.tabsOuter}
                      >
                        <a className={styles.tabsOuter + " nav-link"}>
                          {category.banners.length > 0 && (
                            <Image
                              //loader={imageLoader}
                              className={styles.cardImage}
                              src={category.banners[0]}
                              alt="inspire"
                              width={36}
                              height={36}
                            />
                          )}
                          <h3 className={styles.tabHead}>{category.title}</h3>
                        </a>
                      </Link>
                    </NavItem>
                  ))}
                {/* <NavItem className={styles.listWrap}>
                <NavLink href="#" className={styles.tabsOuter}>
                  <img src="https://theculturewirebucket.s3.ap-south-1.amazonaws.com/lifestyle.svg" alt="icon" />
                  <h3 className={styles.tabHead}>All</h3>
                </NavLink>
              </NavItem> */}
              </Nav>
            </Col>
          </Row>
          <Row className={styles.MobileView}>
            <Slider {...settings}>
              <div className={styles.MobilelistWrap}>
                <Link href="/for-you">
                  <a className={styles.tabsOuter + " nav-link"}>
                    <img
                      src="https://theculturewirebucket.s3.ap-south-1.amazonaws.com/Icon+weather-stars.svg"
                      alt="icon"
                    />
                    <h3 className={styles.tabHead}>For you</h3>
                  </a>
                </Link>
              </div>
              <div className={styles.MobilelistWrap}>
                <Link href="/search?s=">
                  <a className={styles.tabsOuter + " nav-link"}>
                    <img src="../images/menu.png" alt="icon" />
                    <h3 className={styles.tabHead}>All</h3>
                  </a>
                </Link>
              </div>
              {data.length > 0 &&
                data.map((category, index) => (
                  <NavItem className={styles.MobilelistWrap} key={index}>
                    <Link
                      href={"/dedicated-category/" + category.slug}
                      className={styles.tabsOuter}
                    >
                      <a className={styles.tabsOuter + " nav-link"}>
                        {category.banners.length > 0 && (
                          <Image
                            //loader={imageLoader}
                            className={styles.cardImage}
                            src={category.banners[0]}
                            alt="inspire"
                            width={36}
                            height={36}
                          />
                        )}
                        <h3 className={styles.tabHead}>{category.title}</h3>
                      </a>
                    </Link>
                  </NavItem>
                ))}

              {/* <div className={styles.MobilelistWrap}>
              <a href="#">
                <img
                  src="https://theculturewirebucket.s3.ap-south-1.amazonaws.com/lifestyle.svg"
                  alt="icon"
                  className="mobileIcon"
                  style={{ margin: "0 auto" }}
                />
                <h3 className={styles.tabHead}>More</h3>
              </a>
            </div> */}
            </Slider>
          </Row>
        </Container>
      </div>
      {/* <Container className="pt-3">
        <Row>
          <Col className={styles.RecentViewedIcons}>
            {showRecentViews ? (
              <p onClick={() => setShowRecentViews(!showRecentViews)}>
                Recently Viewed Trends <FaSquare />{" "}
              </p>
            ) : (
              <FaWindowClose
                onClick={() => setShowRecentViews(!showRecentViews)}
              />
            )}
          </Col>
        </Row>
        {!showRecentViews && (
          <Row>
            {recentViewedState &&
              recentViewedState.length > 0 &&
              recentViewedState.map(
                (recentData, index) =>
                  index < 6 && (
                    <Col xs={4} sm={4} md={2} lg={2}>
                      <Link href={`/trend/${recentData.slug}`}>
                        <a className={styles.RecentViewed}>
                          <Image
                            //loader={imageLoader}
                            className={styles.cardImage}
                            src={recentData.featured_images}
                            alt="inspire"
                            width={100}
                            height={75}
                          />
                          <p>{recentData.title}</p>
                        </a>
                      </Link>
                    </Col>
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
          </Row>
        )}
      </Container> */}
    </>
  );
};
const mapStateToProps = (state) => ({
  //data: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  categoryRecordsData: () => dispatch(categoryRecords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabSection);

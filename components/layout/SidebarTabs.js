import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";
import { BiFootball } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { InspirationRecords } from "../../redux/action/frontend";
import { connect } from "react-redux";
import Image from "next/image";
import {
  Container,
  Row,
  Nav,
  Col,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import Link from "next/link";
const SidebarTabs = (props) => {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState("1");
  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    props.InspirationRecordsData({ featured: true }).then((res) => {
      //console.log(res);
      if (res && res.success) {
        setData(res.data);
        setShowLoader(false);
      }
    });
  }, []);
  return (
    <div className={styles.sidebarWrap}>
      {console.log(data)}
      <Container fluid>
        <Row className="align-items-center" style={{ padding: "5px" }}>
          <Col lg="1" md="1" sm="12" col="12">
            <div className={styles.sidebarInner}>
              <Nav vertical className={styles.IconsWrapp}>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <AiFillHome />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <img
                      src="../images/Fire.svg"
                      alt="fireIcon"
                      className={styles.fireImg}
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <FaHeart />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <FaBars />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <IoIosSettings />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <RiInformationFill />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                    <BiFootball />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col lg="11" md="12" sm="12" col="12">
            <TabContent activeTab={currentActiveTab}>
              <TabPane tabId="1">
                <div className={styles.carouselContainer}>
                  <Carousel
                    autoPlay
                    infiniteLoop
                    swipeable
                    showStatus={false}
                    showThumbs={false}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={50}
                    showIndicators={false}
                    renderArrowPrev={(onClickHandler, hasPrev) =>
                      hasPrev && (
                        <button
                          className={styles.btnPositions}
                          type="button"
                          onClick={onClickHandler}
                          style={{
                            position: "absolute",
                            zIndex: "9999",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px 0px 0px 5px",
                            border: "0",
                            bottom: "16rem",
                            right: "8px",
                          }}
                        >
                          <img
                            src="../images/next.png"
                            alt="arrow"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </button>
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext) =>
                      hasNext && (
                        <button
                          className={styles.btnnextPositions}
                          type="button"
                          onClick={onClickHandler}
                          style={{
                            position: "absolute",
                            bottom: "13rem",
                            right: "8px",
                            zIndex: "9999",
                            border: "0",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px 0px 0px 5px",
                          }}
                        >
                          <img
                            src="../images/left-chevron.png"
                            alt="arrow"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </button>
                      )
                    }
                  >
                    {data &&
                      data.length > 0 &&
                      data.map((singleTrend, index) => (
                        <Row
                          className="align-items-center"
                          style={{ padding: "0px 0" }}
                          key={index}
                        >
                          <Col lg="4" md="12" sm="12" col="12">
                            <h2 className={styles.slideHead + ' ' + styles.textCenter}>
                              {singleTrend.title}
                            </h2>
                            <div className="d-flex"></div>
                            <p className={styles.subhead}>
                              {singleTrend.review_summary}
                            </p>
                            <div className={styles.linkwrap}>
                              <Link href={`/trend/${singleTrend.slug}`}>
                                <a className={styles.sitebtn}>
                                  Continue Reading{" "}
                                </a>
                              </Link>
                            </div>
                          </Col>
                          <Col lg="8" md="12" sm="12" col="12">
                            <Image
                              className={styles.tabsRightImg}
                              src={singleTrend.featured_images[0]}
                              alt="tab-img"
                              width={1200}
                              height={650}
                            />
                            <div className={styles.fireIcon}>
                              <img src="../images/Fire.svg" alt="icon" />
                              <span className={styles.fireText}>
                                <p>{singleTrend.score * 10}%</p>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      ))}
                  </Carousel>
                </div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //data: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  InspirationRecordsData: (filterData) =>
    dispatch(InspirationRecords(filterData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTabs);

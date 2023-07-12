import React, { Fragment, useEffect, useState } from "react";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsDribbble, BsMedium, BsGithub } from "react-icons/bs";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
import { socialMediaSettings } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  const[showModal , setShowModal] = useState(false)
  const[data , setData] = useState(null)

  //Save cookies action in loaclstorage
  const saveActionInLocationStorage = (action) => {
    if(action == 1){
      // Save data true
      localStorage.setItem("cokkies", true)
    }else{
      //Save data false
      localStorage.setItem("cokkies", false)
    }
    setShowModal(true)
  }

  useEffect(() => {
    const getCokkieResult = localStorage.getItem("cokkies")
    getCokkieResult && setShowModal(true)
  }, [])
  useEffect(() => {
    dispatch(socialMediaSettings()).then(res => {
      if(res && res.success){
        setData(res?.data)
      }
    });
  }, []);

  return (
    <Fragment>
      <div className={styles.footerArea}>
        <Container fluid>
          <Row>
            <Col lg="4" md="12" sm="12" xs="12" col="12">
              <div className="FootMenu">
                <img src="/images/logo.png" alt="foot-logo" />
                <p className={styles.subheading}>
                  India’s First XYZ Mapping, Trend Spotting Platform. Find
                  Your Daily Dose Of Inspiration, Micro-Trends, News & Pop
                  XYZ.
                </p>

                <div className={styles.socialIcons}>
                  <Nav>
                    <NavItem>
                      <NavLink href={data?.profile?.facebook ?? ""} className={styles.socialLink}>
                        <FaFacebookF />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href={data?.profile?.instagram ?? ""} className={styles.socialLink}>
                        <BsInstagram />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href={data?.profile?.twitter ?? ""} className={styles.socialLink}>
                        <BsTwitter />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href={data?.profile?.medium ?? ""} className={styles.socialLink}>
                        <BsMedium />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href={data?.profile?.github ?? ""} className={styles.socialLink}>
                        <BsGithub />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href={data?.profile?.dribble ?? ""} className={styles.socialLink}>
                        <BsDribbble />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col lg="2" md="6" sm="6" xs="6" col="6">
              <div className={styles.footMenu}>
                <h5 className={styles.FootHead}>Discover</h5>
                <Nav vertical>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Sports
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Technology
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Logos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Posters
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Business Cards
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Flayers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Resumes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Presentations
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col lg="2" md="6" sm="6" xs="6" col="6">
              <div className={styles.footMenu}>
                <h5 className={styles.FootHead}>Explore</h5>
                <Nav vertical>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Design Types
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Templates
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Graphs & Charts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Photo Editing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Print
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Apps
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col lg="2" md="6" sm="6" xs="6" col="6">
              <div className={styles.footMenu}>
                <h5 className={styles.FootHead}>Resources</h5>
                <Nav vertical>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Color wheel
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Palette generator
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Logo maker
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Colors
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Design size guide
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Support
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Ideas
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col lg="2" md="6" sm="6" xs="6" col="6">
              <div className={styles.footMenu}>
                <h5 className={styles.FootHead}>Company</h5>
                <Nav vertical>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Terms and Privacy
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Careers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Media
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Security
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className={styles.footLink}>
                      Request a Demo
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://XYZwire.codeit.cloud/" className={styles.footLink}>
                      XYZ Warrior Login
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.copyrightSec}>
        <p className={styles.copyrightText}>
          &copy; 2022 XYZ Wire, All Rights Reserved. Powered by{" "}
          <a href="#" className={styles.sitelink}>
            Fresco Web Services Pvt. Ltd.
          </a>
        </p>
      </div>
      <>
      { !showModal &&
      <Container fluid className={styles.cookie_bottom_bar}>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12" col="12">
                     <div className={styles.sticky_footer}>
                      <Row className={styles.sticky_footer_row}>
                      <Col lg="8" md="6" sm="12" xs="12" col="12" className="footer_sticky_cntnt">
                        <p>Our website uses cookies to improve your browsing experience, We need your consent to set cookies, To agree click accept.</p>
                      </Col>
                      <Col lg="2" md="3" sm="6" xs="6" col="12"  className={styles.footer_btns}>
                      <Button
                        color="primary"
                        tag="input"
                        type="submit"
                        value="Accept"
                        onClick={() => saveActionInLocationStorage(1)}
                      />
                      {/* <Button type="primary">Accept</Button> */}
                      </Col>
                      <Col lg="2" md="3" sm="6" xs="6" col="12" className={styles.footer_btns}>
                      <Button
                        color="primary"
                        tag="input"
                        type="submit"
                        value="Decline"
                        onClick={() => saveActionInLocationStorage(0)}
                      />
                      {/* <Button type="primary">Decline</Button> */}
                      </Col>
                      </Row>
                     </div>
              </Col>
            </Row>
      </Container>
      }
      </>
    </Fragment>
  );
};
export default Footer;

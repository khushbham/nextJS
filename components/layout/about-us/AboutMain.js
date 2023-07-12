import React from "react";
import { Row, Col, Container } from "reactstrap";
import style from "../about-us/about.module.css";
import { IoIosArrowForward } from "react-icons/io";

const AboutMain = () => {
  return (
    <div className={style.AboutMain}>
      <div className={style.AboutUsSec}>
        <Container>
          <Row>
            <Col lg={7} md={7} sm={8} col={12} xs={12}>
              <div className={style.bannerContent}>
                <h1 className={style.AboutHead}>
                  <span className={style.highlightedText}>Who we are </span>inspiration, innovation, and creativity.
                </h1>
                <p className={style.subHeading}>
                  We tailor our services to meet the needs of each client, and
                  work together every step of the way to bring bold ideas to
                  life through strategies.
                </p>
                <a href="#" className={style.learnBtn}>
                  Read More
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={style.sectionWrap}>
        <div class={style.whoWeAreSec}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6} sm={12} xs={12} className="pe-0">
                <div className={style.leftSec}>
                  <img src="../images/who-we-are1.jpg" alt="left-image" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    augue ipsum, pharetra sed mauris ac, interdum semper sem.
                    Pellentesque et lobortis eros, et pretium augue. Donec
                    fermentum odio ornare purus aliquet tincidunt. Maecenas luctus
                    fringilla maximus. Curabitur mi augue, posuere nec commodo eu,
                    convallis sed neque. Phasellus iaculis ultrices tellus
                    consectetur rutrum. Sed vehicula pellentesque nunc laoreet
                    faucibus. Donec efficitur aliquet pellentesque.
                  </p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="ps-0">
                <div className={style.aboutContent}>
                  <h2 className={style.Heading}>Who We Are</h2>
                  <div className={style.whoWeAreimg}>
                    <img src="../images/who-we-are2.jpg" alt="about" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.ourValueSec}>
          <Container>
            <h3 className={style.Heading}>Our Values</h3>
            <Row className="align-items-center">
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className={style.valuesOuterSec}>
                  <img src="../images/value1.jpg" alt="values" />
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adip Etiam augue
                    ipsum.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className={style.valuesOuterSec}>
                      <img src="../images/value2.jpg" alt="values" />
                      <h2>Lorem Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip Etiam augue
                        ipsum.
                      </p>
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className={style.valuesOuterSec}>
                      <img src="../images/value3.jpg" alt="values" />
                      <h2>Lorem Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip Etiam augue
                        ipsum.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className={style.valuesOuterSec}>
                  <img src="../images/value4.jpg" alt="values" />
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adip Etiam augue
                    ipsum.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

        {/* our-mission */}
        <div className={style.ourMissionSec}>
          <Container>
            <h2 className={style.missionHead}>Our Mission</h2>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className={style.missionContent}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam augue ipsum, pharetra sed mauris ac, interdum semper
                    sem. Pellentesque et lobortis eros, et pretium augue. Donec
                    fermentum odio ornare purus aliquet tincidunt. Maecenas
                    luctus fringilla maximus. Curabitur mi augue, posuere nec
                    commodo eu, convallis sed neque. Phasellus iaculis ultrices
                    tellus consectetur rutrum. Sed vehicula pellentesque nunc
                    laoreet faucibus. Donec efficitur aliquet pellentesque.
                    Aliquam eu justo sit amet libero cursus porta ac venenatis
                    tortor. Curabitur sed augue dui. Nullam sit amet dignissim
                    eros,
                  </p>
                  <ul className={style.misionList}>
                    <li>
                      Aenean bibendum suscipit nulla nec ultricies. Sed vitae mi
                      non enim.
                    </li>
                    <li>
                      Cras at sapien mattis, vestibulum lectus vel, efficitur
                      ex.
                    </li>
                    <li>
                      Quisque nunc nisl, sagittis eget porttitor ac, imperdiet
                      nec neque.
                    </li>
                    <li>roin tincidunt lorem in tempor imperdiet.</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                <img src="../images/mission-img.jpg" alt="mission" />
              </Col>
            </Row>
          </Container>
        </div>

        {/* awards sec */}
        <div className="awards-wrap">
          <div className={style.awardsSec}>
            <Container>
              <h1 className={style.Heading}>Our Awards</h1>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <ul>
                    <li>
                      <IoIosArrowForward />
                      Wall Street Journal Workplace of the Day
                    </li>
                    <li>
                      {" "}
                      <IoIosArrowForward />
                      Wall Street Journal Workplace of the Day
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Canada’s Best Start-Up Work Culture, Techvibes
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Canadian Young Entrepreneur Award
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Two CEO Read “Select” Books
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Canadian Innovation Award
                    </li>
                  </ul>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <ul>
                    <li>
                      <IoIosArrowForward />
                      Axiom International Book Award
                    </li>
                    <li>
                      <IoIosArrowForward />
                      New York Times Bestseller
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Inc. Best Books for Business Owners
                    </li>
                    <li>
                      <IoIosArrowForward />
                      A’Design Award, Best Design Media Award
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Pixel Award, Best Online Magazine
                    </li>
                  </ul>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <ul>
                    <li>
                      <IoIosArrowForward /> Wall Street Journal Workplace of the
                      Day
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Canada’s Best Start-Up Work Culture, Techvibes
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Canadian Innovation Award
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Canadian Young Entrepreneur Award
                    </li>
                    <li>
                      <IoIosArrowForward />
                      Two CEO Read “Select” Books
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* our team sec */}
        <div class={style.TeamSec}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6} sm={12} xs={12} className="OurTeam">
                <div className={style.leftSec}>
                  <img src="../images/team.jpg" alt="left-image" />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className={style.TeamContent}>
                  <h2 className={style.TeamHeading}>Our Team</h2>
                  <p className={style.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam augue ipsum, pharetra sed mauris ac, interdum semper
                    sem. Pellentesque et lobortis eros, et pretium augue. Donec
                    fermentum odio ornare purus aliquet tincidunt. Maecenas
                    luctus fringilla maximus. Curabitur mi augue, posuere nec
                    commodo eu, convallis sed neque. Phasellus iaculis ultrices
                    tellus consectetur rutrum. Sed vehicula pellentesque nunc
                    laoreet faucibus. Donec efficitur aliquet pellentesque.
                  </p>
                  <a href="#" className={style.learnBtn}>
                    Join Now
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
};

export default AboutMain;

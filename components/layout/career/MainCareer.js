import React from "react";
import { Row, Col, Container } from "reactstrap";
import style from "../career/career.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowForwardIos } from "react-icons/md";
import { CgArrowLongRight } from 'react-icons/cg';
import { CgArrowLongLeft } from 'react-icons/cg';
const MainCareer = () => {
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button onClick={ onClick } className={style.LeftArrowPosition} >
        <CgArrowLongLeft />
        </button>
    );
  };
  
  const CustomRightArrow = ({ onClick }) => {
    return (
      <button onClick={ onClick } className={style.RightArrowPosition} >
        <CgArrowLongRight />
        </button>
    );
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 2,
      slidesToSlide: 2, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={style.CareerWrapper}>
      <div className={style.bannerSec}>
        <Container>
          <Row>
            <Col lg={7} md={7} sm={7} col={12} xs={12}>
              <div className={style.bannerContent}>
                <h1 className={style.campusHead}>Become A Culture Warrior</h1>
                <p className={style.campusSubHeading}>
                  Our diverse, driven young team of trend researchers are our
                  heroes. We’re nothing without our warriors!
                </p>
                <a href="#" className={style.ExploreBtnn}>
                  Become A Culture Warrior
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* benefit sec */}
      <div className={style.benefitSec}>
        <Container>
          <h1>Benefits Of Becoming A Culture Warrior</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Row>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className={style.benefitListing}>
                <h3>Stay Inspired</h3>
                <p>
                  You’ll be exposed to new ideas and concepts every day in your
                  search for trends!
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className={style.benefitListing}>
                <h3>Become An Industry Expert</h3>
                <p>
                  You’ll be exposed to new ideas and concepts every day in your
                  search for trends!
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className={style.benefitListing}>
                <h3>Create A Portfolio</h3>
                <p>
                  You’ll be exposed to new ideas and concepts every day in your
                  search for trends!
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className={style.benefitListing}>
                <h3>Get Featured</h3>
                <p>
                  You’ll be exposed to new ideas and concepts every day in your
                  search for trends!
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className={style.benefitListing}>
                <h3>Access Learning Tools</h3>
                <p>
                  You’ll be exposed to new ideas and concepts every day in your
                  search for trends!
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className={style.benefitListing}>
                <h3>Network</h3>
                <p>
                  You’ll be exposed to new ideas and concepts every day in your
                  search for trends!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* job opportunities */}
      <div className={style.jobOppotunitiesSec}>
        <Container>
          <h1 className={style.jobHead}>
            Current Job Opportunities at Culture Wire
          </h1>
          <p className={style.subHeading}>
            We’re looking for amazing people to join us. If you’re interested in
            joining culture wire, check out available positions on our job
            board.
          </p>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <ul className={style.verticalSteps}>
                <li className={style.stepsList}>
                  <span className={style.oppotunitiesList}>
                    <h2>Account Executive</h2>
                    <p>
                      The Role: The Account Executive will become a master at
                      Trend Hunter, inclusive of all products and services. They
                      will generate opportunities for new business via outbound
                      communications leveraging high level value propositions.
                    </p>
                    <p className={style.infoText}>
                      Please apply by sending your resume and cover letter to{" "}
                      <a href="#" className={style.careerLink}>
                        Careers@culturerwire.com
                      </a>
                    </p>
                  </span>
                </li>
                <li className={style.stepsList}>
                  <span className={style.oppotunitiesList}>
                    <h2>Marketing & Sales Executive</h2>
                    <p>
                      The Role: The Account Executive will become a master at
                      Trend Hunter, inclusive of all products and services. They
                      will generate opportunities for new business via outbound
                      communications leveraging high level value propositions.
                    </p>
                    <p className={style.infoText}>
                      Please apply by sending your resume and cover letter to{" "}
                      <a href="#" className={style.careerLink}>
                        Careers@culturerwire.com
                      </a>
                    </p>
                  </span>
                </li>
                <li className={style.stepsList}>
                  <span className={style.oppotunitiesList}>
                    <h2>Executive</h2>
                    <p>
                      The Role: The Executive will become a master at Trend
                      Hunter, inclusive of all products and services. They will
                      generate opportunities for new business via outbound
                      communications leveraging high level value propositions.
                    </p>
                    <p className={style.infoText}>
                      Please apply by sending your resume and cover letter to{" "}
                      <a href="#" className={style.careerLink}>
                        Careers@culturerwire.com
                      </a>
                    </p>
                  </span>
                </li>
                <li className={style.stepsList}>
                  <span className={style.oppotunitiesList}>
                    <h2>Digital Marketing</h2>
                    <p>
                      The Role: The Digital Marketing will become a master at
                      Trend Hunter, inclusive of all products and services. They
                      will generate opportunities for new business via outbound
                      communications leveraging high level value propositions.
                    </p>
                    <p className={style.infoText}>
                      Please apply by sending your resume and cover letter to{" "}
                      <a href="#" className={style.careerLink}>
                        Careers@culturerwire.com
                      </a>
                    </p>
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* testimonial sec */}
      <div className={style.testimonialSec}>
        <Container>
          <h1 className="mb-4">What Is It Like To Work At The Culture Wire?</h1>
          <Row>
            <Col lg={11} md={12} sm={12} col={1} className="m-auto">
              <Carousel
                autoPlay
                infinite={true}
                swipeable
                items={2}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                responsive={responsive}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                className={style.testimonialSlider}
              >
                <div className={style.testimonialOuter}>
                  <div className={style.testimonialInner}>
                    <img
                      src="../images/testimonial1.png"
                      className={style.profileImage}
                    />
                    <div className={style.details}>
                      <h3>A multi-disciplinary team of creators ...</h3>
                      <p>
                        " Suspendisse potenti. Sed egestas, ante et vulputate
                        volutpat, eros pede semper est, vitae luctus metus
                        libero eu augue. "
                      </p>
                      <p className={style.userName}>
                        Jahanvi Bhalla Culture Warrior
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.testimonialOuter}>
                  <div className={style.testimonialInner}>
                    <img
                      src="../images/testimonial2.png"
                      className={style.profileImage}
                    />
                    <div className={style.details}>
                      <h3>A multi-disciplinary team of creators ...</h3>
                      <p>
                        " Suspendisse potenti. Sed egestas, ante et vulputate
                        volutpat, eros pede semper est, vitae luctus metus
                        libero eu augue. "
                      </p>
                      <p className={style.userName}>
                        Jahanvi Bhalla Culture Warrior
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.testimonialOuter}>
                  <div className={style.testimonialInner}>
                    <img
                      src="../images/testimonial1.png"
                      className={style.profileImage}
                    />
                    <div className={style.details}>
                      <h3>A multi-disciplinary team of creators ...</h3>
                      <p>
                        " Suspendisse potenti. Sed egestas, ante et vulputate
                        volutpat, eros pede semper est, vitae luctus metus
                        libero eu augue. "
                      </p>
                      <p className={style.userName}>
                        Jahanvi Bhalla Culture Warrior
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      {/* join Us sec */}
      <div className={style.joinSec}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.careerOuter}>
                <img src="../images/career-img2.jpg" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.JoinUsContent}>
                <h1>JOIN THE CULTURE WIRE COMMUNITY TODAY!​</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  augue ipsum, pharetra sed mauris ac, interdum semper sem.
                  Pellentesque et lobortis eros, et pretium augue. Donec
                  fermentum odio ornare purus aliquet tincidunt. Maecenas luctus
                  fringilla maximus. Curabitur mi augue, posuere nec commodo eu,{" "}
                </p>
                <a href="#" className={style.ExploreBtnn}>
                  JOIN NOW
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainCareer;

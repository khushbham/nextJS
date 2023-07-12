import React from "react";
import { Row, Col, Container, Input, Form, FormGroup } from "reactstrap";
import style from "../our-services/services.module.css";
const ServicesContent = () => {
  return (
    <div className={style.servicesMain}>
      <div className={style.servicesBanner}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} xs={12}>
              <h1 className={style.servicesHeading}>
                <span className={style.highlightedText}>
                  Creating A New World{" "}
                </span>
                by combining information, inspiration, innovation, and
                creativity.
              </h1>
              <p>
                We tailor our services to meet the needs of each client, and
                work together every step of the way to bring bold ideas to life
                through strategies, products and services that resonate with the
                people who matter.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.servicesOuter}>
                <img src="../images/s-1.png" alt="services" />
                <div className={style.servicesBg}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* inspiration & innovation sec */}
      <div className={style.inspirationSec}>
        <Container>
          <Row className="align-items-end">
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className={style.inspireOuter}>
                <img src="../images/s-2.jpg" alt="services2" />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className={style.DailyTrends}>
                <h2 className={style.TrendsTag}>theculturewire.com </h2>
                <h4 className={style.TrendsHead}>
                  Your Daily Dose Of Inspiration & Innovation!
                </h4>
                <p>
                  theculturewire.com is India’s first trends and culture mapping
                  platform. Your Daily Dose of Inspiration, Ideas, Innovation,
                  Viral News and Pop culture!
                </p>
                <ul className={style.trendsList}>
                  <li>Daily Trends </li>
                  <li>Reports </li>
                  <li>Inspiration & Innovation Bundles </li>
                  <li>Learning tools</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* strategy sec */}
      <div className={style.StrategySec}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={7} sm={12} xs={12}>
              <div className={style.StrategyWrap}>
                <h2> Strategy Meets Creativity</h2>
                <p>
                  We help you envision your future, articulate why it is the
                  right thing to do, create a plan to get you there and help you
                  execute it. What’s unique about us is our creative process,
                  our research backed platform that helps us understand the
                  customers, our tools that validate the solution and de-risk
                  strategies.{" "}
                </p>
                <ul className={style.strategyList}>
                  <li>
                    <a href="#">Ideas To Action</a>
                  </li>
                  <li>
                    <a href="#">Business Design</a>{" "}
                  </li>
                  <li>
                    <a href="#">Growth Strategy</a>
                  </li>
                  <li>
                    <a href="#">Curation</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12} xs={12}>
              <div className={style.StrategyImage}>
                <img src="../images/s-3.jpg" alt="services" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* custom trends reports */}
      <div className={style.customTrendsSec}>
        <Container>
          <Row>
            <Col lg={7} md={7} sm={10} xs={12} className="m-auto">
              <h2>Growing With Empathy</h2>
              <p>
                Learning Through design research, Great design starts with great
                research—to gain empathy and understanding, to inspire new
                ideas, and to test our intuition. We rely on observation,
                in-context interviews, analogous industries, and, when
                appropriate, a hybrid approach with qualitative research and
                quantitative analysis.
              </p>
              <div className={style.trendsOuter}>
                <h5 className={style.TrendsBorder}>Custom Trend Reports</h5>
                <h6>Focused Group Service & Product Test </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* solutions sec */}
      <div className={style.solutionsSec}>
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={5} md={5} sm={12} xs={12} className={style.ImageOuter}>
              <img src="../images/solutions-img.jpg" alt="solutions" />
            </Col>
            <Col lg={7} md={7} sm={12} xs={12}>
              <div className={style.solutionsContent}>
                <h2>Solutions At Intersections</h2>
                <p>
                  We believe that creativity and inspiration breeds outside your
                  comfort zones. In this case, outside your core industry. We
                  help you build solutions at the intersection of industries, at
                  the heart of collaboration, hybridization and co-creation,
                  keeping creativity at the center. By synthesizing our
                  research, observations, and learnings in the field, we can
                  spot themes and patterns, look for relationships, and discover
                  insights. Once our teams have finished this process, they can
                  explore any hunches through experimentation and rapid
                  prototyping.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* rapid prototyping */}
      <div className={style.prototyping}>
        <Container>
          <Row className="align-items-center">
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className={style.prototypeImageSec}>
                <img src="../images/protocol-img.png" />
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <div className={style.prototypingContent}>
                <h1>Rapid Prototyping</h1>
                <p>
                  Got an idea, don’t know where to start? We will help you build
                  a prototype! No matter what we’re designing, prototyping is an
                  essential stage of the design process. Building a prototype is
                  a quick and risk-averse way to get ideas into the hands of the
                  people we are designing for, and to iterate efficiently and
                  cost-effectively
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* custom cultures */}
      <div className={style.customCultureSec}>
        <Container fluid>
        <h2 className={style.cultureHeading}>Get Wire'D Learning Tools And Forums</h2>
          <Row>
            <Col lg={7} sm={12} md={12} xs={12} className="p-0">
              <div className={style.cultureWrap}>
                <h4>Workshops</h4>
                <p>
                  Bringing an innovation mindset, processes and systems via
                  workshops to your organization. Innovate by empowering the
                  people who drive them
                </p>
              </div>
              <div className={style.fundamentalsec}>
                <h2>Foundational Sessions</h2>
                <ul className={style.fundamentalList}>
                  <li>
                    Culture Blocks (2 hours) | Forecast Trends, change your
                    thinking.</li>
                   <li> Culture Comparison (2 hours) | Compare your
                    business to fresh new businesses in similar or different
                    industries.</li> 
                    <li> Culture Shock (2 hours) | Critical look at areas
                    of product or business development that need immediate
                    action to come alive and thrive.</li>
                </ul>
                <h2>Custom Culture</h2>
                <ul className={style.fundamentalList}>
                  <li>
                    Culture Blocks (2 hours) | Forecast Trends, change your
                    thinking.</li>
                   <li> Culture Comparison (2 hours) | Compare your
                    business to fresh new businesses in similar or different
                    industries.</li> 
                    <li> Culture Shock (2 hours) | Critical look at areas
                    of product or business development that need immediate
                    action to come alive and thrive.</li>
                </ul>
              </div>
            </Col>
            <Col lg={5} sm={12} md={12} xs={12} className="p-0">
              <img src="../images/custom-culture.jpg" className={style.cultureImage} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* keynotes */}
      <div className={style.keynotes}>
        <div className={style.keynotesInfo}>
          <Container>
            <h2>Keynotes</h2>
            <p>
              We help you curate keynotes, and panels for focused discussions.
              Suited to address your problems, we bring a key industry expert to
              your events, or closed board room, even have them join your brain
              storm sessions, all for innovation.
            </p>
          </Container>
        </div>
        <Container className="pt-3">
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.keynotesWrap}>
                <img src="../images/keywords.jpg" alt="keywords" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.contentWrap}>
                <h2>Get Wire'D 2021</h2>
                <p>
                  Coming Soon | India’s Coolest Innovation Festival! Join for
                  culture C-raves, a gamified experience to find realtime
                  solutions for any problem at all
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Get Wire'D Online sec */}
      <div className={style.wireOnlineSec}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.WireOuter}>
                <h2 className={style.WireHead}>Get Wire'D Online</h2>
                <p>
                  An Online ecosystem, network, series of webinars and podcasts
                  to drive our mission! We help you curate keynotes, and panels
                  for focused discussions. Suited to address your problems, we
                  bring a key industry expert to your events, or closed board
                  room, even have them join your brain storm sessions, all for
                  innovation.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={style.bgImage}>
              <img src="../images/wire-img1.png"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* consultation sec */}
      <div className={style.consultationSec}>
        <Container>
          <Row>
            <Col lg={10} md={10} sm={12} xs={12} className="m-auto">
              <h3 className={style.consultSec}>
                Book A Free First Consultation Today!
              </h3>
              <Form className="mt-4">
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup className="mb-4">
                      <Input
                        name="text"
                        placeholder="First Name"
                        type="text"
                        className={style.fields}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup className="mb-4">
                      <Input
                        name="text"
                        placeholder="Last Name"
                        type="text"
                        className={style.fields}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup className="mb-4">
                      <Input
                        name="Email"
                        placeholder="Email"
                        type="Email"
                        className={style.fields}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup className="mb-4">
                      <Input
                        name="number"
                        placeholder="Phone Number"
                        type="text"
                        className={style.fields}
                      />
                    </FormGroup>
                  </Col>
                  <div className="text-center">
                    <a href="#" className={style.sendbtn}>
                      Send
                    </a>
                  </div>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ServicesContent;

import React from 'react'
import { Row, Col, Container } from "reactstrap";
import style from '../campus/Campus.module.css';
import CompassMatricsResults from "../CompassMatricsResults";
import { useRouter } from 'next/router'
const MainCampus = () => {
    const router = useRouter();

    return (
        <div className={style.campusMainSec}>
            <div className={style.bannerSec}>
                <Container>
                    <Row>
                        <Col lg={7} md={7} sm={7} col={12} xs={12}>
                            <div className={style.bannerContent}>
                                <h1 className={style.campusHead}>Pro Culture Report</h1>
                                <p className={style.campusSubHeading}>The Culturewire Reports are designed to inspire you to innovate, by sharing thoughtfully picked, and curated trends based on your brand,  project, research interest, future scope, category, or industry interest.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* culture campus */}
            <div className={style.campusSec}>
                <Container>
                    <div className={style.campusOuter}>
                        <Row className="align-items-center">
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className={style.campusContent}>
                                    <h1>Culture Compass</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue ipsum, pharetra sed mauris ac, interdum semper sem. Pellentesque et lobortis eros, et pretium augue. Donec fermentum odio ornare purus aliquet tincidunt. Maecenas luctus fringilla maximus. Curabitur mi augue, posuere nec</p>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <img src="../images/campus.png" alt="campus" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            {router.query.s ?

                <CompassMatricsResults /> :
                <>
                    {/* explore our services */}
                    <div className={style.exploreServices}>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <img src="../images/explore-services.png" alt="explore-images" />
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className={style.servicesContent}>
                                        <h1>Things to remember when reading trends!</h1>
                                        <ul className={style.servicesListing}>
                                            <li>Aenean bibendum suscipit nulla nec ultricies. Sed vitae mi non enim.</li>
                                            <li>Cras at sapien mattis, vestibulum lectus vel, efficitur ex.</li>
                                            <li> Quisque nunc nisl, sagittis eget porttitor ac, imperdiet nec neque.</li>
                                            <li>roin tincidunt lorem in tempor imperdiet.</li>
                                        </ul>
                                        <a href="#" className={style.exploreBtn}>EXPLORE OUR SERVICES</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* innovate section */}
                    <div className={style.innovateSec}>
                        <Container>
                            <Row>
                                <Col lg={8} md={8} sm={12} xs={12} className="m-auto">
                                    <h1 className={style.innovateHeading}> Innovate Through Chaos</h1>
                                    <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue ipsum, pharetra sed mauris ac, interdum semper sem. Pellentesque et lobortis eros, et pretium augue. Donec fermentum odio ornare purus aliquet tincidunt. Maecenas luctus fringilla maximus. Curabitur mi augue, posuere nec commodo eu, convallis sed neque. Phasellus iaculi,</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className={style.exploreServices}>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={7} md={7} sm={12} xs={12}>
                                    <div className={style.servicesContent}>
                                        <h1>Take Your Ideas To Action</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue ipsum, pharetra sed mauris ac, interdum semper sem. Pellentesque et lobortis eros, et pretium augue. Donec fermentum odio ornare purus aliquet tincidunt. Maecenas luctus fringilla maximus. Curabitur mi augue, posuere nec commodo eu, convallis sed neque. Phasellus iaculis ultrices tellus consectetur rutrum. Sed vehicula pellentesque nunc laoreet faucibus. Donec efficitur aliquet pellentesque. Aliquam eu justo sit amet libero cursus porta ac venenatis tortor. Curabitur sed augue dui. Nullam sit amet dignissim eros,</p>
                                        <a href="#" className={style.exploreBtn}>EXPLORE OUR SERVICES</a>
                                    </div>
                                </Col>
                                <Col lg={5} md={5} sm={12} xs={12}>
                                    <img src="../images/explore-img.png" alt="explore-images" className={style.exploreImage} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            }
        </div>
    )
}

export default MainCampus

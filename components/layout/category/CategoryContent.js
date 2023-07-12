import React from "react";
import styles from "../category/category.module.css";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
const ImagePreview = (data) => {
  return data.data && data.data.length > 0 ? (
    <Image src={data.data[0]} alt="trends" height={800} width={800} />
  ) : (
    <div
      className="no_image_found"
      style={{ background: "white", border: "1px solid" }}
    >
      <Image src="/images/no_image_found.png" height={450} width={600} />
    </div>
  );
};
const CategoryContent = (props) => {
  return props.data && (
    <div className={styles.categoryWrap}>
      <div className={styles.catgeoryBanner}>
        <Container>
          <Row>
            <Col lg={5} md={6} sm={10} xs={12}>
              <a href="#" className={styles.technologyLinks}>
                {props.data.title}
              </a>
              {/* <h2>The future is here</h2> */}
              <p>{props.data.description}</p>
              <a href="#" className={styles.exploreBtn}>
                Explore Our Services
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* expore trends sec */}

      {props.data &&
        props.data.subcategories &&
        props.data.subcategories.map((subcategory, index) =>
          (index + 1) % 7 == 0 ? (
            <div className={styles.multimediaSec}>
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className={styles.imgaeOuterWrap}>
                      <ImagePreview data={subcategory.banners} />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className={styles.multimediaWrap}>
                      <h2 className={styles.trendhead}>{subcategory.title}</h2>
                      <p>{subcategory.description}</p>
                      <Link href="#">
                        <a className={styles.exploreTrendsBtnn}>
                          EXPLORE TRENDS
                        </a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (index + 1) % 6 == 0 ? (
            <div className={styles.gameTrendsSec}>
              <Container>
                <Row className={styles.trendsMobdirection}>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <ImagePreview data={subcategory.banners} />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className={styles.TrendsOuter}>
                      <h3 className={styles.trendsHeading}>
                        {subcategory.title}
                      </h3>
                      <p className={styles.TrendSubHeading}>
                        {subcategory.description}
                      </p>
                      <Link href="#">
                        <a className={styles.exploreTrends}>Explore Trends</a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (index + 1) % 5 == 0 ? (
            <div className={styles.gameTrendsSec}>
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className={styles.trendsWrap}>
                      <h3 className={styles.trendsHeading}>
                        {subcategory.title}
                      </h3>
                      <p className={styles.TrendSubHeading}>
                        {subcategory.description}
                      </p>
                      <Link href="#">
                        <a className={styles.exploreTrends}>Explore Trends</a>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <ImagePreview data={subcategory.banners} />
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (index + 1) % 4 == 0 ? (
            <div className={styles.scienceTrendsSec}>
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} sm={12} md={6} xs={12}>
                    <ImagePreview data={subcategory.banners} />
                  </Col>
                  <Col lg={6} sm={12} md={6} xs={12}>
                    <h3 className={styles.trendsHeading}>
                      {subcategory.title}
                    </h3>
                    <p className={styles.TrendSubHeading}>
                      {subcategory.description}
                    </p>
                    <Link href="#">
                      <a className={styles.exploreTrends}>Explore Trends</a>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (index + 1) % 3 == 0 ? (
            <div className={styles.mobileTrendsSec}>
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className={styles.trendsContent}>
                      <h3 className={styles.trendsHeading}>
                        {subcategory.title}
                      </h3>
                      <p className={styles.TrendSubHeading}>
                        {subcategory.description}
                      </p>
                      <Link href="#">
                        <a className={styles.exploreTrends}>Explore Trends</a>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className={styles.imageWrapper}>
                      <ImagePreview data={subcategory.banners} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (index + 1) % 2 == 0 ? (
            <div className={styles.exploreTrendsSec}>
              <Container>
                <Row className={styles.trendsMobdirection}>
                  <Col lg={6} md={6} sm={12} xs={12} className="p-0">
                    <ImagePreview data={subcategory.banners} />
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className={styles.trendsContent}
                  >
                    <div className={styles.trendsWrap}>
                      <h3 className={styles.trendsHeading}>
                        {subcategory.title}
                      </h3>
                      <p className={styles.TrendSubHeading}>
                        {subcategory.description}
                      </p>
                      <Link href="#">
                        <a className={styles.exploreTrends}>Explore Trends</a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (
            <div className={styles.exploreTrendsSec}>
              <Container>
                <Row className="align-items-center">
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className={styles.trendsBgImage}
                  >
                    <div className={styles.trendsWrap}>
                      <h3 className={styles.trendsHeading}>
                        {subcategory.title}
                      </h3>
                      <p className={styles.TrendSubHeading}>
                        {subcategory.description}
                      </p>
                      <Link href="#">
                        <a className={styles.exploreTrends}>Explore Trends</a>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12} className="p-0">
                    <ImagePreview data={subcategory.banners} />
                  </Col>
                </Row>
              </Container>
            </div>
          )
        )}
    </div>
  );
};

export default CategoryContent;

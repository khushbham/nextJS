import React, { useState, useEffect } from "react";
import styles from "./popularcategory.module.css";
import { Container, Row, Col, Card, CardImg, Spinner } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import columnPic from "../../public/images/Layer 33.webp";

const PopularCategories = (props) => {
  return (
    <Container fluid className="pt-5 pb-5">
      {/* <Row>
        <Col lg="12" md="12" sm="12" col="12">
          <h2 className={styles.Popularheading}>Our Categories</h2>
        </Col>
      </Row> */}
      <Row className="mt-3 popularcategories">
        {props.data &&
          props.data.subcategories &&
          props.data.subcategories.map((subcategory, index) => (
            <Col lg="3" md="4" sm="6" col="12" key={index} >
              <Link href={`/trend/`}>
                <Card className={styles.categoryWrap}>
                  <Image src={columnPic} alt="column" />
                  <h3 className={styles.categorytitles}>
                    {subcategory.title}
                  </h3>
                  {/* <p className={styles.categoryname}>Computer</p> */}
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default PopularCategories;

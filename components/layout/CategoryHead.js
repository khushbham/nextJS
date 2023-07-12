import React, { useState } from "react";
import styles from "./category.module.css";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const CategoryHead = (props) => {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row className="align-items-center" style={{ padding: "5px" }}>
        <Col lg="6" md="6" sm="12" col="12">
          <h1 className={styles.categoryHead}>
            {props.data && props.data.title}
          </h1>
          <p className={styles.categorysubhead}>
            {" "}
            {props.data && props.data.description}
          </p>
        </Col>
        <Col
          lg="6"
          md="6"
          sm="12"
          col="12"
          className={styles.SideImageBanner + " text-center p-3"}
          style={{ backgroundColor: "#4a4a4a", border: "white" }}
        >
          <a className={styles.tabsOuter + " nav-link"}>
            {props.data && props.data.banners && props.data.banners.length > 0 && (
              <Image
                //loader={imageLoader}
                className={styles.cardImage}
                src={props.data.banners[0]}
                alt="inspire"
                width={360}
                height={360}
              />
            )}
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default CategoryHead;

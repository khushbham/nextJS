import React, { useState } from "react";
import styles from "./subcategory.module.css";
import { Container, Row, Col, Card, CardImg, Spinner } from "reactstrap";

const SubCategoryBanner = () => {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row className="align-items-center" style={{ padding: "5px" }}>
        <Col lg="6" md="6" sm="12" col="12">
          <h1 className={styles.subcategoryHead}>Computer</h1>
          <p className={styles.subcategorysubhead}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil.
          </p>
        </Col>
        <Col
          lg="6"
          md="6"
          sm="12"
          col="12"
          className={styles.subcategoryImageBanner}
        >
          <img
            src="../images/tab-images.webp"
            alt="tab-img"
            className={styles.subcategorybannerImg}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default SubCategoryBanner;

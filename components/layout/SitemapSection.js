import React, { useState, useEffect } from "react";
import styles from "./sitemap.module.css";
import { Container, Row, Col, Card } from "reactstrap";
import Link from "next/link";

const SitemapSection = () => {
  return (
    <>
      <Container fluid className={styles.sitemapwrapper}>
        <Row>
          <Col lg="1" md="1" sm="12" col="12">
            
          </Col>
          <Col lg="10" md="10" sm="12" col="12">
            <Container fluid className={styles.mainwhitewrapper}>
                <Row>
                    <Col lg="4" md="4" sm="12" col="12">
                        <ul className={styles.sitemap_links_area}>
                            <li className={styles.bold_txt_head}>Latest Trends</li>
                            <li><Link href="/">Lorem Ipsum</Link></li>
                            <li><Link href="/">Dolor sit</Link></li>
                            <li><Link href="/">Consectetur</Link></li>
                            <li><Link href="/">Nam vel</Link></li>
                            <li><Link href="/">Morbi condimentum</Link></li>
                        </ul>
                    </Col>
                    <Col lg="4" md="4" sm="12" col="12">
                        <ul className={styles.sitemap_links_area}>
                            <li className={styles.bold_txt_head}>Latest Categories</li>
                            <li><Link href="/">Lorem Ipsum</Link></li>
                            <li><Link href="/">Dolor sit</Link></li>
                            <li><Link href="/">Consectetur</Link></li>
                            <li><Link href="/">Nam vel</Link></li>
                            <li><Link href="/">Morbi condimentum</Link></li>
                        </ul>
                    </Col>
                    <Col lg="4" md="4" sm="12" col="12">
                        <ul className={styles.sitemap_links_area}>
                            <li className={styles.bold_txt_head}>Latest Sub Categories</li>
                            <li><Link href="/">Lorem Ipsum</Link></li>
                            <li><Link href="/">Dolor sit</Link></li>
                            <li><Link href="/">Consectetur</Link></li>
                            <li><Link href="/">Nam vel</Link></li>
                            <li><Link href="/">Morbi condimentum</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </Col>
          <Col lg="1" md="1" sm="12" col="12">
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SitemapSection;

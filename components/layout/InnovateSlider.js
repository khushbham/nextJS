import styles from "./innovateslider.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
const InnovateSlider = () => {
  return (
    <div className={styles.InnovateSlidersec}>
      <Container>
        <Row>
          <Col lg="9" md="12" sm="12" col="12" className="m-auto arroww-wrap">
            <div className={styles.InnovateSliderContent}>
              <p className={styles.suHeading}>
                We bring you global consumer trends, insights, and innovations
                to inspire and enable a better tomorrow.
              </p>
              <div className="text-center">
                <Link href="/culture-compass">
                  <a className={styles.ReadBtn}>Read More</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InnovateSlider;

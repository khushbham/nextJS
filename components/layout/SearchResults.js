import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Alert,
} from "reactstrap";
import styles from "./searchresults.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { MdViewModule, MdViewList } from "react-icons/md";
import { useRouter } from "next/router";
import { InspirationRecords } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
const SearchResults = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { s } = router.query;
  const [gridselected, setGridSelected] = useState("col-lg-3 col-md-3 col-12");
  const [isgridActive, setGridActive] = useState("gridrow");
  const [cardclass, setCardClass] = useState("gridcards");
  const [data, setData] = useState([]);
  const [apiHit, setApiHit] = useState(false);
  const toggleGridClass = () => {
    setGridSelected("col-lg-3 col-md-3 col-12");
    setGridActive("gridrow");
    setCardClass("gridcards");
  };

  const toggleListClass = () => {
    setGridSelected("col-lg-12 col-md-12 col-12");
    setGridActive("listrow");
    setCardClass("listcards");
  };

  useEffect(() => {
    var filterData = {};
    filterData.search_keyword = s;
    dispatch(InspirationRecords(filterData)).then((res) => {
      if (res && res.success) {
        setData(res.data);
      }
      setApiHit(true);
    });
  }, [s]);
  return (
    <>
      <Container
      // className={styles.searchreswrapper}
      >
        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="py-5">
            {s ? (
              <h3 className={styles.srchresultstitle}>
                {" "}
                Search results for :{" "}
                <span className={styles.srchkeyword}>{decodeURI(s)}</span>
              </h3>
            ) : (
              <h3 className={styles.srchresultstitle}> All Trends</h3>
            )}
            <Button className={styles.gridbutton} onClick={toggleGridClass}>
              <MdViewModule />
            </Button>
            <Button className={styles.listbutton} onClick={toggleListClass}>
              <MdViewList />
            </Button>
          </Col>
        </Row>
        <Row className={`${isgridActive} mb-3`}>
          {data &&
            data.length > 0 &&
            data.map((singleTrend, index) => (
              <Col className={gridselected + " mt-2 mb-2"} key={index}>
                <Link href={`/trend/${singleTrend.slug}`}>
                  <Card className={cardclass}>
                    <div className="image_section">
                      <Image
                        className={styles.cardImage}
                        src={singleTrend.featured_images[0]}
                        alt="inspire"
                        width={500}
                        height={400}
                      />
                    </div>
                    <CardBody className={styles.serchcardbody}>
                      <CardTitle className={styles.serchtitle} tag="h5">
                        {singleTrend.title}
                      </CardTitle>
                      <CardText className={styles.serchtext}>
                        {singleTrend.review_summary}
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          {apiHit && data.length == 0 && (
            <Col>
              <Alert color="primary">Opps ! No Search Result Found ..</Alert>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default SearchResults;

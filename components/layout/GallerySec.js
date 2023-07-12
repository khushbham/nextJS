import React, { useState, useEffect } from "react";
import styles from "./gallery.module.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiFillDislike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { Container, Row, Col, Card, CardImg, Spinner } from "reactstrap";
import { InspirationRecords, saveTrend } from "../../redux/action/frontend";
import { connect } from "react-redux";
import Image from "next/image";
import Link from "next/link";
const GallerySec = (props) => {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [trendChanged, setTrendChanged] = useState(false);
  console.log('props', props);
  useEffect(() => {
    var filterData = {};
    if(props && props.category_ids){
      filterData.category_id = props.category_ids
    }
    props.InspirationRecordsData(filterData).then((res) => { 
      //console.log(res);
      if (res && res.success) {
        setData(res.data);
        setShowLoader(false);
      }
    });
  }, []);
  // const saveTrendFunction = () => {
  //   props.saveTrend().then(res => {
  //     if(res && res.success){
  //       setTrendChanged(!trendChanged)
  //     }
  //   })
  // }
  return showLoader ? (
    <Container fluid>
      {/* <Row className="text-center">
        <Col>
          <Spinner animation="border" />
        </Col>
      </Row> */}
    </Container>
  ) : (
    <div className={styles.GallerySec}>
      <div className={data.length > 8 ? `grid-container` : `grid-container_${data.length}`}>
        {data.length > 0 &&
          data.map(
            (singleTrend, index) =>
              index < 8 && (
                <Link
                  className={styles.sitebtn}
                  href={`/trend/${singleTrend.slug}`}
                >
                  <div
                    className={`grid-item`}
                    style={{
                      backgroundImage: `url(${singleTrend.featured_images[0]})`,
                      backgroundSize: index == 3 && "contain",
                    }}
                  >
                    {/* <Image
                        className={styles.cardImage}
                        src={singleTrend.featured_images[0]}
                        alt="inspire"
                        top
                        width={100}
                        height={100}
                      /> */}
                    <p className="single_trend_title_unique">
                      {singleTrend.title}
                    </p>
                    <div className={styles.fireIcon}>
                        <img src="../images/Fire.svg" alt="icon" />
                        <span className={styles.fireText}>
                          <p>{Number(singleTrend.score) * 10}%</p>
                        </span>
                      </div>
                  </div>
                </Link>
              )
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //data: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  InspirationRecordsData: (formData) => dispatch(InspirationRecords(formData)),
  saveTrendData: (formData) => dispatch(saveTrend(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GallerySec);

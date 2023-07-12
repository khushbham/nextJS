import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import styles from "./userlikedtrends.module.css";
import Link from "next/link";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import UserStat from "../RightSidebar/UserStats";
import TopViewedCategories from "../RightSidebar/TopViewedCategories";
import { getMyLikedTrends } from "../../../../redux/action/frontend";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const LikedTrendsContent = () => {
  const dispatch = useDispatch();
  const [trends, setTrends] = useState([]);
  const [page, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(getMyLikedTrends(currentPage)).then((res) => {
      if (res && res.success) {
        setTrends(res.data.returnData);
        setTotalPages(res.data.totalPagesCount);
      }
    });
  }, [currentPage]);
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          <Col lg={12} md={12} xs={12} sm={12}>
            <h5>
              <strong>
                Your Liked Trends{" "}
                <span className={styles.likedtrends_icon}>
                  <BiLike />
                </span>
              </strong>
            </h5>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="mt-3 mb-5">
          <Col lg={8} md={8} xs={12} sm={12}>
            <Row className="mt-3 mb-3">
              {trends &&
                trends.length > 0 &&
                trends.map((trend, index) => (
                  <Col
                    lg={3}
                    md={6}
                    xs={12}
                    sm={12}
                    className={styles.margin_bottom_columns}
                    key={index}
                  >
                    <Card className={styles.user_liked_cards}>
                      <div className={styles.liked_trends_cards_image}>
                        <Link href={`/trend/${trend.slug}`}>
                          <Image
                            className={styles.cardImage}
                            src={trend.featured_images[0]}
                            alt="inspire"
                            width={500}
                            height={400}
                          />
                        </Link>
                      </div>

                      <CardBody>
                        <CardTitle
                          tag="h5"
                          className={styles.user_liked_cards_title}
                        >
                          <Link href={`/trend/${trend.slug}`}>
                            {trend.title}
                          </Link>
                        </CardTitle>
                        <ul className={styles.categoryList}>
                          {trend?.category_ids.map((category, i) => (
                            <li
                              className={`${styles.user_liked_cards_category} mb-2 text-muted ${styles.subheading}`}
                              key={i}
                            >
                              {" "}
                              {category.title}
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
            </Row>
            {page > 1 && (
              <Row className="mt-3 mb-5">
                <Col lg={12} md={12} xs={12} sm={12}>
                  <div className={styles.pagination_area_trends}>
                    <Pagination className={styles.pagination_area_nav}>
                      <PaginationItem onClick={() => setCurrentPage(1)}>
                        <PaginationLink first href="#" />
                      </PaginationItem>
                      <PaginationItem onClick={() => setCurrentPage(currentPage > 1 ? currentPage-1 : currentPage)}>
                        <PaginationLink href="#" previous />
                      </PaginationItem>
                      {Array.from(Array(page), (e, i) => {
                        return (
                          <PaginationItem onClick={e => setCurrentPage(i+1)}>
                            <PaginationLink href="#">{i+1}</PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      <PaginationItem onClick={() => setCurrentPage(currentPage+1 <= page ? currentPage+1 : page)}>
                        <PaginationLink href="#" next />
                      </PaginationItem>
                      <PaginationItem onClick={() => setCurrentPage(page)}>
                        <PaginationLink href="#" last />
                      </PaginationItem>
                    </Pagination>
                  </div>
                </Col>
              </Row>
            )}
          </Col>
          <Col lg={4} md={4} xs={12} sm={12}>
            <UserStat />
            <div className="mt-5">
              <TopViewedCategories />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LikedTrendsContent;

import React, { useState, useEffect } from "react";
import styles from "./form.module.css";
import stylesForCommentPopup from "./single.module.css";

import {
  Row,
  Col,
  FormGroup,
  Input,
  Alert,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

import reviewStyle from "./review.module.css";
import { FaHeart } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import { useDispatch } from "react-redux";
const CommentForm = (props) => {
  const dispatch = useDispatch();
  //const [commentListing, setCommentListing] = useState([]);
  const [formData, setFormData] = useState({
    comment: "",
    trend_id: props.trend_id,
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <h1 className={styles.formhead}>Leave a Comment</h1>
        <Row>
          <Col lg="12" md="12" sm="12" col="12">
            <form
              className={styles.formInnner}
              onSubmit={(e) => props.handleSubmit(e, props.commentFormData)}
            >
              <Row>
                <Col lg="12" md="12" sm="12" col="12">
                  <FormGroup>
                    <Input
                      id="comment"
                      name="comment"
                      type="textarea"
                      placeholder="Message"
                      value={props.commentFormData.comment}
                      className={styles.fields}
                      onChange={(e) => props.onChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="12" col="12" className="mt-4">
                  <Button
                    type="submit"
                    id="Popover4"
                    className={styles.postBtn}
                  >
                    Post Comment
                  </Button>
                  <Popover
                    placement="bottom"
                    isOpen={props.popoverOpen4}
                    target="Popover4"
                    toggle={() => props.popover4Function()}
                  >
                    <PopoverBody>
                      <div>
                        <div className="popup-inner">
                          <div className={stylesForCommentPopup.popupHead}>
                            <h2>Want to add comment?</h2>
                            <p>Sign in to make your opinion count.</p>
                          </div>
                          <div className={stylesForCommentPopup.SignInBtn}>
                            <Link
                              href={`/signin?redirect_success=${window.location}`}
                            >
                              Sign in
                            </Link>
                          </div>
                        </div>
                      </div>
                    </PopoverBody>
                  </Popover>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
      <div className="reviewWrap">
        <Row>
          <Col lg="12" md="12" sm="12" col="12">
            {props.commentListing &&
              props.commentListing.length > 0 &&
              props.commentListing.map((comment, index) => (
                <Row key={index} className="my-3">
                  {console.log(comment)}
                  <Col lg="1" md="1" sm="12" col="12" className="">
                    <img
                      src="/images/review1.png"
                      alt="reviews"
                      className={reviewStyle.clientImg}
                    />
                  </Col>
                  <Col
                    lg="11"
                    md="11"
                    sm="12"
                    col="12"
                    className={reviewStyle.ReviewBorder}
                  >
                    <div className={reviewStyle.addmore}>
                      <h3 className={reviewStyle.reviewhead}>
                        {comment._id.commentedBy.username}{" "}
                        <span className={reviewStyle.text}>
                          ·{" "}
                          {comment._id.created_at &&
                            comment._id.created_at.split("T")[0]}{" "}
                        </span>
                      </h3>
                      {/* <p>
                        <MdMoreHoriz />
                      </p> */}
                    </div>
                    <p className={reviewStyle.reviewtext}>
                      {comment._id.comment}
                    </p>
                    {/* <Row>
                      <Col lg="6" md="6" sm="12" col="12">
                        <div className={reviewStyle.icons}>
                          <div>
                            <a href="#">
                              <FaHeart />{" "}
                              <span className={reviewStyle.rating}>
                                {comment._id.totalNumberOflikes}
                              </span>
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <AiFillDislike />
                              <span className={reviewStyle.rating}>
                                {comment._id.totalNumberOfDislikes}
                              </span>
                            </a>
                          </div>
                        </div>
                      </Col>

                      <Col lg="6" md="6" sm="12" col="12" className="text-end">
                        <a href="#" className={reviewStyle.replybtn}>
                          Reply
                        </a>
                      </Col>
                    </Row> */}
                  </Col>
                  {comment.allreplies &&
                    comment.allreplies.length > 0 &&
                    comment.allreplies.map((reply, i) => (
                      <Row className={reviewStyle.rowOuter}>
                        <Col
                          lg="1"
                          md="1"
                          sm="12"
                          col="12"
                          className="text-center"
                        >
                          <img
                            src="/images/review2.png"
                            alt="reviews"
                            className={reviewStyle.clientImg}
                          />
                        </Col>
                        <Col lg="11" md="11" sm="12" col="12">
                          <div className={reviewStyle.addmore}>
                            <h3 className={reviewStyle.reviewhead}>
                              Truelock Alric{" "}
                              <span className={reviewStyle.text}>
                                · October 24, 2021{" "}
                              </span>
                            </h3>
                            <p>
                              <MdMoreHoriz />
                            </p>
                          </div>
                          <p className={reviewStyle.reviewtext}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras non turpis tellus. Duis sed efficitur
                            mauris. Sed lobortis est dolor, eu commodo lorem
                            egestas id. Mauris tincidunt justo ac est dictum
                            bibendum. Duis blandit arcu eget odio venenatis
                            imperdiet. Vivamus sed vehicula eros. In cursus
                            auctor magna, in dictum sem sollicitudin sed.
                          </p>
                          <Row>
                            <Col lg="6" md="6" sm="12" col="12">
                              <div className={reviewStyle.icons}>
                                <div>
                                  <a href="#">
                                    <FaHeart />{" "}
                                    <span className={reviewStyle.rating}>
                                      100
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a href="#">
                                    <AiFillDislike />
                                    <span className={reviewStyle.rating}>
                                      0
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </Col>

                            <Col
                              lg="6"
                              md="6"
                              sm="12"
                              col="12"
                              className="text-end"
                            >
                              <a href="#" className={reviewStyle.replybtn}>
                                Reply
                              </a>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    ))}
                </Row>
              ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CommentForm;

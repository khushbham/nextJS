import React, { useEffect, useState } from "react";
import styles from "./single.module.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import { BsBookmark, BsFillBookmarkFill, BsWhatsapp } from "react-icons/bs";
import { HiShare } from "react-icons/hi";
import PostSlider from "./PostSlider";
import CommentForm from "./CommentForm";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import { Container, Row, Col, Spinner, Progress } from "reactstrap";
import { FcDownload } from "react-icons/fc";
import Cookies from "js-cookie";
import { GiMale } from "react-icons/gi";
import { GiFemale } from "react-icons/gi";
import { FaTransgenderAlt } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import html2canvas from "html2canvas";
import dynamic from "next/dynamic";
import MainCampus from "./MainCampus";
import GallerySec from "../GallerySec";

//import Charts from "./Charts";
import {
  InspirationRecords,
  trendInfo,
  saveTrend,
  likeTrend,
  dislikeTrend,
  activityOnTrend,
  addComment,
  viewComment,
  one_sidebar_ads,
} from "../../../redux/action/frontend";
import { connect } from "react-redux";
import descriptionStyles from "./Postdesc.module.css";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { API_URL } from "../../../redux/action/types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Link from "next/link";
import { jsPDF } from "jspdf";

import ReactHtmlParser from "react-html-parser";
const ENDPOINT = API_URL;
let socket;
const SingleDescriptionSec = (props) => {
  const [room, setRoom] = useState("");
  const [commentListing, setCommentListing] = useState([]);

  const { user } = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  const [data, setData] = useState({});
  const [compassIndexes, setCompassIndexes] = useState([]);
  const [category_ids, setcategory_ids] = useState();
  const [sidebardata, setsidebardata] = useState();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [popoverOpen3, setPopoverOpen3] = useState(false);
  const [popoverOpen4, setPopoverOpen4] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [userId, setUserId] = useState(Cookies.get("userId"));

  const [trendInfoState, setTrendTnfoState] = useState({
    regions: [],
    genders: [],
    age_group: [],
    culture_compass: [],
    format: [],
  });
  const [activityDataState, setActivityDataState] = useState({
    like: false,
    saveTocollection: false,
    totalComments: 0,
    totalLikes: 0,
    totalUnlikes: 0,
    unlike: false,
  });

  const [commentFormData, setCommentFormData] = useState({
    comment: "",
    //trend_id: props.trend_id,
  });
  const onChange = (e) => {
    setCommentFormData({ ...commentFormData, [e.target.name]: e.target.value });
  };

  const [trendId, setTrendId] = useState(null);
  const [socialUrl, setSocialUrl] = useState(
    "http://app.codeit.cloud/" + props.slug
  );
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch(ENDPOINT);
    socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("connectToRoom", (msg) => {
      setRoom(msg);
    });
    socket.on("trend_liked", (data) => {
      props
        .activityOnTrendHandler({
          trend_id: data.trend_id,
          user_id: userId,
        })
        .then((activityData) => {
          if (activityData && activityData.success) {
            setActivityDataState(activityData.data);
          }
        });
    });
    socket.on("trend_disliked", (data) => {
      props
        .activityOnTrendHandler({
          trend_id: data.trend_id,
          user_id: userId,
        })
        .then((activityData) => {
          if (activityData && activityData.success) {
            setActivityDataState(activityData.data);
          }
        });
    });
    socket.on("get_new_comment", (data) => {
      props.viewCommentData(data).then((newComment) => {
        if (newComment && newComment.success) {
          console.log(newComment);
          //setCommentListing((prevState) => [...prevState, data.data]);
          setCommentListing(newComment.data);
          //setActivityDataState(activityData.data);
        }
      });
    });
  };
  const onChangeHandler = () => {
    if (user && user.data) {
      setPopoverOpen(false);

      socket.emit("trend_liked", {
        room: room,
        msg: "someone clicked button of this trend",
        user_id: user.data._id,
        trend_id: trendId,
      });
    }
  };
  const popover4Function = () => {
    setPopoverOpen(false);
    setPopoverOpen2(false);
    setPopoverOpen3(false);
    setPopoverOpen4(!user && !popoverOpen4);
  };
  const onDislikeChangeHandler = () => {
    if (user && user.data) {
      setPopoverOpen2(false);
      socket.emit("trend_disliked", {
        room: room,
        msg: "someone clicked button of this trend",
        user_id: user.data._id,
        trend_id: trendId,
      });
    }
  };
  useEffect(() => {
    if (props.slug) {
      props.InspirationRecordsData({ slug: props.slug }).then((res) => {
        if (res && res.success) {
          setData(res.data);
          var compassData = res?.data?.culture_compass.filter((d) => {
            return d != 1;
          });
          // if(compassData.includes(1)){
          //   var index = compassData.indexOf(1);
          //   var filteredArray = compassData.splice(index, 1);
          //   setCompassIndexes(filteredArray)
          // }else{
          //   setCompassIndexes(compassData)

          // }
          setCompassIndexes(compassData);

          setcategory_ids(res.data?.category_ids.map((res) => res._id));
          if (res.data && res.data._id) {
            socket.emit("createRoom", res.data._id);

            setTrendId(res.data._id);
            var recentViewed = Cookies.get("recentViewed");
            var alreadyExists = false;
            if (recentViewed) {
              recentViewed = JSON.parse(recentViewed);
              // console.log("recentViewed", recentViewed);
              recentViewed.filter((value) => {
                if (value.slug == props.slug) {
                  //alreadyExists = true;
                  const index = recentViewed.indexOf(value);
                  if (index > -1) {
                    // only splice array when item is found
                    recentViewed.splice(index, 1); // 2nd parameter means remove one item only
                  }
                }
              });

              // if (recentViewed.filter((value) => value == obj).length > 0) {
              // }
            }
            //if (!alreadyExists) {
            if (!recentViewed) {
              recentViewed = [];
            }
            recentViewed.splice(0, 0, {
              slug: res.data.slug,
              title: res.data.title,
              featured_images: res.data.featured_images[0],
            });

            const getCokkieResult = localStorage.getItem("cokkies");
            if (getCokkieResult == "true") {
              Cookies.set("recentViewed", JSON.stringify(recentViewed));
            }
            //}
          }

          setShowLoader(false);
        }
      });
    }
  }, [props.slug]);

  useEffect(() => {
    const formdata = {
      categoryIds: category_ids,
    };
    props.sidebar_ads(formdata).then((res) => {
      setsidebardata(res.data);
    });
  }, [category_ids]);

  useEffect(() => {
    props.trendInfoData().then((res) => {
      if (res && res.success) {
        setTrendTnfoState(res.data);
      }
    });
  }, []);
  useEffect(() => {
    if (trendId) {
      //setTimeout(() => {
      props
        .activityOnTrendHandler({
          trend_id: trendId,
          user_id: user ? user.data._id : null,
        })
        .then((activityData) => {
          if (activityData && activityData.success) {
            setActivityDataState(activityData.data);
            setUserId(user ? user.data._id : null);
          }
        });
      //}, 1000);
    }
  }, [trendId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .addCommentData({ comment: commentFormData.comment, trend_id: trendId })
      .then((res) => {
        if (res && res.success) {
          socket.emit("add_comment", {
            room: room,
            data: res.data,
            //user_id: user.data._id,
            trend_id: trendId,
          });
          setCommentFormData({ ...commentFormData, ["comment"]: "" });
        }
      });
  };
  useEffect(() => {
    if (trendId) {
      var filters = {};
      filters.trend_id = trendId;
      filters.pageNo = 1;
      //setTimeout(() => {
      props.viewCommentData(filters).then((res) => {
        if (res && res.success) {
          setCommentListing(res.data);
        }
      });
    }

    //},15000);
  }, [trendId]);

  const createPdf = (title) => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    html2canvas(document.getElementById("page-content")).then(function (
      canvas
    ) {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      // doc.setFontSize(20);
      doc.text(title, 35, 25);
      doc.addImage(imgData, "JPEG", 35, 35, 230, 130);
      doc.save("trend-card.pdf");
    });
  };

  return showLoader ? (
    <Container fluid>
      {/* <Row className="text-center">
        <Col>
          <Spinner animation="border" />
        </Col>
      </Row> */}
    </Container>
  ) : (
    <div className={styles.DescriptionWrap}>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n ul.thumbs {\n    padding-left: 0px;\n    display: flex;\n    justify-content: center;\n}\n.SinglePost{\nposition: relative;\n}\nul.thumbs.animated {\n    position: absolute;\n    bottom: 9px;\n    left: 0;\n    right: 0;\n}\n @media only screen and (max-width:767px){\n ul.thumbs{\n position: unset !important;\n}\n } ",
        }}
      />
      <Container fluid className={styles.SingleContainerWrap}>
        <Row>
          <Col lg="9" md="12" sm="12" col="12" className={styles.innerRow}>
            <h1 className={styles.heading}>{data.title}</h1>
            <ul className={styles.categoryList}>
              {data.category_ids.map((category, i) => (
                <li className={styles.subheading} key={i}>
                  {" "}
                  {category.title}
                </li>
              ))}
            </ul>

            <Row>
              <Col
                lg="12"
                md="12"
                sm="12"
                col="12"
                className={styles.postDetailWrap}
              >
                <Row className="align-items-center mb-4">
                  <Col lg="6" md="6" sm="12" col="12">
                    <div className={styles.Profile}>
                      <div className={styles.profileWrap}>
                        <Image
                          src={data.author && data.author.profile_image}
                          alt="profile"
                          height={"58px"}
                          width={"58px"}
                        />
                      </div>
                      <div className={styles.custinfo}>
                        <p className={styles.Name}>
                          {data.author && data.author.first_name}
                        </p>
                        <p className={styles.Desc}>
                          {data.created_at.split("T")[0]}{" "}
                          <span className={styles.blogTime}>
                            {" "}
                            {data.read_time} Min read
                          </span>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    md="6"
                    sm="12"
                    col="12"
                    className={styles.descriptionSocialLinks}
                  >
                    <ul className={styles.iconsListt + " " + styles.likePopup}>
                      {!user ? (
                        <>
                          <li id="Popover1">
                            <a
                              //onClick={() => onChangeHandler()}
                              className={
                                activityDataState.like && styles.active
                              }
                            >
                              <BsFillSuitHeartFill />
                              <span className={styles.iconstext}>
                                {activityDataState.totalLikes}
                              </span>
                            </a>
                          </li>
                          <Popover
                            placement="bottom"
                            isOpen={popoverOpen}
                            target="Popover1"
                            toggle={() => {
                              setPopoverOpen(!popoverOpen);
                              setPopoverOpen2(false);
                              setPopoverOpen3(false);
                              setPopoverOpen4(false);
                            }}
                          >
                            <PopoverBody>
                              <div>
                                <div className="popup-inner">
                                  <div className={styles.popupHead}>
                                    <h2>Like this trend?</h2>
                                    <p>Sign in to make your opinion count.</p>
                                  </div>
                                  <div className={styles.SignInBtn}>
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
                          <li id="Popover2">
                            <a
                              //onClick={() => onDislikeChangeHandler()}
                              className={
                                activityDataState.unlike && styles.active
                              }
                            >
                              <AiFillDislike />
                              <span className={styles.iconstext}>
                                {activityDataState.totalUnlikes}
                              </span>
                            </a>
                          </li>
                          <Popover
                            placement="bottom"
                            isOpen={popoverOpen2}
                            target="Popover2"
                            toggle={() => {
                              setPopoverOpen2(!popoverOpen2);
                              setPopoverOpen3(false);
                              setPopoverOpen(false);
                              setPopoverOpen4(false);
                            }}
                          >
                            <PopoverBody>
                              <div>
                                <div className="popup-inner">
                                  <div className={styles.popupHead}>
                                    <h2>Don't like this trend?</h2>
                                    <p>Sign in to make your opinion count.</p>
                                  </div>
                                  <div className={styles.SignInBtn}>
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
                        </>
                      ) : (
                        <>
                          <li>
                            <a
                              onClick={() => onChangeHandler()}
                              className={
                                activityDataState.like && styles.active
                              }
                            >
                              <BsFillSuitHeartFill />
                              <span className={styles.iconstext}>
                                {activityDataState.totalLikes}
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              onClick={() => onDislikeChangeHandler()}
                              className={
                                activityDataState.unlike && styles.active
                              }
                            >
                              <AiFillDislike />
                              <span className={styles.iconstext}>
                                {activityDataState.totalUnlikes}
                              </span>
                            </a>
                          </li>
                        </>
                      )}
                      <li>
                        <a href="#">
                          <span className={styles.iconstext}>
                            {" "}
                            <FaEye /> {data.views_count_start_from}{" "}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href={`#comment_section`}>
                          <BsChatSquareDots />
                          <span className={styles.iconstext}>
                            {activityDataState.totalComments}
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul className={styles.iconsListt1}>
                      {!user ? (
                        <li id="Popover3">
                          <a
                            className={
                              activityDataState.saveTocollection &&
                              styles.active
                            }
                          >
                            <BsBookmark />
                          </a>
                          <Popover
                            placement="bottom"
                            isOpen={popoverOpen3}
                            target="Popover3"
                            toggle={() => {
                              setPopoverOpen3(!popoverOpen3);
                              setPopoverOpen2(false);
                              setPopoverOpen(false);
                              setPopoverOpen4(false);
                            }}
                          >
                            <PopoverBody>
                              <div>
                                <div className="popup-inner">
                                  <div className={styles.popupHead}>
                                    <h2>Want to save this trend?</h2>
                                    <p>
                                      Sign in to add this trend in your
                                      collection.
                                    </p>
                                  </div>
                                  <div className={styles.SignInBtn}>
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
                        </li>
                      ) : (
                        <li>
                          <a
                            onClick={() => {
                              props
                                .saveTrendHandler({ trend_id: data._id })
                                .then((res) => {
                                  if (res && res.success) {
                                    props
                                      .activityOnTrendHandler({
                                        trend_id: data._id,
                                        user_id: user && user.data._id,
                                      })
                                      .then((activityData) => {
                                        if (
                                          activityData &&
                                          activityData.success
                                        ) {
                                          setActivityDataState(
                                            activityData.data
                                          );
                                        }
                                      });
                                  }
                                });
                            }}
                            className={
                              activityDataState.saveTocollection &&
                              styles.active
                            }
                          >
                            {activityDataState.saveTocollection ? (
                              <BsFillBookmarkFill />
                            ) : (
                              <BsBookmark />
                            )}
                          </a>
                        </li>
                      )}
                      <li className={styles.exploreMoreLinks}>
                        <a href="#">
                          <HiShare />
                        </a>
                        <ul className={styles.blogLinks}>
                          <li>
                            <TwitterShareButton
                              className="social-share-links"
                              url={socialUrl}
                            >
                              <BsTwitter />
                            </TwitterShareButton>
                          </li>

                          <li>
                            <FacebookShareButton
                              className="social-share-links"
                              url={socialUrl}
                            >
                              <FaFacebookF />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <WhatsappShareButton
                              className="social-share-links"
                              url={socialUrl}
                            >
                              <BsWhatsapp />
                            </WhatsappShareButton>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Col>
                </Row>
                {data?.format == 3 && (
                  <iframe
                    width="100%"
                    height="650"
                    src={data?.video_link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      marginBottom: "20px",
                    }}
                  ></iframe>
                )}
                {data?.format == 2 && (
                  <audio controls>
                    <source src={data?.video_link} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
                {(data?.format == 1 || data?.format == 4) && (
                  <PostSlider images={data.featured_images} />
                )}
                <div className={descriptionStyles.PostDescriptionWrap}>
                  <div id="page-content" className={styles.campusContentWrap}>
                    <div className={descriptionStyles.cultureCampus}>
                      <Row className="align-items-center">
                        <Col lg="3" md="3" sm="12" col="12">
                          <div
                            className={
                              descriptionStyles.CulturefireIcon + " mb-3"
                            }
                          >
                            <div className={descriptionStyles.imageOuter}>
                              <img
                                src="../images/Fire.svg"
                                alt="icon"
                                height={"130px"}
                                width={"150px"}
                              />
                            </div>
                            <span className={descriptionStyles.fireText}>
                              <p>{data.score * 10}%</p>
                            </span>
                            <span className={styles.scoreText}>
                              <p>Score</p>
                            </span>
                          </div>
                          {compassIndexes.length > 0 && (
                            <MainCampus
                              link={props.slug}
                              compassMatrics={compassIndexes}
                              trendInfoState={trendInfoState.culture_compass}
                            />
                          )}
                        </Col>
                        <Col lg="9" md="9" sm="12" col="12">
                          <Row className={descriptionStyles.main_desc_roww}>
                            <Col lg="11" md="11" sm="12" col="12">
                              <div
                                className={
                                  descriptionStyles.main_description_area_single
                                }
                              >
                                {/* <h2 className={descriptionStyles.CompasssHead}>
                                  Culture Compass Insights
                                </h2> */}
                                <p
                                  className={descriptionStyles.insights_descrii}
                                >
                                  <b>Insights:</b> Video games have metaverse
                                  tendencies where players can build their own
                                  world. Additionally, cryptocurrencies are part
                                  of the metaverse experience. Virtual and
                                  augmented reality are metaverse adjacent too.
                                  When it comes to how the Metaverse will evolve
                                  as well as which businesses and companies fail
                                  and succeed within it, Gen Z are the
                                  trendsetters. This generation is the best
                                  example of how new users and operators will
                                  adapt to the Metaverse-creating technologies
                                  as they develop.
                                </p>

                                <div
                                  className={descriptionStyles.blw_divider}
                                ></div>

                                <div
                                  className={descriptionStyles.insights_info}
                                >
                                  <Row>
                                    <Col xl="5" lg="6" md="12" sm="12" col="12">
                                      <div
                                        className={
                                          descriptionStyles.gender_info
                                        }
                                      >
                                        <b>Gender:</b>{" "}
                                        {data.gender.map((gender, index) => (
                                          <span
                                            className={`${descriptionStyles.viewList} gender_fnt`}
                                          >
                                            {index == 0 && <GiFemale />}
                                            {index == 1 && <GiMale />}
                                            {index == 2 && <FaTransgenderAlt />}
                                            {
                                              trendInfoState.genders[gender]
                                            }{" "}
                                          </span>
                                        ))}
                                      </div>

                                      <div
                                        className={
                                          descriptionStyles.descrp_geography
                                        }
                                      >
                                        <b>Geography:</b>{" "}
                                        {data.geography.map((element) => (
                                          <span
                                            className={
                                              descriptionStyles.viewList
                                            }
                                          >
                                            {trendInfoState.regions[element]}{" "}
                                          </span>
                                        ))}
                                      </div>
                                    </Col>
                                    <Col xl="7" lg="6" md="12" sm="12" col="12">
                                      <div
                                        className={descriptionStyles.age_info}
                                      >
                                        <b>Age Group:</b>{" "}
                                        {data.age_group.map((element) => (
                                          <span
                                            className={
                                              descriptionStyles.age_info_spn
                                            }
                                          >
                                            {trendInfoState.age_group[element]}{" "}
                                          </span>
                                        ))}
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className={styles.progress_bar_row}>
                                    <Col lg="6" md="6" sm="12" col="12">
                                      <div
                                        className={
                                          styles.progress_bar_popularity
                                        }
                                      >
                                        <p>
                                          <b>Popularity:</b>
                                        </p>
                                        <div className="d-flex align-items-center">
                                          <Progress
                                            style={{
                                              height: "12px",
                                            }}
                                            color="success"
                                            value={data.popularity * 10}
                                            className="progrss_bar"
                                          ></Progress>
                                          {Math.round(data.popularity, 2) * 10}%
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" col="12">
                                      <div
                                        className={`${styles.progress_bar_popularity}`}
                                      >
                                        <p>
                                          <b>Inventiveness:</b>
                                        </p>
                                        <div className="d-flex align-items-center">
                                          <Progress
                                            style={{
                                              height: "12px",
                                            }}
                                            color="success"
                                            value={data.inventiveness * 10}
                                            className="progrss_bar"
                                          ></Progress>
                                          {Math.round(data.inventiveness, 2) *
                                            10}
                                          %
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col lg="6" md="6" sm="12" col="12">
                                      <div
                                        className={`${styles.progress_bar_popularity}`}
                                      >
                                        <p>
                                          <b>Engagement:</b>
                                        </p>
                                        <div className="d-flex align-items-center">
                                          <Progress
                                            style={{
                                              height: "12px",
                                            }}
                                            color="success"
                                            value={data.engagement * 10}
                                            className="progrss_bar"
                                          ></Progress>
                                          {Math.round(data.engagement, 2) * 10}%
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" col="12">
                                      <div
                                        className={`${styles.progress_bar_popularity} mb-2`}
                                      >
                                        <p>
                                          <b>Human Centricity:</b>
                                        </p>
                                        <div className="d-flex align-items-center">
                                          <Progress
                                            style={{
                                              height: "12px",
                                            }}
                                            color="success"
                                            value={data.human_centricity * 10}
                                            className="progrss_bar"
                                          ></Progress>
                                          {Math.round(
                                            data.human_centricity,
                                            2
                                          ) * 10}
                                          %
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <p className={descriptionStyles.subHeading}>
                      {ReactHtmlParser(data.summary)}
                    </p>
                  </div>
                  <Row>
                    <div className={styles.rightSec}>
                      <h1 className={styles.RelatedReports}>
                        Related Keywords
                      </h1>
                      <ul>
                        {data.focus_tags_ids &&
                          data.focus_tags_ids.map((tag, index) => (
                            <li key={index}>
                              <a href="#" target="_blank">
                                #{tag.tag_name}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className={styles.rightSec}>
                      <h1 className={styles.RelatedReports}>References</h1>
                      <ul className={styles.referLinks}>
                        {data.reference_links &&
                          data.reference_links.map((reference, index) => (
                            <li key={index}>
                              <a href={reference} target="_blank">
                                {reference}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Row>
                  <Row className="align-items-center">
                    <Col lg="4" sm="4" md="12" col="12">
                      <Button
                        className={descriptionStyles.downloadBtn}
                        onClick={() => createPdf(data.title)}
                      >
                        DOWNLOAD TREND CARD <FcDownload />
                      </Button>
                    </Col>
                  </Row>
                </div>
                <div id="comment_section">
                  <CommentForm
                    trend_id={data._id}
                    handleSubmit={handleSubmit}
                    socket={socket}
                    room={room}
                    commentListing={commentListing}
                    onChange={onChange}
                    commentFormData={commentFormData}
                    popover4Function={popover4Function}
                    popoverOpen4={popoverOpen4}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="3" md="12" sm="12" col="12">
            <div className={styles.ReportsRightSec}>
              <a href={sidebardata?.large_banner_url}>
                <img
                  src={
                    sidebardata?.large_banner
                      ? sidebardata?.large_banner
                      : "/images/advertisebanner.jpg"
                  }
                  alt="img"
                  className={styles.rightImage}
                />
              </a>
              <a href={sidebardata?.small_banner_url}>
                <img
                  src={
                    sidebardata?.small_banner
                      ? sidebardata?.small_banner
                      : "/images/image--1.png"
                  }
                  alt="img"
                  className={styles.advertiseImage}
                />
              </a>

              {sidebardata?.section?.map((res) => {
                return (
                  <div className={styles.relatedReportsSec}>
                    <h1 className={styles.RelatedReports}>
                      {res?.section_title}
                    </h1>
                    {res?.section_link.map((res) => {
                      return (
                        <ul className={styles.proservices}>
                          {res.content_type == 0 ? (
                            <li>
                              <span className={styles.ReportIcons}>
                                <img
                                  src={res?.image_to_use}
                                  alt="servicesIcons"
                                />
                              </span>
                              <a href={res.url}>{res.section_title}</a>
                            </li>
                          ) : (
                            <li>
                              <a href={res.url} className={styles.custmbtn}>
                                {" "}
                                {res.section_title}
                              </a>
                            </li>
                          )}
                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <GallerySec category_ids={category_ids} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //data: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  InspirationRecordsData: (filter) => dispatch(InspirationRecords(filter)),
  trendInfoData: () => dispatch(trendInfo()),
  saveTrendHandler: (formData) => dispatch(saveTrend(formData)),
  likeTrendHandler: (formData) => dispatch(likeTrend(formData)),
  activityOnTrendHandler: (formData) => dispatch(activityOnTrend(formData)),
  dislikeTrendHandler: (formData) => dispatch(dislikeTrend(formData)),
  addCommentData: (formData) => dispatch(addComment(formData)),
  viewCommentData: (filters) => dispatch(viewComment(filters)),
  sidebar_ads: (formData) => dispatch(one_sidebar_ads(formData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleDescriptionSec);

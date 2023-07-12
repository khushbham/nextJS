import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./userstats.module.css";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { FaHeart, FaCrown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";

const UserStat = () => {
  return (
    <>
      <Card className={`${styles.pink_card_info} mb-3`}>
        <CardBody className={styles.subscription_link}>
          <Link href="/user-panel/subscription-plan">
            <div className="d-flex align-self-start justify-content-between">
              <div
                className={`${styles.main_iconbox} d-flex align-items-center`}
              >
                <div className={styles.icon_info}>
                  <FaCrown className={styles.icon_eyeinfo} />
                </div>
                <div className={styles.view_info}>
                  <h5>Your Subscription Plan</h5>
                  <h3>Premium</h3>
                </div>
              </div>
              {/* <div className={styles.small_percentage}>
                    <h6 className={styles.upper_percentinfo}>+10%</h6>
                  </div> */}
            </div>
          </Link>
        </CardBody>
      </Card>

      <Card className={`${styles.seagreen_card_info} mb-3`}>
        <CardBody className={styles.subscription_link}>
          <Link href="/user-panel/reports/annual-reports">
            <div className="d-flex align-self-start justify-content-between">
              <div className="d-flex align-items-center">
                <div className={styles.icon_info}>
                  <FiDownload className={styles.icon_heartinfo} />
                </div>
                <div className={styles.view_info}>
                  <h5>Download previous trends reports</h5>
                  <h3>4530</h3>
                </div>
              </div>
              {/* <div className="">
                    <h6 className={styles.upper_percentinfo}>+20%</h6>
                  </div> */}
            </div>
          </Link>
        </CardBody>
      </Card>

      <Card className={`${styles.violet_card_info}`}>
        <CardBody>
          <div className="d-flex align-self-start justify-content-between">
            <div className="d-flex align-items-center">
              <div className={styles.icon_info}>
                <BsFillEyeFill className={styles.icon_notifyinfo} />
              </div>
              <div className={styles.view_info}>
                <h5>Upcoming Event</h5>
                <h3>27 Dec, 2022 <br/>at<br/> 9:00 AM to 12:00 PM</h3>
              </div>
            </div>
            {/* <div className="">
                    <h6 className={styles.upper_percentinfo}>+12%</h6>
                  </div> */}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UserStat;

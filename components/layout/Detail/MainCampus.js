import React from "react";
import styles from "./Campus.module.css";
import { IoMdRocket } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { GiSeaStar } from "react-icons/gi";
import { GiTargetShot } from "react-icons/gi";
import { MdOutlineSportsHandball } from "react-icons/md";
import { useRouter } from "next/router";
import { SITE_URL } from "../../../redux/action/types";
export default function MainCampus(props) {
  const router = useRouter();
  function focus() {
    //document.getElementById("m_arrow").classList.toggle(styles.spinFocus);
    //document.getElementById("n_arrow").classList.toggle(styles.downSpinReflect);
    //document.getElementById("n_arrow").classList.toggle(styles.spinDare);
    // document.getElementById("n_arrow").classList.toggle(styles.spinLeap);
    // document.getElementById("m_arrow").classList.remove(styles.spinSpark);
    document.getElementById("m_arrow").classList.toggle(styles.spinReflect);
    //document.getElementById("m_arrow").classList.remove(styles.spinReflect);
  }
  const rediectToCompassDetailPage = (s) => {
    var url = SITE_URL + "culture-compass?s=" + s;
    router.push(url);
  };
  const compassArray = [
    "",
    "",
    styles.spinReflect,
    styles.spinDare,
    styles.spinLeap,
    styles.spinSpark,
  ];
  const compassDownArray = [
    "",
    "",
    styles.downSpinReflect,
    styles.downSpinDare,
    styles.downSpinleap,
    styles.downSpinSpark,
  ];
  return (
    <div>
      <div className={styles.compass}>
        <div className={styles.compassInner}>
          <div
            className={styles.reflectBtn}
            onClick={() => rediectToCompassDetailPage("leap")}
          >
            <IoMdRocket />
          </div>
          <div
            className={styles.dareBtn}
            onClick={() => rediectToCompassDetailPage("focus")}
          >
            <GiTargetShot />
          </div>
          <div
            className={styles.leapBtn}
            onClick={() => rediectToCompassDetailPage("dare")}
          >
            <MdOutlineSportsHandball />
          </div>
          <div
            className={styles.sparkBtn}
            onClick={() => rediectToCompassDetailPage("reflect")}
          >
            <AiFillHeart />
          </div>
          <div
            className={styles.focusBtn}
            onClick={() => rediectToCompassDetailPage("spark")}
          >
            <GiSeaStar />
          </div>
          {console.log("compassMatrics", props.compassMatrics)}
          <div className={styles.mainArrow}>
            <div
              className={
                styles.arrowUp + " " + compassArray[props.compassMatrics[0]]
              }
              id="m_arrow"
            ></div>
            {props.compassMatrics.length > 1 && (
              <div
                className={
                  styles.arrowDown + " " + compassDownArray[props.compassMatrics[1]]
                }
                id="n_arrow"
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

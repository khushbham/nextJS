import React, { useEffect, useState } from "react";
import { Card, CardBody, Tooltip } from "reactstrap";
import Image from "next/image";
import styles from "./topviewedcategories.module.css";
import { BsSuitHeartFill, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { categoryRecords } from "../../../../redux/action/frontend";
import { useDispatch } from "react-redux";

function TooltipItem(props) {
  const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <li id={"Tooltip-" + id}>{item}</li>
      <Tooltip
        placement={"bottom"}
        isOpen={tooltipOpen}
        target={"Tooltip-" + id}
        toggle={toggle}
      >
        {item}
      </Tooltip>
    </>
  );
}
const TopViewedCategories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    dispatch(categoryRecords()).then((res) => {
      if (res && res.success) {
        setCategories(res.data);
      }
    });
  }, []);
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className={styles.top_categories_title}>Top Viewed Categories</h3>
        <div className={styles.side_arrow_icons}>
          <Link href="/">
            <BsArrowRight />
          </Link>
        </div>
      </div>
      {categories.map((category, index) => (
        <div className={`${styles.main_liked_trends_cards} mt-3`}>
          <Card className={styles.liked_trends_cards}>
            <Link
              href={"/dedicated-category/" + category.slug}
              className={styles.tabsOuter}
            >
              <CardBody className={styles.liked_trends_cardbody}>
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className={`${styles.mainliked_imagebox} d-flex align-items-center`}
                  >
                    <div
                      className={(index+1)%2 == 0 ? styles.image_left_info : styles.image_left_info + " " +styles.image_left_info_even}
                    >
                      {category.banners.length > 0 && (
                        <Image
                          //loader={imageLoader}
                          className={styles.cardImage}
                          src={category.banners[0]}
                          alt="categoryImage"
                          width={36}
                          height={36}
                        />
                      )}
                    </div>
                    <div className={styles.likedtext_info}>
                      <h5>
                        {category.title}
                      </h5>
                      <ul className={styles.likedlist_info}>
                        <TooltipItem
                          key={index}
                          item={category.description}
                          id={index}
                        />
                      </ul>
                    </div>
                  </div>
                  <div className={styles.liked_heart_info}>
                    <p className={styles.upper_percentinfo}>
                      <BsSuitHeartFill />
                    </p>
                  </div>
                </div>
              </CardBody>
            </Link>
          </Card>
        </div>
      ))}
    </>
  );
};

export default TopViewedCategories;

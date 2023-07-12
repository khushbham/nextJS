var React = require("react");
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import sliderStyle from "../inspiration.module.css";
var PostSlider = (props) => {
  //render() {
  return (
    <div className={sliderStyle.SinglePost}>
      <Carousel
        showArrows={true}
        showIndicators={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              className={sliderStyle.btnPositions}
              type="button"
              onClick={onClickHandler}
              style={{
                position: "absolute",
                zIndex: "9999",
                background: "#fff",
                padding: "10px",
                borderRadius: "5px 0px 0px 5px",
                border: "0",
                bottom: "16rem",
                right: "0",
              }}
            >
              <img
                src="../images/next.png"
                alt="arrow"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              className={sliderStyle.btnnextPositions}
              type="button"
              onClick={onClickHandler}
              style={{
                position: "absolute",
                bottom: "13rem",
                right: "0px",
                zIndex: "9999",
                border: "0",
                background: "#fff",
                padding: "10px",
                borderRadius: "5px 0px 0px 5px",
              }}
            >
              <img
                src="../images/left-chevron.png"
                alt="arrow"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          )
        }
      >
        {props.images &&
          props.images.length > 0 &&
          props.images.map((image, index) => (
            <div key={index}>
              <img
                //loader={imageLoader}
                className={sliderStyle.cardImage}
                src={image}
                alt="inspire"
              />
            </div>
          ))}
      </Carousel>
      
    </div>
  );
  //},
};

export default PostSlider;

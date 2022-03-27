import React from "react";
import { ReactComponent as Rank1 } from "images/rank-1.svg";
import { ReactComponent as Rank2 } from "images/rank-2.svg";
import { ReactComponent as Rank3 } from "images/rank-3.svg";
import { ReactComponent as Rank4 } from "images/rank-4.svg";
import { ReactComponent as Rank5 } from "images/rank-5.svg";
import { ReactComponent as Rank6 } from "images/rank-6.svg";
import { ReactComponent as Rank7 } from "images/rank-7.svg";
import { ReactComponent as Rank8 } from "images/rank-8.svg";
import { ReactComponent as Rank9 } from "images/rank-9.svg";
import { ReactComponent as Rank10 } from "images/rank-10.svg";
import { useDispatch } from "react-redux";

export default function Card(props) {
  const svgRank = (index) => {
    if (index == 0) {
      return <Rank1 />;
    } else if (index == 1) {
      return <Rank2 />;
    } else if (index == 2) {
      return <Rank3 />;
    } else if (index == 3) {
      return <Rank4 />;
    } else if (index == 4) {
      return <Rank5 />;
    } else if (index == 5) {
      return <Rank6 />;
    } else if (index == 6) {
      return <Rank7 />;
    } else if (index == 7) {
      return <Rank8 />;
    } else if (index == 8) {
      return <Rank9 />;
    } else if (index == 9) {
      return <Rank10 />;
    }
  };

  const setModalAndIdx = () => {
    props.setIndex(props.index);
    props.setModal(true);
  };

  return (
    <div
      key={props.name}
      name={props.name}
      className="slider-item"
      onMouseOver={setModalAndIdx}
    >
      <div className={`title-card-container css-0`}>
        <div className="title-card">
          <div className="ptrack-content">
            <a href="/" className="slider-refocus">
              <div
                className={`boxart-container boxart-rounded ${
                  props.top10 ? "boxart-size-7x10" : "boxart-size-16x9"
                }`}
              >
                {props.top10 && svgRank(props.index)}
                <img
                  className="boxart-image-in-padded-container"
                  src={`${props.content.thumbnailUrl}`}
                />
                <div className="fallback-text-container">
                  <p className="fallback-text">{props.content.title}</p>
                </div>
              </div>
              <div className="click-to-change-JAW-indicator">
                <div className="bob-jawbone-chevron">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-chevron-down"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="bob-container"></div>
        </div>
      </div>
    </div>
  );
}

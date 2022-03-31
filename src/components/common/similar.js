import React from "react";
import { ReactComponent as ModalAddToMyList } from "images/addToMyList-modal.svg";
import { ReactComponent as ModalThumbsDownFilled } from "images/thumbsdownfilled-modal.svg";
import { ReactComponent as ModalThumbsUpFilled } from "images/thumbsupfilled-modal.svg";
import AddList from "./addlist";

export default function Similar(props) {
  return (
    <div className="title-card-container more-like-this-item">
      <div className="title-card-image-wrapper has-duration">
        <div className="ptrack-content">
          <img src={props.contents.thumbnailUrl} />
        </div>
        <div className="title-card-play-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="title-card-playSVG"
          >
            <path
              d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <span className="duration ellipsized">
          <span className="test-dur-string">
            {props.contents.type == "S"
              ? `시즌 ${props.contents.seasonsCount}개`
              : props.contents.runningTime}
          </span>
        </span>
      </div>
      <div className="title-card-metadata-wrapper">
        <div className="video-metadata-container-container">
          <div className="video-metadata-container title-card-video-metadata video-metadata-two-lines">
            <div className="video-metadata-first-line">
              <span className="match-score-wrapper">
                <div className="show-match-score rating-inner">
                  <div className="meta-thumb-container thumb-down">
                    <ModalThumbsDownFilled />
                  </div>
                  <div className="meta-thumb-container thumb-up">
                    <ModalThumbsUpFilled />
                  </div>
                  <span className="match-score">
                    {props.contents.percentage} 일치
                  </span>
                </div>
              </span>
            </div>
            <div className="video-metadata-second-line">
              <div className="year">{props.contents.productionYear}</div>
              <span className="maturity-rating">
                <span>15+</span>
              </span>
            </div>
          </div>
          <div>
            <AddList content={props.contentIdx} />
          </div>
        </div>
        <p className="title-card-synopsis preview-modal-small-text">
          <div className="ptrack-container">
            <div className="ptrack-content">{props.contents.summary}</div>
          </div>
        </p>
      </div>
    </div>
  );
}

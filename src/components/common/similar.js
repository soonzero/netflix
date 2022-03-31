import React from "react";
import { ReactComponent as ThumbsDownSVG } from "images/thumbsdownfilled.svg";
import { ReactComponent as ThumbsUpFilledSVG } from "images/thumbsupfilled.svg";
import { ReactComponent as PlaySVG } from "images/play.svg";
import AddList from "./addlist";

export default function Similar(props) {
  return (
    <div className="title-card-container more-like-this-item">
      <div className="title-card-image-wrapper has-duration">
        <div className="ptrack-content">
          <img src={props.contents.thumbnailUrl} />
        </div>
        <div className="title-card-play-icon">
          <PlaySVG />
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
                    <ThumbsDownSVG />
                  </div>
                  <div className="meta-thumb-container thumb-up">
                    <ThumbsUpFilledSVG />
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
                <span>{props.contents.ageRate}+</span>
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

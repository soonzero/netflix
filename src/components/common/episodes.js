import React from "react";
import { ReactComponent as PlaySVG } from "images/playwithborder.svg";

export default function Episodes(props) {
  return (
    <div className="title-card-list-container episode-item">
      <div className="title-card-title-index">
        {props.contents.episodeNumber}
      </div>
      <div className="title-card-image-wrapper">
        <div className="ptrack-content">
          <img src={props.contents.thumbnailUrl} />
        </div>
        <div className="title-card-play-icon">
          <PlaySVG />
        </div>
      </div>
      <div className="title-card-list-metadata-wrapper">
        <div className="title-card-list-title">
          <span className="title-card-title-text">
            {props.contents.episodeTitle}
          </span>
          <span>
            <span className="duration ellipsized">
              {props.contents.runningTime}
            </span>
          </span>
        </div>
        <p className="title-card-synopsis preview-modal-small-text">
          <div className="ptrack-content">{props.contents.summary}</div>
        </p>
      </div>
    </div>
  );
}

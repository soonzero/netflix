import React from "react";

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

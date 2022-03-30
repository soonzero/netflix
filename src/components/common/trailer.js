import React from "react";
import { ReactComponent as ModalPlay } from "images/play-modal.svg";

export default function Trailer(props) {
  return (
    <div className="title-card-container trailers-and-more-item">
      <div className="title-card-image-wrapper">
        <div className="ptrack-content">
          <img src={props.content.thumbnailUrl} />
        </div>
        <div className="title-card-play-icon">
          <ModalPlay />
        </div>
      </div>
      <div className="title-card-metadata-wrapper">
        <div className="title-card-title">
          <span className="title-card-title-text">{props.content.title}</span>
        </div>
      </div>
    </div>
  );
}

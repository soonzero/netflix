import React from "react";
import axios from "axios";
import { ReactComponent as ThumbSVG } from "images/thumb.svg";
import { ReactComponent as ThumbsDownSVG } from "images/thumbsdown.svg";
import { ReactComponent as ThumbsUpSVG } from "images/thumbsup.svg";
import { ReactComponent as ThumbsWayUpSVG } from "images/thumbswayup.svg";
import { ReactComponent as ThumbsDownFilledSVG } from "images/thumbsdownfilled.svg";
import { ReactComponent as ThumbsUpFilledSVG } from "images/thumbsupfilled.svg";
import { ReactComponent as ThumbsCloseSVG } from "images/thumbclose.svg";

export default function LikeContents(props) {
  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");

  // Functions
  const controlLike = (index) => {
    if (props.like == 0) {
      likeContent(index);
      if (props.hate == 1) {
        unhateContent(index);
      }
    } else if (props.like == 1) {
      unlikeContent(index);
    }
  };

  const controlHate = (index) => {
    if (props.hate == 0) {
      hateContent(index);
      if (props.like == 1) {
        unlikeContent(index);
      }
    } else if (props.hate == 1) {
      unhateContent(index);
    }
  };

  const likeContent = async (index) => {
    try {
      const like = await axios({
        method: "POST",
        url: "/likehate/likes",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: profileIdx,
          contentIdx: index,
        },
      });
      console.log(like);
    } catch (e) {
      console.log(e);
    }
  };

  const unlikeContent = async (index) => {
    try {
      const unlike = await axios({
        method: "PATCH",
        url: "/likehate/likes",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: profileIdx,
          contentIdx: index,
        },
      });
      console.log(unlike);
    } catch (e) {
      console.log(e);
    }
  };

  const hateContent = async (index) => {
    try {
      const hate = await axios({
        method: "POST",
        url: "/likehate/hates",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: profileIdx,
          contentIdx: props.content,
        },
      });
      console.log(hate);
    } catch (e) {
      console.log(e);
    }
  };

  const unhateContent = async (index) => {
    try {
      const unhate = await axios({
        method: "PATCH",
        url: "/likehate/hates",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: profileIdx,
          contentIdx: index,
        },
      });
      console.log(unhate);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="thumb-button">
      <button className="color-supplementary has-icon round thumb-button-wrapper">
        <div className="circle-button-container">
          <div className="small circle-button-svg-container">
            {props.like == 1 ? (
              <ThumbsUpFilledSVG />
            ) : props.hate == 1 ? (
              <ThumbsDownFilledSVG />
            ) : (
              <ThumbSVG />
            )}
          </div>
        </div>
      </button>
      <div className="thumbs-selection-overlay-container thumbs-selection-container">
        <div className="thumbs-selection-menu">
          <div>
            <div className="thumbs-button">
              <div className="thumb-in-thumb">
                <button
                  className="color-supplemental small round thumbs-down-button"
                  onClick={() => controlHate(props.content)}
                >
                  <ThumbsDownSVG />
                </button>
              </div>
              <div className="thumb-in-thumb">
                <button className="color-supplemental small round thumbs-up-button">
                  <ThumbsUpSVG />
                </button>
              </div>
              <div className="thumb-in-thumb">
                <button
                  className="color-supplemental small round thumbs-way-up-button"
                  onClick={() => controlLike(props.content)}
                >
                  <ThumbsWayUpSVG />
                </button>
              </div>
            </div>
            <div className="thumbs-close-button">
              <button className="color-supplemental small has-icon round thumbs-close-button-container">
                <div className="circle-button-container">
                  <div className="small circle-button-svg-container">
                    <ThumbsCloseSVG />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

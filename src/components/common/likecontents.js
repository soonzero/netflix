import React from "react";
import { ReactComponent as ModalThumb } from "images/thumb-modal.svg";
import { ReactComponent as ModalThumbsDown } from "images/thumbsdown-modal.svg";
import { ReactComponent as ModalThumbsUp } from "images/thumbsup-modal.svg";
import { ReactComponent as ModalThumbsWayUp } from "images/thumbswayup-modal.svg";
import { ReactComponent as ModalThumbsDownFilled } from "images/thumbsdownfilled-modal.svg";
import { ReactComponent as ModalThumbsUpFilled } from "images/thumbsupfilled-modal.svg";
import axios from "axios";

export default function LikeContents(props) {
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");

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
              <ModalThumbsUpFilled />
            ) : props.hate == 1 ? (
              <ModalThumbsDownFilled />
            ) : (
              <ModalThumb />
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
                  <ModalThumbsDown />
                </button>
              </div>
              <div className="thumb-in-thumb">
                <button className="color-supplemental small round thumbs-up-button">
                  <ModalThumbsUp />
                </button>
              </div>
              <div className="thumb-in-thumb">
                <button
                  className="color-supplemental small round thumbs-way-up-button"
                  onClick={() => controlLike(props.content)}
                >
                  <ModalThumbsWayUp />
                </button>
              </div>
            </div>
            <div className="thumbs-close-button">
              <button className="color-supplemental small has-icon round thumbs-close-button-container">
                <div className="circle-button-container">
                  <div className="small circle-button-svg-container">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                        fill="currentColor"
                      ></path>
                    </svg>
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

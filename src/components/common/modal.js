import React from "react";
import { ReactComponent as ModalClose } from "images/close-modal.svg";
import { ReactComponent as ModalPlay } from "images/play-modal.svg";
import { ReactComponent as ModalThumb } from "images/thumb-modal.svg";
import { ReactComponent as ModalThumbsDown } from "images/thumbsdown-modal.svg";
import { ReactComponent as ModalThumbsUp } from "images/thumbsup-modal.svg";
import { ReactComponent as ModalThumbsWayUp } from "images/thumbswayup-modal.svg";
import { ReactComponent as ModalAddToMyList } from "images/addToMyList-modal.svg";
import { ReactComponent as ModalAdded } from "images/added-modal.svg";
import { ReactComponent as ModalDetail } from "images/detail-modal.svg";
import { ReactComponent as ModalThumbsDownFilled } from "images/thumbsdownfilled-modal.svg";
import { ReactComponent as ModalThumbsUpFilled } from "images/thumbsupfilled-modal.svg";
import { ReactComponent as Red18 } from "images/red-18.svg";
import styled from "styled-components";
import axios from "axios";
import { ModalStyle } from "./styled";

const BackDropStyle = styled.div`
  opacity: 0.7;
  display: block;

  .preview-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
  }
`;

export default function Modal(props) {
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const profileIdx = JSON.parse(sessionStorage.getItem("selectedProfile"));
  const modalStyle = props.modal == "mini" ? "mini-modal" : "detail-modal";

  const positionX = (index) => {
    if (index == 0) {
      return "100px";
    } else if (index == 5) {
      return "-100px";
    } else {
      return "0";
    }
  };

  const selectAdded = async (index) => {
    try {
      const check = await axios({
        method: "GET",
        url: `/my-list/check`,
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
      console.log(check.data.result);
      // if (check.data.result == 1) {
      //   return <ModalAdded />;
      // } else {
      //   return <ModalAddToMyList />;
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const addToMyList = async (index) => {
    try {
      const add = await axios({
        method: "POST",
        url: "/my-list",
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
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMyList = async (index) => {
    try {
      const deleted = await axios({
        method: "PATCH",
        url: "my-list",
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
      console.log(deleted.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <ModalStyle>
        <div
          className={`focus-trap-wrapper preview-modal-wrapper has-smaller-buttons ${modalStyle}`}
        >
          <div
            className={`preview-modal-container has-smaller-buttons ${modalStyle}`}
            onMouseLeave={() => props.setModal()}
            style={{
              width: props.modal == "mini" ? "595px" : "850px",
              top:
                props.modal == "mini" ? `${1028 + 388 * props.row}px` : `2em`,
              left:
                props.modal == "mini" ? `${-40 + 407 * props.index}px` : `auto`,
              transformOrigin:
                props.modal == "mini" ? "center center" : "50% 12.5%",
              transform:
                props.modal == "mini"
                  ? `translateX(${positionX(
                      props.index
                    )}) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)`
                  : "none",
              zIndex: props.modal == "mini" ? "2" : "3",
              opacity: "1",
              boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
              marginBottom: props.modal == "mini" ? "0" : "2em",
              minWidth: props.modal == "mini" ? "unset" : "850px",
            }}
          >
            <div
              className={`preview-modal-player-container has-smaller-buttons ${modalStyle}`}
            >
              <div
                className="video-merch-player-boxart-wrapper"
                style={{
                  position: `${props.modal == "mini" ? "static" : "absolute"}`,
                }}
              >
                {props.modal == "mini" && (
                  <img
                    className="preview-modal-boxart"
                    style={{ opacity: "0" }}
                    src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
                  />
                )}
                <img
                  style={{ display: "none" }}
                  src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
                />
                {props.modal == "mini" && (
                  <img
                    className="preview-modal-boxart"
                    style={{ opacity: "1" }}
                    src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
                  />
                )}
              </div>
              {props.modal == "detail" && (
                <div className="story-art detail-modal has-smaller-buttons">
                  <img
                    className="player-modal-player-story-art detail-modal has-smaller-buttons"
                    src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdY5i3vL3kouiyFbiGstbEtWDXNUvQDbQ-KcWQfYHxil_SnklbRB1jyR-uHuqljzA-0SE4-9CIwMxVp_AqiIiXe5VFaw.webp?r=720"
                    style={{ opacity: "1" }}
                  />
                  <img
                    src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdY5i3vL3kouiyFbiGstbEtWDXNUvQDbQ-KcWQfYHxil_SnklbRB1jyR-uHuqljzA-0SE4-9CIwMxVp_AqiIiXe5VFaw.webp?r=720"
                    style={{ display: "none" }}
                  />
                </div>
              )}
              <div style={{ opacity: "1" }}>
                <div
                  className="preview-modal-player-title-treatment-wrapper"
                  style={{ opacity: "1" }}
                >
                  <div
                    className={`preview-modal-player-title-treatment-left preview-modal-player-title-treatment ${modalStyle} has-smaller-buttons ${modalStyle} has-smaller-buttons`}
                  >
                    {props.modal == "detail" && (
                      <>
                        <img
                          src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYuN1YheNqzVhunPxUtjnU7THv9OczxX5zpVfrLhe8XxbvcQ2XpA0iF4fNjqAGGIrvCg-fiLrvVJayK3xCwq4yX97IK8Wl9doCA.webp?r=8bd"
                          style={{ display: "none" }}
                        />
                        <img
                          className="preview-modal-player-title-treatment-logo"
                          src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYuN1YheNqzVhunPxUtjnU7THv9OczxX5zpVfrLhe8XxbvcQ2XpA0iF4fNjqAGGIrvCg-fiLrvVJayK3xCwq4yX97IK8Wl9doCA.webp?r=8bd"
                          style={{ width: "100%", opacity: "1" }}
                        />
                        <div className="button-controls-container">
                          <a className="primary-button play-link is-toolkit">
                            <button
                              type="button"
                              className="color-primary has-label has-icon square-button"
                            >
                              <div className="circle-button-container">
                                <div className="medium circle-button-svg-container">
                                  <ModalPlay />
                                </div>
                              </div>
                              <div
                                className="space-between"
                                style={{ width: "1rem" }}
                              ></div>
                              <span className="play-button-text">재생</span>
                            </button>
                          </a>
                          <div className="my-list-button">
                            <div className="ptrack-content">
                              <button
                                className="color-supplementary has-icon round circle-button"
                                type="button"
                                onClick={() => addToMyList(props.content)}
                              >
                                <div className="circle-button-container">
                                  <div className="circle-button-svg-container">
                                    <ModalAddToMyList />
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="thumb-button">
                            <button className="color-supplementary has-icon round thumb-button-wrapper">
                              <div className="circle-button-container">
                                <div className="small circle-button-svg-container">
                                  <ModalThumb />
                                </div>
                              </div>
                            </button>
                            <div className="thumbs-selection-overlay-container thumbs-selection-container">
                              <div className="thumbs-selection-menu">
                                <div>
                                  <div className="thumbs-button">
                                    <div className="thumb-in-thumb">
                                      <button className="color-supplemental small round thumbs-down-button">
                                        <ModalThumbsDown />
                                      </button>
                                    </div>
                                    <div className="thumb-in-thumb">
                                      <button className="color-supplemental small round thumbs-up-button">
                                        <ModalThumbsUp />
                                      </button>
                                    </div>
                                    <div className="thumb-in-thumb">
                                      <button className="color-supplemental small round thumbs-way-up-button">
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
                        </div>
                        <div className="button-controls-messaging"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="preview-modal-close">
              <ModalClose />
            </div>
            {props.modal == "mini" ? (
              <div
                className="preview-modal-info"
                style={{ opacity: "1", transform: "none" }}
              >
                <a>
                  <div className="mini-modal-container">
                    <div className="preview-modal-info-container">
                      <div className="preview-modal-metadata-and-controls mini-modal has-smaller-buttons">
                        <div className="preview-modal-metadata-and-controls-container">
                          <div className="button-controls-container mini-modal has-smaller-buttons">
                            <a className="primary-button play-link is-toolkit is-round">
                              <button
                                className="color-primary has-icon round circle-button"
                                type="button"
                              >
                                <div className="circle-button-container">
                                  <div className="small circle-button-svg-container">
                                    <ModalPlay />
                                  </div>
                                </div>
                              </button>
                            </a>
                            <div className="my-list-button">
                              <div className="ptrack-content">
                                <button
                                  type="button"
                                  className="color-supplementary has-icon round circle-button"
                                  onClick={() => addToMyList(props.content)}
                                >
                                  <div className="circle-button-container">
                                    <div className="small circle-button-svg-container">
                                      <ModalAddToMyList />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="thumb-button">
                              <button
                                type="button"
                                className="color-supplementary has-icon round thumb-button-wrapper"
                              >
                                <div className="circle-button-container">
                                  <div className="small circle-button-svg-container">
                                    <ModalThumb />
                                  </div>
                                </div>
                              </button>
                              <div className="thumbs-selection-overlay-container thumbs-selection-container">
                                <div className="thumbs-selection-menu">
                                  <div>
                                    <div className="thumbs-button">
                                      <div className="thumb-in-thumb">
                                        <button
                                          type="button"
                                          className="color-supplemental small round thumbs-down-button"
                                        >
                                          <ModalThumbsDown />
                                        </button>
                                      </div>
                                      <div className="thumb-in-thumb">
                                        <button
                                          type="button"
                                          className="color-supplemental small round thumbs-up-button"
                                        >
                                          <ModalThumbsUp />
                                        </button>
                                      </div>
                                      <div className="thumb-in-thumb">
                                        <button
                                          type="button"
                                          className="color-supplemental small round thumbs-way-up-button"
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
                            <div className="button-controls-expand-button detail-button">
                              <button className="color-supplementary has-icon round circle-button">
                                <div className="circle-button-container">
                                  <div className="small circle-button-svg-container">
                                    <ModalDetail />
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div
                            className="preview-modal-metadata-and-controls-info"
                            style={{ opacity: "1" }}
                          >
                            <div>
                              <div className="video-metadata-container">
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
                                        81% 일치
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="video-metadata-second-line">
                                  <span className="maturity-rating">
                                    <span>
                                      <Red18 />
                                    </span>
                                  </span>
                                  <span className="duration">시즌 2개</span>
                                  <span className="player-feature-badge">
                                    HD
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="preview-modal-metadata-and-controls-tags-container"
                            style={{ opacity: "1" }}
                          >
                            <div className="evidence-list">
                              <div className="evidence-item">
                                <span className="evidence-text">진심 어린</span>
                              </div>
                              <div className="evidence-item">
                                <span className="evidence-separator"></span>
                                <span className="evidence-text">
                                  감정을 파고드는
                                </span>
                              </div>
                              <div className="evidence-item">
                                <span className="evidence-separator"></span>
                                <span className="evidence-text">로맨틱</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div className="preview-modal-info" style={{ opacity: "1" }}>
                <div className="detail-modal-container">
                  <div className="ptrack-container">
                    <div>
                      <div className="preview-modal-details-metadata detail-modal has-smaller-buttons">
                        <div className="preview-modal-details-metadata-left">
                          <div className="preview-modal-details-metadata-info">
                            <div>
                              <div className="video-metadata-container">
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
                                        81% 일치
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="video-metadata-second-line">
                                  <div className="year">2016</div>
                                  <a>
                                    <span className="maturity-rating">
                                      <span>15+</span>
                                    </span>
                                  </a>
                                  <span className="duration">시즌 2개</span>
                                  <span className="player-feature-badge">
                                    HD
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="css-space"></div>
                          <p className="preview-modal-synopsis preview-modal-text">
                            <div className="ptrack-content">
                              천 년 가까이 이어온 생. 불멸의 고통이 극으로
                              치닫는 순간, 그 아이가 왔다. 그토록 기다린 죽음이
                              왔다. 그러나 이를 어이하나. 이젠 그 아이 때문에
                              살고 싶어진 것을.
                            </div>
                          </p>
                        </div>
                        <div className="preview-modal-details-metadata-right">
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              출연:&nbsp;
                            </span>
                            <span className="tag-item">공유,&nbsp;</span>
                            <span className="tag-item">김고은,&nbsp;</span>
                            <span className="tag-item">이동욱,&nbsp;</span>
                            <span className="tag-more">더 보기</span>
                          </div>
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              장르:&nbsp;
                            </span>
                            <span className="tag-item">
                              판타지 시리즈,&nbsp;
                            </span>
                            <span className="tag-item">
                              로맨틱한 드라마,&nbsp;
                            </span>
                            <span className="tag-item">한국 드라마</span>
                          </div>
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              시리즈 특징:&nbsp;
                            </span>
                            <span className="tag-item">설렘주의,&nbsp;</span>
                            <span className="tag-item">로맨틱</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ptrack-container">
                    <div className="ptrack-content">
                      <div className="episode-selector">
                        <div className="episode-selector-header">
                          <h3 className="preview-modal-section-header episode-selector-label">
                            회차
                          </h3>
                          <div className="episode-selector-dropdown"></div>
                          <div className="episode-selector-season-name">
                            시즌1
                          </div>
                        </div>
                        <div className="episode-selector-container">
                          <div className="title-card-list-container episode-item current">
                            <div className="title-card-title-index">1</div>
                            <div className="title-card-image-wrapper">
                              <div className="ptrack-content">
                                <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTYCEwNlJMLAc1HtN5Dstbnr2cifs41lCl3AGmel3JyzFml34KwvmFv0TditkjdK3zRs5g_d91dhZbl0HBC9xI47zYFm8ZH8jyjSK1TSZyPzcmBO.webp?r=d7f" />
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
                                  제1회
                                </span>
                                <span>
                                  <span className="duration ellipsized">
                                    88분
                                  </span>
                                </span>
                              </div>
                              <p className="title-card-synopsis preview-modal-small-text">
                                <div className="ptrack-content">
                                  거듭된 승전보로 백성의 영웅이었던 장군 김신.
                                  간신배의 모함에 처형됐다가 신의 개입으로
                                  환생한다. 그 이후 지긋하게 이어지는 생. 불멸을
                                  끝내려면, 신부를 찾아야 한다.
                                </div>
                              </p>
                            </div>
                          </div>
                          <div className="title-card-list-container episode-item">
                            <div className="title-card-title-index">1</div>
                            <div className="title-card-image-wrapper">
                              <div className="ptrack-content">
                                <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTYCEwNlJMLAc1HtN5Dstbnr2cifs41lCl3AGmel3JyzFml34KwvmFv0TditkjdK3zRs5g_d91dhZbl0HBC9xI47zYFm8ZH8jyjSK1TSZyPzcmBO.webp?r=d7f" />
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
                                  제1회
                                </span>
                                <span>
                                  <span className="duration ellipsized">
                                    88분
                                  </span>
                                </span>
                              </div>
                              <p className="title-card-synopsis preview-modal-small-text">
                                <div className="ptrack-content">
                                  거듭된 승전보로 백성의 영웅이었던 장군 김신.
                                  간신배의 모함에 처형됐다가 신의 개입으로
                                  환생한다. 그 이후 지긋하게 이어지는 생. 불멸을
                                  끝내려면, 신부를 찾아야 한다.
                                </div>
                              </p>
                            </div>
                          </div>
                          <div className="section-divider collapsed">
                            <button className="color-supplementary section-expand-button has-icon round circle-button">
                              <div className="circle-button-container">
                                <div className="small circle-button-svg-container">
                                  <ModalDetail />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ptrack-container">
                    <div className="ptrack-content">
                      <div className="ptrack-container">
                        <div className="more-like-this-wrapper">
                          <h3 className="preview-modal-section-header more-like-this-header">
                            비슷한 콘텐츠
                          </h3>
                          <div
                            className="section-container collapsed"
                            style={{ maxHeight: "65em" }}
                          >
                            <div className="more-like-this-container">
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="title-card-container more-like-this-item">
                                <div className="title-card-image-wrapper has-duration">
                                  <div className="ptrack-content">
                                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4YHLe-H-44Kt1_HqnWSGeW8cAhFk6aVGJkiwJ_NlfShBobFt0_PVw4fwjtjBK79eOywuaYCwq5U02UQOcpPmh4HtA.webp?r=3ad" />
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
                                      시즌 1개
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
                                              97% 일치
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="video-metadata-second-line">
                                        <div className="year">2019</div>
                                        <span className="maturity-rating">
                                          <span>15+</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-list-button">
                                        <div className="ptrack-content">
                                          <button className="color-supplementary has-icon round circle-button">
                                            <div className="circle-button-container">
                                              <div className="small circle-button-svg-container">
                                                <ModalAddToMyList />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="title-card-synopsis preview-modal-small-text">
                                    <div className="ptrack-container">
                                      <div className="ptrack-content">
                                        저승에 가기 전에 꼭 들른다는 망자들의
                                        핫스팟. 성격 괴팍한 사장이 천 년 넘게
                                        영업을 이어가고 있는 호텔 델루나에 새
                                        지배인이 온다. 근데 저기, 산
                                        사람이시라고요?
                                      </div>
                                    </div>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="section-divider collapsed">
                            <button className="color-supplementary section-expand-button has-icon round circle-button">
                              <div className="circle-button-container">
                                <div className="small circle-button-svg-container">
                                  <ModalDetail />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ptrack-container">
                    <div className="ptrack-content">
                      <div className="about-wrapper">
                        <div className="about-header">
                          <h3 className="preview-modal-section-header">
                            <strong>도깨비</strong>&nbsp;상세 정보
                          </h3>
                        </div>
                        <div className="about-container">
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              크리에이터:&nbsp;
                            </span>
                            <span className="tag-item">
                              <a>김은숙,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>이응복</a>
                            </span>
                          </div>
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              출연:&nbsp;
                            </span>
                            <span className="tag-item">
                              <a>공유,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>김고은,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>이동욱,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>유인나,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>육성재,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>이엘,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>조우진,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>정해인,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>황석정</a>
                            </span>
                          </div>
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              장르:&nbsp;
                            </span>
                            <span className="tag-item">
                              <a>판타지 시리즈,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>로맨틱한 드라마,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>한국 드라마,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>드라마</a>
                            </span>
                          </div>
                          <div className="preview-modal-tags">
                            <span className="preview-modal-tags-label">
                              시리즈 특징:&nbsp;
                            </span>
                            <span className="tag-item">
                              <a>설렘주의,&nbsp;</a>
                            </span>
                            <span className="tag-item">
                              <a>로맨틱 </a>
                            </span>
                          </div>
                          <div className="maturity-rating-wrapper">
                            <span className="title">관람등급:</span>
                            <span className="maturity-rating">
                              <a className="maturity-number">15+</a>
                              <p className="maturity-description">
                                15세이상관람가
                              </p>
                            </span>
                          </div>
                          <div className="broadcaster">
                            <div>tvN</div>
                            <div>2016. 12. 2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ModalStyle>
      {props.modal == "detail" && (
        <BackDropStyle>
          <div className="preview-modal-backdrop"></div>
        </BackDropStyle>
      )}
    </>
  );
}

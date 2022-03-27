import React from "react";
import { ReactComponent as ModalClose } from "images/close-modal.svg";
import { ReactComponent as ModalPlay } from "images/play-modal.svg";
import { ReactComponent as ModalThumb } from "images/thumb-modal.svg";
import { ReactComponent as ModalThumbsDown } from "images/thumbsdown-modal.svg";
import { ReactComponent as ModalThumbsUp } from "images/thumbsup-modal.svg";
import { ReactComponent as ModalThumbsWayUp } from "images/thumbswayup-modal.svg";
import { ReactComponent as ModalAddToMyList } from "images/addToMyList-modal.svg";
import { ReactComponent as ModalDetail } from "images/detail-modal.svg";
import { ReactComponent as ModalThumbsDownFilled } from "images/thumbsdownfilled-modal.svg";
import { ReactComponent as ModalThumbsUpFilled } from "images/thumbsupfilled-modal.svg";
import { ReactComponent as Red18 } from "images/red-18.svg";
import styled from "styled-components";

const ModalStyle = styled.div`
  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    background-color: transparent;
  }

  .preview-modal-wrapper {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;

    button.color-primary:not(.has-label) {
      border-width: 2px;
      background-color: white;

      svg {
        width: 2rem;
      }
    }

    button.color-supplementary:not(.has-label) {
      border-width: 2px;
      background-color: rgba(42, 42, 42, 0.6);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }

  .preview-modal-wrapper.has-smaller-buttons {
    button:not(.has-label):not(.dropdown-toggle) {
      min-width: 32px;
      min-height: 32px;
      max-width: 42px;
      max-height: 42px;
    }

    button.color-primary:not(.has-label) {
      svg {
        width: auto;
      }
    }
  }

  .preview-modal-container.mini-modal {
    opacity: 0;
    top: 9999px;
    left: 9999px;

    .preview-modal-player-title-treatment-wrapper {
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.6) 0,
        rgba(0, 0, 0, 0.4) 15%,
        transparent 40%
      );

      .preview-modal-player-title-treatment-left {
        left: 1em;
      }
    }
  }

  .preview-modal-container {
    will-change: transform;
    position: absolute;
    color: white;
    background-color: transparent;
    font-size: 1rem;
    z-index: 2;
    border-radius: 6px;
    overflow: hidden;

    .preview-modal-back,
    .preview-modal-close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: none;
      cursor: pointer;
      margin: 1em;

      svg {
        width: 36px;
        height: 36px;
        background-color: #181818;
        border-radius: 50%;
        padding: 8px;
      }
    }

    .preview-modal-player-title-treatment-wrapper {
      .preview-modal-player-title-treatment-left {
        width: 40%;
        position: absolute;
        bottom: 5%;
        left: 3em;
      }
    }

    .preview-modal-info {
      background-color: #181818;
      position: relative;
    }
  }

  .preview-modal-player-container {
    position: relative;
    background-color: black;
    cursor: pointer;

    .video-merch-player-boxart-wrapper {
      height: 100%;
      width: 100%;
      padding-top: 56.3925%;
    }

    .preview-modal-boxart {
      position: absolute;
      top: 0;
      left: 0;
      background-size: cover;
      height: 100%;
      width: 100%;
    }

    .preview-modal-player-title-treatment-wrapper {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

  .preview-modal-conatiner .preview-modal-info {
    background-color: #181818;
    position: relative;
  }

  .preview-modal-info-container {
    padding: 1em;
    cursor: pointer;
  }

  .preview-modal-metadata-and-controls.mini-modal {
    grid-template-columns: 100%;
  }

  .preview-modal-metadata-and-controls {
    position: relative;
    width: 100%;
    background-color: #181818;
    display: grid;

    .preview-modal-metadata-and-controls-container {
      & > :not(.new-badge) {
        margin-bottom: 0.5em;
      }

      .preview-modal-metadata-and-controls-info {
        margin: 0.8em 0;
      }

      .preview-modal-metadata-and-controls-tags-container {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .button-controls-container {
    display: flex;
    align-items: center;
    min-height: 2em;
    margin-bottom: 1em;

    * {
      margin: 0.25em;
    }
  }

  .circle-button {
    display: flex;
    justify-items: center;
    align-items: center;
    appearance: none;
    cursor: pointer;
    padding: 0.8rem;
    opacity: 1;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    border-radius: 50%;
    border: 2px solid white;
    box-align: center;
    box-pack: center;
    white-space: nowrap;
  }

  .circle-button.has-icon {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  .circle-button.color-primary {
    color: black;
    background-color: white;
  }

  .circle-button-container {
    line-height: 0;
  }

  .circle-button-svg-container.small {
    height: 1.8rem;
    width: 1.8rem;
  }

  .circle-button-svg-container {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  .my-list-button {
    position: relative;
  }

  .thumb-button {
    position: relative;
    z-index: 1;
  }

  .thumb-button-wrapper.round.color-supplementary {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: white;
  }

  .thumb-button-wrapper.has-icon {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  .thumbs-selection-container {
    margin-left: 0.1rem;
    margin-top: -0.1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale3d(0.8, 1, 1);
    transition: opacity 0.1s linear 0s,
      transform 0.3s cubic-bezier(0.5, 0, 0.1, 1) 0s, all 0.2s linear 0s;
    visibility: hidden;
  }

  .thumbs-button {
    width: 13rem;
    background-color: rgb(35, 35, 35);
    border-radius: 3rem;
    box-shadow: rgb(0 0 0 / 60%) 0px 0px 2px 0px,
      rgb(0 0 0 / 50%) 0px 8px 16px 0px;
    display: flex;
    padding: 0.8rem;
    box-pack: justify;
    justify-content: space-between;
    align-items: center;
    box-align: center;

    & > div {
      margin: 0px 0.2rem;
    }
  }

  .thumb-in-thumb {
    position: relative;
  }

  .thumbs-up-button,
  .thumbs-down-button,
  .thumbs-way-up-button {
    display: flex;
    box-align: center;
    justify-content: center;
    align-items: center;
    box-pack: center;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    color: rgb(169, 169, 169);
    outline: none;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    transition: opacity 0.1s linear 0.1s,
      transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
    transform: translateX(1.5rem);
    opacity: 0;
    min-width: inherit !important;
    min-height: inherit !important;

    svg {
      pointer-events: none;
      z-index: 0;
      transform: scale(2) !important;
    }
  }

  .thumbs-up-button {
    opacity: 1;
    transition: opacity 0.1s linear 0.1s,
      transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
    z-index: 1;

    svg {
      pointer-events: none;
      z-index: 0;
      transform: scale(2) !important;
    }
  }

  .thumbs-way-up-button {
    transform: translateX(-1.5rem);
  }
`;

export default function Modal(props) {
  const positionX = (index) => {
    if (index == 0) {
      return "100px";
    } else if (index == 5) {
      return "-100px";
    } else {
      return "0";
    }
  };

  return (
    <ModalStyle>
      <div
        className="focus-trap-wrapper preview-modal-wrapper mini-modal has-smaller-buttons"
        onMouseOut={() => props.setModal(false)}
      >
        <div
          className="preview-modal-container mini modal has-smaller-buttons"
          style={{
            width: "595px",
            top: `${1028 + 388 * props.row}px`,
            left: `${-40 + 407 * props.index}px`,
            transformOrigin: "center center",
            transform: `translateX(${positionX(
              props.index
            )}) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)`,
            zIndex: "3",
            opacity: "1",
            boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
          }}
        >
          <div className="preview-modal-player-container mini-modal has-smaller-buttons">
            <div
              className="video-merch-player-boxart-wrapper"
              style={{ position: "static" }}
            >
              <img
                className="preview-modal-boxart"
                style={{ opacity: "0" }}
                src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
              />
              <img
                className="preview-modal-boxart"
                style={{ opacity: "1" }}
                src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
              />
            </div>
            <div style={{ opacity: "1" }}>
              <div
                className="preview-modal-player-title-treatment-wrapper"
                style={{ opacity: "0" }}
              >
                <div className="preview-modal-player-title-treatment-left preview-modal-player-title-treatment mini-modal has-smaller-buttons mini-modal has-smaller-buttons"></div>
              </div>
            </div>
          </div>
          <div className="preview-modal-close">
            <ModalClose />
          </div>
          <div
            className="preview-modal-info"
            style={{ opacity: "1", transform: "none" }}
          >
            {/* <a href="/">
              <div className="preview-modal-info-container">
                <div className="preview-modal-metadata-and-controls mini-modal has-smaller-buttons">
                  <div className="preview-modal-metadata-and-controls-container">
                    <div className="button-controls-container mini-modal has-smaller-buttons">
                      <a
                        className="primary-button play-link is-toolkit is-round"
                        href="/browse"
                      >
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
                          <button className="color-supplementary has-icon round circle-button">
                            <div className="circle-button-container">
                              <div className="small circle-button-svg-container">
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
                          <div id="thumbs-selection-menu">
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
                              <div className="meta-thumb-container thumb-down">
                                <ModalThumbsDownFilled />
                              </div>
                              <div className="meta-thumb-container thumb-up">
                                <ModalThumbsUpFilled />
                              </div>
                              <span className="match-score">81% 일치</span>
                            </span>
                          </div>
                          <div className="video-metadata-second-line">
                            <span className="maturity-rating">
                              <span>
                                <Red18 />
                              </span>
                            </span>
                            <span className="duration">시즌 2개</span>
                            <span className="player-feature-badge">HD</span>
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
                          <span className="evidence-text"></span>
                        </div>
                        <div className="evidence-item">
                          <span className="evidence-separator"></span>
                          <span className="evidence-text"></span>
                        </div>
                        <div className="evidence-item">
                          <span className="evidence-separator"></span>
                          <span className="evidence-text"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </ModalStyle>
  );
}

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TitleCard from "./titlecard";
import { useEffect } from "react";
import Top10 from "./top10";
import New from "./new";
import ThisWeek from "./thisweek";
import { ReactComponent as DetailInfo } from "images/detailinfo-main.svg";
import { ReactComponent as Play } from "images/play-main.svg";

const MainContainerStyle = styled.span`
  display: block;
  z-index: 0;
  position: relative;

  .billboard-row {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 20px;
    background-color: black;
    padding-bottom: 40%;

    .billboard {
      position: absolute;
      background-color: black;
      width: 100%;
      height: 56.25vw;
      z-index: 0;

      .hero-button {
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        border: 0px;
        border-radius: 4px;
        cursor: pointer;
        padding: 0.7rem;
        position: relative;
        will-change: background-color, color;
        word-break: break-word;
        white-space: nowrap;
        opacity: 1;
      }

      .hero-button.hasLabel.hasIcon {
        padding-left: 1.75rem;
        padding-right: 2.1rem;
      }

      .hero-button.hasIcon {
        padding-left: 1.4rem;
        padding-right: 1.4rem;
      }

      .hero-button.hasLabel {
        padding-left: 2.1rem;
        padding-right: 2.1rem;
      }

      .button-svg-container {
        line-height: 0;

        & > div {
          height: 2.1rem;
          width: 2.1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          & > svg {
            height: 100%;
            width: 100%;
            overflow: hidden;
            fill: none;
          }
        }
      }

      .vignette-layer {
        z-index: 8;
        position: absolute;
        left: 0;
        right: 0;
      }

      .button-layer {
        position: relative;
        z-index: 10;
      }

      .space {
        width: 0.875rem;
        display: flex;
        height: 100%;
        position: relative;
      }

      .button-text {
        display: block;
        font-size: 1.4rem;
        line-height: 2.1rem;
        font-weight: 600;
      }

      .hero-image-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        .hero-static-image {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-position: center center;
          background-size: cover;
          width: 100%;
          opacity: 1;
          z-index: 5;
          transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
        }

        .trailer-vignette {
          position: absolute;
          top: 0;
          left: 0;
          right: 26.09%;
          bottom: 0;
          opacity: 1;
          background: linear-gradient(
            77deg,
            rgba(0, 0, 0, 0.6) 0,
            rgba(0, 0, 0, 0) 85%
          );
          transition: opacity 500ms ease;
        }

        .hero-vignette {
          background-image: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0) 0,
            rgba(20, 20, 20, 0.15) 15%,
            rgba(20, 20, 20, 0.35) 29%,
            rgba(20, 20, 20, 0.58) 44%,
            #141414 68%,
            #141414 100%
          );
          background-size: 100% 100%;
          background-position: 0 top;
          background-repeat: repeat-x;
          background-color: transparent;
          width: 100%;
          height: 14.7vw;
          top: auto;
          bottom: -1px;
          opacity: 1;
        }

        .embedded-components {
          position: absolute;
          right: 0;
          bottom: 35%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;

          .rating {
            border: solid 3px #dcdcdc;
            border-style: none none none solid;
            background-color: rgba(51, 51, 51, 0.6);
            font-size: 1.1vw;
            padding: 0.5vw 3.5vw 0.5vw 0.8vw;
            display: flex;
            align-items: center;
            height: 2.4vw;

            span {
              padding: 0;
              margin: 0;
              color: white;
            }

            svg {
              margin: 0;
              width: 2em;
              height: 2em;
              vertical-align: middle;
              border: 1px solid transparent;
              box-sizing: content-box;
            }
          }
        }
      }

      .fill-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .info {
          position: absolute;
          top: 0;
          bottom: 35%;
          left: 60px;
          width: 36%;
          z-index: 10;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;

          .logo-and-text {
            width: 100%;
            transition: transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1),
              -webkit-transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1),
              -moz-transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1),
              -o-transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);

            .title-wrapper {
              .billboard-title {
                min-height: 13.2vw;
                position: relative;
                margin-bottom: 1.2vw;
                line-height: 1.225;

                .title-logo {
                  width: 100%;
                  transform-origin: bottom left;
                }

                .title-logo.awards {
                  max-width: 100%;
                  height: 13.2vw;
                  width: auto;
                }
              }
            }

            .info-wrapper {
              .info-wrapper-fade {
                .episode-title-container {
                }

                .synopsis {
                  color: white;
                  font-weight: 400;
                  font-size: 1.4vw;
                  line-height: 1.3253348214;
                  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
                  margin-top: 0.1vw;
                  width: 100%;
                }

                .synopsis.nosupplemental {
                  margin: 0.5vw 0 0 0;
                }
              }
            }

            .billboard-links {
              margin-top: 1.5vw;
              white-space: nowrap;
              display: flex;
              line-height: 88%;

              button {
                margin-right: 0.875rem;
                margin-bottom: 0.875rem;
                flex-shrink: 0;
              }

              & > a {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                text-decoration: none;
                color: white;

                .color-first {
                  background-color: white;
                  color: black;
                  padding: 0.7rem;
                  padding-left: 1.75rem;
                  padding-right: 2.1rem;
                  margin-left: 0;
                }
              }

              .color-secondary {
                background-color: rgba(109, 109, 110, 0.7);
                color: white;
              }
            }
          }

          .supplemental-message {
            font-size: 1.6vw;
            color: white;
            transition: color 1s cubic-bezier(0.165, 0.84, 0.44, 1);
            text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
            margin: 1vw 0;
            line-height: 1.4;
          }
        }
      }
    }

    .supplemental-message {
      display: flex;
      align-items: center;
      font-weight: 600;

      & > .svg-icon {
        width: 1.5em;
        height: 1.5em;
        border: solid 1px transparent;
        margin: 0 -1px;
        margin-right: 0.5em;
      }
    }
  }

  .billboard-row.genre {
    .billboard {
      .fill-container {
        .info {
          bottom: 30%;
        }
      }
    }
  }
`;

export default function MainView(props) {
  const [mainContent, setMainContent] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const profileIdx = JSON.parse(sessionStorage.getItem("selectedProfile"));

  const browseType = () => {
    if (props.contents == "main") {
      return "H";
    } else if (props.contents == "series") {
      return "S";
    } else {
      return "M";
    }
  };

  // let randomNumber;
  // if (props.main) {
  //   randomNumber = Math.floor(Math.random() * props.main.length);
  // }

  const getMain = async () => {
    if (isLoading) {
      try {
        const contents = await axios({
          method: "GET",
          url: `/browse/main?userIdx=${userIdx}&profileIdx=${profileIdx}&browseType=${browseType()}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        console.log(contents.data.result);
        setMainContent(contents.data.result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      getMain();
    } else {
      return;
    }
  }, [isLoading]);

  return (
    <MainContainerStyle>
      {!isLoading && mainContent && (
        <>
          <div
            className={props.genre ? "billboard-row genre" : "billboard-row"}
          >
            <div className="billboard">
              <div className="hero-image-wrapper">
                <img
                  className="hero-static-image"
                  src={mainContent.thumbnailUrl}
                />
                <div className="trailer-vignette vignette-layer"></div>
                <div className="hero-vignette vignette-layer"></div>
                <div className="embedded-components button-layer">
                  <span className="rating">
                    <span>{`${mainContent.ageRate}+`}</span>
                  </span>
                </div>
              </div>
              <div className="fill-container">
                <div className="info meta-layer">
                  <div className="logo-and-text meta-layer">
                    <div className="title-wrapper">
                      <div className="billboard-title">
                        <img
                          className={
                            props.main[0].message == "2022년 아카데미 후보작"
                              ? "title-logo awards"
                              : "title-logo"
                          }
                          src={mainContent.logoImageUrl}
                        />
                      </div>
                    </div>
                    <div className="info-wrapper">
                      <div className="info-wrapper-fade">
                        {/* {mainContent.message && (
                          <div className="supplemental-message">
                            {mainContent.supplement}
                            {mainContent.message}
                          </div>
                        )} */}
                        <div className="episode-title-container"></div>
                        <div className="synopsis">{mainContent.summary}</div>
                      </div>
                    </div>
                    <div className="billboard-links button-layer forward-leaning">
                      <a href="/">
                        <button
                          className="color-first hasLabel hasIcon hero-button"
                          type="button"
                        >
                          <div className="button-svg-container">
                            <div>
                              <Play />
                            </div>
                          </div>
                          <div className="space"></div>
                          <span className="button-text">재생</span>
                        </button>
                      </a>
                      <button
                        className="color-secondary hasLabel hasIcon hero-button"
                        type="button"
                        onClick={() => props.setModal("detail")}
                      >
                        <div className="button-svg-container">
                          <div>
                            <DetailInfo />
                          </div>
                        </div>
                        <div className="space"></div>
                        <span className="button-text">상세 정보</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {props.wishlist && (
            <TitleCard
              items={props.wishlist}
              url="my-list"
              headerTitle="내가 찜한 콘텐츠"
            />
          )}
          {props.waiting && (
            <TitleCard
              items={props.waiting}
              headerTitle="기다림이 아깝지 않은 콘텐츠"
            />
          )}
          {props.foreignMovie && (
            <TitleCard items={props.foreignMovie} headerTitle="해외 영화" />
          )} */}
        </>
      )}
    </MainContainerStyle>
  );
}

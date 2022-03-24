import React from "react";
import styled from "styled-components";
import TitleCard from "./titlecard";

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
        }
      }
    }
  }
`;

export default function MainView(props) {
  return (
    <MainContainerStyle>
      {props.main && (
        <div className="billboard-row">
          <div className="billboard">
            <div className="hero-image-wrapper">
              <img
                className="hero-static-image"
                src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV-7msNc9tTXqMACKMVjUf5mOfL0TG_Zynkq_fnWAdNYHi0mYAFvRtSLM3Qpnnbf5hLNm4wiNURzKplrrW05hXctrT5W.webp?r=36b"
              />
              <div className="trailer-vignette vignette-layer"></div>
              <div className="hero-vignette vignette-layer"></div>
              <div className="embedded-components button-layer">
                <span className="rating">
                  <span>
                    <svg
                      viewBox="0 0 100 100"
                      className="svg-icon svg-icon-maturity-rating-977 "
                    >
                      <path
                        id="Fill---Orange"
                        fill="#CD6D34"
                        d="M88.727 100H11.27C5.05 100 0 94.952 0 88.727V11.273C0 5.047 5.05 0 11.27 0h77.457C94.952 0 100 5.047 100 11.273v77.454C100 94.952 94.952 100 88.727 100"
                      ></path>
                      <path
                        id="15"
                        fill="#FFFFFE"
                        d="M36.876 15.482v68.651H21.509v-49.51h-5.484l7.097-19.141h13.754zm45.46 0V28.87H57.175v10.063h24.08c.845 0 1.533.687 1.533 1.534v42.13c0 .845-.688 1.532-1.534 1.532H43.616a1.533 1.533 0 01-1.533-1.533V62.202H57v8.988h10.874V52.052h-25.79v-36.57h40.254z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <div className="fill-container">
              <div className="info meta-layer">
                <div className="logo-and-text meta-layer">
                  <div className="title-wrapper">
                    <div className="billboard-title">
                      <img
                        className="title-logo"
                        src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTT5N3V9cPPivP0rzNOWIUMx3oFaffhXpCKMUP8Ebz3WWB8hrSpXGoG25Oe97SRn1ADVmTGWMZ725BCQjJ181pBwN4LPE9fVA6_Gh33x2m-g2QD2zZA7_ZzQPZFkzAiUnotM1zXX3tvkOx2rUBUtUxhTirXDg62bVz5-T15G_lWKVQ.webp?r=ca0"
                      />
                    </div>
                  </div>
                  <div className="info-wrapper">
                    <div className="info-wrapper-fade">
                      <div className="episode-title-container"></div>
                      <div className="synopsis nosupplemental">
                        눈에서 멀어지면 마음에서도 멀어진다? 장거리 연애를
                        시작한 한 커플이 현실의 벽에 부딪힌다. 달콤했던 그들의
                        연애가 점점 쓴맛으로 변해가는 느낌. 아무리 애써봐도
                        소용없는 걸까?
                      </div>
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
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="Hawkins-Icon Hawkins-Icon-Standard"
                            >
                              <path
                                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="space"></div>
                        <span className="button-text">재생</span>
                      </button>
                    </a>
                    <button
                      className="color-secondary hasLabel hasIcon hero-button"
                      type="button"
                    >
                      <div className="button-svg-container">
                        <div>
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
                              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
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
      )}
      {props.wishlist && (
        <TitleCard
          items={props.wishlist}
          url="my-list"
          headerTitle="내가 찜한 콘텐츠"
        />
      )}
      {props.top10 && (
        <TitleCard
          items={props.top10}
          headerTitle="오늘 한국의 TOP 10 콘텐츠"
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
      )}
    </MainContainerStyle>
  );
}

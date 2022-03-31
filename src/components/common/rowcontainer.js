import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  .row-container {
    transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      -moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;

    position: relative;
    z-index: 0;
    ${(props) =>
      props.mylist &&
      `
      margin-bottom: 4vw;
    `}

    .ptrack-container {
      .row-content {
        padding: 0;

        .slider {
          position: relative;
          margin: 0;
          touch-action: pan-y;
          z-index: 2;
          padding: 0 60px;
          box-sizing: content-box;

          .handle {
            background: rgba(20, 20, 20, 0.5);
            width: 60px;
            position: absolute;
            z-index: 20;
            top: 0;
            bottom: 0;
            text-align: center;
            display: flex;
            justify-content: center;
            color: white;
            box-sizing: content-box;

            .indicator-icon {
              display: none;
              height: auto;
              transition: transform 0.1s ease-out 0s,
                -webkit-transform 0.1s ease-out 0s,
                -moz-transform 0.1s ease-out 0s, -o-transform 0.1s ease-out 0s;
              font-size: 1.3333333333em;
              align-self: center;
            }
          }

          .handle.handle-prev {
            left: -2px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

            .indicator-icon {
              transform-origin: 55% 50%;
            }
          }

          .handle.handle-next {
            right: 0;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;

            .indicator-icon {
              transform-origin: 45% 50%;
            }
          }

          .handle.active {
            cursor: pointer;
          }

          .pagination-indicator {
            margin: -24px 0 12px 0;
            padding: 0;
            list-style-type: none;
            position: absolute;
            right: 62px;
            display: none;
            box-sizing: content-box;
            font-size: 0.875rem;
            line-height: 1.4;

            & > li {
              display: inline-block;
              background-color: #4d4d4d;
              width: 12px;
              height: 2px;
              margin-left: 1px;
            }

            .active {
              background-color: #aaa;
            }
          }

          .slider-mask {
            padding-bottom: 1px;

            .slider-content {
              white-space: nowrap;

              .slider-item {
                z-index: 1;
                display: inline-block;
                position: relative;
                white-space: normal;
                vertical-align: top;
                padding: 0 0.2vw;

                .title-card {
                  position: relative;
                  z-index: 1;

                  .boxart-size-16x9 {
                    width: 100%;
                    height: 0;
                    position: relative;
                    overflow: hidden;
                    padding: 28.125% 0;
                  }

                  .boxart-size-7x10 {
                    width: 100%;
                    height: 0;
                    position: relative;
                    overflow: hidden;
                    padding: 35.714285714% 0;

                    svg {
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      right: auto;
                      left: 0;
                      width: 50%;
                    }

                    .boxart-image-in-padded-container {
                      position: absolute;
                      object-fit: cover;
                      top: 0;
                      bottom: 0;
                      right: 0;
                      left: auto;
                      width: 50%;
                      height: 100%;
                    }

                    .fallback-text-container {
                      width: 50%;
                      left: auto;
                      display: flex;
                      align-items: center;
                      justify-content: center;

                      .fallback-text {
                        font-size: 1.3em;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        word-wrap: break-word;
                        margin: 5%;
                        padding: 0;
                        position: initial;
                        white-space: normal;
                      }
                    }
                  }

                  .boxart-rounded {
                    border-radius: 0.2vw;

                    .fallback-text-container {
                      border-radius: 4px;
                    }
                  }

                  .boxart-container {
                    img {
                      cursor: pointer;
                    }
                  }

                  .boxart-image-in-padded-container {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                  }

                  .fallback-text-container {
                    background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
                    background-color: #222;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100%;
                    z-index: -1;

                    .fallback-text {
                      position: absolute;
                      bottom: 0;
                      left: 8%;
                      right: 8%;
                      margin: 0;
                      padding: 0 0 10%;
                      text-align: center;
                      font-size: 1.5em;
                      font-weight: 700;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    }
                  }

                  .click-to-change-JAW-indicator {
                    position: absolute;
                    left: 50%;
                    bottom: 0.4vw;
                    z-index: 1;
                    transition: transform 0.4s, opacity 0.4s,
                      -webkit-transform 0.4s, -moz-transform 0.4s,
                      -o-transform 0.4s;
                    opacity: 0;
                    transform: translate(-50%, -10px);
                  }
                }
              }
            }
          }

          .slider-mask.show-peek {
            overflow-x: visible;
          }

          .row-with-x-columns {
            .slider-item {
              width: 16.66666667%;
            }
          }
        }

        .slider:hover {
          .handle.active {
            .indicator-icon {
              display: block;
            }
          }

          .handle.active:hover {
            background: rgba(20, 20, 20, 0.7);

            .indicator-icon {
              font-weight: 600;
              transform: scale(1.25);
              color: white;
            }
          }

          .pagination-indicator {
            display: block;
          }
        }

        .icon-left-caret::before {
          content: "\\e868";
        }

        .icon-right-caret::before {
          content: "\\e867";
        }
      }
    }
  }
`;

export default function RowContainer(props) {
  const sliderItems = (dummy) => {
    if (!props.mylist) {
      const data = dummy.map((item) => {
        return (
          <div key={item.title} className="slider-item">
            <div className={`title-card-container css-0`}>
              <div className="title-card">
                <div className="ptrack-content">
                  <a href="/" className="slider-refocus">
                    <div
                      className={`boxart-container boxart-rounded ${
                        props.headerTitle == "오늘 한국의 TOP 10 콘텐츠"
                          ? "boxart-size-7x10"
                          : "boxart-size-16x9"
                      }`}
                    >
                      {item.rankImage}
                      <img
                        className="boxart-image-in-padded-container"
                        src={`${item.image}`}
                      />
                      <div className="fallback-text-container">
                        <p className="fallback-text">{item.title}</p>
                      </div>
                    </div>
                    <div className="click-to-change-JAW-indicator">
                      <div className="bob-jawbone-chevron">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-icon svg-icon-chevron-down"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="bob-container"></div>
              </div>
            </div>
          </div>
        );
      });
      return data;
    } else {
      const lines = Math.ceil(dummy.length / 6);
      const newArray = [];
      for (let i = 0; i < lines; i++) {
        newArray.push(dummy.slice(6 * i, 6 * i + 6));
      }
      const list = newArray.map((array, index) => {
        return (
          <div key={index} className={`row-container row-${index}`}>
            <div className="ptrack-container">
              <div className="row-content slider-hover-trigger-layer">
                <div className="slider">
                  <div className="slider-mask show-peek">
                    <div className="slider-content row-with-x-columns">
                      {array.map((item) => {
                        return (
                          <div key={item.title} className="slider-item">
                            <div className={`title-card-container css-0`}>
                              <div className="title-card">
                                <div className="ptrack-content">
                                  <a href="/" className="slider-refocus">
                                    <div className="boxart-container boxart-rounded boxart-size-16x9">
                                      <img
                                        className="boxart-image-in-padded-container"
                                        src={`${item.thumbnailUrl}`}
                                      />
                                      <div className="fallback-text-container">
                                        <p className="fallback-text">
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="click-to-change-JAW-indicator">
                                      <div className="bob-jawbone-chevron">
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="svg-icon svg-icon-chevron-down"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div className="bob-container"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return list;
    }
  };

  return (
    <ContainerStyle mylist={props.mylist}>
      {!props.mylist && (
        <div className="row-container">
          <div className="ptrack-container">
            <div className="row-content slider-hover-trigger-layer">
              <div className="slider">
                {!props.mylist && (
                  <>
                    <span className="handle handle-prev active">
                      <b className="indicator-icon icon-left-caret"></b>
                    </span>
                    <ul className="pagination-indicator">
                      {/* <li className="active"></li>
                      <li></li>
                      <li></li>
                      <li></li> */}
                    </ul>
                  </>
                )}
                <div className="slider-mask show-peek">
                  <div className="slider-content row-with-x-columns">
                    {sliderItems(props.items)}
                  </div>
                </div>
                {!props.mylist && (
                  <span className="handle handle-next active">
                    <b className="indicator-icon icon-right-caret"></b>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {props.mylist && sliderItems(props.items)}
    </ContainerStyle>
  );
}

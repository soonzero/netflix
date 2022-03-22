import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleCardsStyle = styled.div`
  margin: 3vw 0;
  padding: 0;
  position: relative;
  outline: 0;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  z-index: 1;

  .row-header {
    font-size: 1.3125rem;
    line-height: 1.3;
    margin: 0;

    .row-title {
      font-size: 1.4vw;
      color: #e5e5e5;
      margin: 0 4% 0.5em 4%;
      margin-left: 60px;
      text-decoration: none;
      display: inline-block;
      min-width: 6em;
      font-weight: 600;

      .row-header-title {
        display: table-cell;
        vertical-align: bottom;
        line-height: 1.25vw;
        font-size: 1.4vw;
      }

      .arrow-header {
        display: table-cell;
        vertical-align: bottom;
        line-height: 1.3;

        .see-all {
          display: inline-block;
          font-size: 0.9vw;
          margin-right: 4px;
          max-width: 0;
          line-height: 0.8vw;
          transition: max-width 1s, opacity 1s, transform 750ms,
            -webkit-transform 750ms, -moz-transform 750ms, -o-transform 750ms;
          white-space: nowrap;
          vertical-align: bottom;
          cursor: pointer;
          opacity: 0;
        }

        .arrow-chevron {
          display: none;
          transition: transform 750ms, -webkit-transform 750ms,
            -moz-transform 750ms, -o-transform 750ms;
          font-size: 0.9vw;
          vertical-align: bottom;
        }
      }
    }
  }

  .row-container {
    transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      -moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;

    position: relative;
    z-index: 0;

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
            top: 0;
            bottom: 0;
            text-align: center;
            display: flex;
            color: white;
            box-sizing: content-box;

            .indicator-icon {
              display: none;
              height: auto;
              transition: transform 0.1s ease-out 0s,
                -webkit-transform 0.1s ease-out 0s,
                -moz-transform 0.1s ease-out 0s, -o-transform 0.1s ease-out 0s;
              font-size: 2em;

              & > b::before {
                content: "\\e868";
              }
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
      }
    }
  }
`;

export default function TitleCard(props) {
  const sliderItems = (dummy) => {
    const data = dummy.map((item, index) => {
      if (props.headerTitle == "오늘 한국의 TOP 10 콘텐츠") {
        return (
          <div className={`slider-item slider-item-${index}`}>
            <div className={`title-card-container css-0`}>
              <div className="title-card title-card-top-10">
                <div className="ptrack-content">
                  <a href="/" className="slider-refocus">
                    <div className="boxart-size-7x10 boxart-container boxart-rounded">
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
      } else {
        return (
          <div className={`slider-item slider-item-${index}`}>
            <div className={`title-card-container css-0`}>
              <div className="title-card" id={`title-card-1-${index + 17}`}>
                <div className="ptrack-content">
                  <a href="/" className="slider-refocus">
                    <div className="boxart-size-16x9 boxart-container boxart-rounded">
                      <img
                        className="boxart-image boxart-image-in-padded-container"
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
      }
    });
    return data;
  };

  return (
    <TitleCardsStyle>
      <h2 className="row-header">
        <Link to="/browse" className="row-title">
          <div className="row-header-title">{props.headerTitle}</div>
          <div className="arrow-header">
            {props.headerTitle !== "오늘 한국의 TOP 10 콘텐츠" && (
              <div className="see-all">모두 보기</div>
            )}
            <div className="arrow-chevron icon-right"></div>
          </div>
        </Link>
      </h2>
      <div className="row-container">
        <div className="ptrack-container">
          <div className="row-content slider-hover-trigger-layer">
            <div className="slider">
              <span className="handle handle-prev active">
                <b className="indicator-icon icon-left-caret"></b>
              </span>
              <ul className="pagination-indicator">
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="slider-mask show-peek">
                <div className="slider-content row-with-x-columns">
                  {sliderItems(props.items)}
                </div>
              </div>
              <span className="handle handle-next active">
                <b className="indicator-icon icon-right-caret"></b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </TitleCardsStyle>
  );
}

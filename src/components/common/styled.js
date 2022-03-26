import { createGlobalStyle } from "styled-components";
import NetflixSansLight from "fonts/NetflixSans_W_Lt.woff2";
import NetflixSansRegular from "fonts/NetflixSans_W_Rg.woff2";
import NetflixSansMedium from "fonts/NetflixSans_W_Md.woff2";
import NetflixSansBold from "fonts/NetflixSans_W_Bd.woff2";
import NetflixSansThick from "fonts/NetflixSans_W_Th.woff2";
import NetflixIcon from "fonts/nf-icon-v1-93.woff";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Netflix Sans";
    font-weight: 300;
    src: url(${NetflixSansLight}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 400;
    src: url(${NetflixSansRegular}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 500;
    src: url(${NetflixSansMedium}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 600;
    src: url(${NetflixSansBold}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 700;
    src: url(${NetflixSansThick}) format("woff2");
}

@font-face {
    font-family: "Netflix Icon";
    src: url(${NetflixIcon}) format("woff");
}

    html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
select,
button {
  font-family: "Netflix Sans";
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  word-break: keep-all;
}

[class*="icon-"] {
          font-family: "Netflix Icon";
          line-height: 1;
        }

        
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  margin: 0;
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

`;

export const ContainerStyle = styled.div`
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

export const TitleCardsStyle = styled.div`
  margin: 3vw 0;
  padding: 0;
  position: relative;
  outline: 0;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  z-index: 0;

  .icon-right::before {
    content: "\\e658";
  }

  &:hover {
    a.row-title {
      .arrow-chevron {
        display: inline-block;
        font-size: 0.9vw;
        vertical-align: bottom;
      }
    }

    a.row-title:hover {
      color: white;

      .arrow-header {
        .see-all {
          max-width: 200px;
          transform: translate(1vw, 0);
          opacity: 1;
        }

        .arrow-chevron {
          transform: translate(1vw, 0);
          font-size: 0.65vw;
          line-height: 0.8vw;
        }
      }
    }
  }

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
`;

export const HomeStyle = styled.div`
  background-color: #141414;

  .main-view {
    position: relative;
    min-height: 1000px;
    z-index: 0;

    .main-view-container {
      margin-top: -70px;
      padding: 0 0 50px;
      z-index: 0;
      overflow: hidden;
    }
  }
`;

export const spinAnimation = keyframes`
    0% {transform: rotate(0);}
    100% {transform: rotate(360deg);}

`;

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
button,
input {
  font-family: "Netflix Sans";
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
}

[class*="icon-"] {
          font-family: "Netflix Icon";
          line-height: 1;
        }

body {
  background-color: #141414;
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

export const ModalStyle = styled.div`
  font-size: 16px;

  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    background-color: transparent;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  strong {
    font-weight: 700;
  }

  .svg-icon {
    border: 1px solid transparent;
  }

  .preview-modal-wrapper {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;

    button.color-primary:not(.has-label),
    button.color-supplementary:not(.has-label) {
      border-width: 2px;
      background-color: white;

      svg {
        width: 1.75rem;
      }
    }

    button.color-supplementary:not(.has-label) {
      border-width: 2px;
      background-color: rgba(42, 42, 42, 0.6);
      border-color: rgba(255, 255, 255, 0.5);
    }

    button.color-supplementary:not(.has-label):hover {
      border-color: white;
      background-color: #2a2a2a;
    }
  }

  .preview-modal-wrapper.detail-modal {
    width: 100%;
    height: 100%;
  }

  .preview-modal-wrapper.has-smaller-buttons {
    button.has-label {
      min-height: 32px;
      max-height: 42px;
    }

    button:not(.has-label):not(.dropdown-toggle) {
      min-width: 32px;
      min-height: 32px;
      max-width: 42px;
      max-height: 42px;
    }

    button.color-primary:not(.has-label),
    button.color-supplementary:not(.has-label) {
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
    font-size: 0.875rem;
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
      margin: 1rem;

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

    .preview-modal-section-header {
      font-weight: 700;
      font-size: 1.5rem;
      margin-top: 3rem;
      margin-bottom: 1.25rem;
    }
  }

  .preview-modal-container.detail-modal {
    .preview-modal-close {
      display: block;
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

      .preview-modal-player-title-treatment-left {
        width: 40%;
        position: absolute;
        bottom: 5%;
        left: 3em;
      }
    }

    .story-art {
      width: 100%;
      padding-top: 56.3925%;
      overflow: hidden;

      .player-modal-player-story-art {
        position: absolute;
        top: 0;
        left: 0;
        transition: height 200ms ease-in-out;
        max-width: 100%;
        display: block;
      }

      .player-modal-player-story-art.detail-modal {
        min-width: 100%;
      }
    }
  }

  .preview-modal-player-container.detail-modal {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;

    .preview-modal-player-title-treatment-logo {
      margin-bottom: 1.5em;
    }

    .preview-modal-player-title-treatment-wrapper {
      background: linear-gradient(to top, #181818, transparent 50%);
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
        line-height: 1.3721286371;

        .evidence-tags {
          .evidence-list {
            .evidence-item {
              .evidence-separator::before {
                font-size: 1.2em;
              }
            }
          }
        }
      }
    }
  }

  .preview-modal-details-metadata {
    display: grid;
    width: 100%;
    position: relative;
    background-color: #181818;

    .preview-modal-details-metadata-left {
      & > :not(.new-badge) {
        margin-bottom: 0.5em;
      }

      .preview-modal-synopsis {
        line-height: 27px;
        font-size: 18px;
      }

      .preview-modal-details-metadata-info {
        margin: 0.8rem 0;
      }
    }

    .preview-modal-details-metadata-right {
      display: flex;
      box-orient: vertical;
      box-direction: normal;
      flex-direction: column;
    }
  }

  .video-metadata-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    box-align: center;
    box-pack: start;
    color: white;
    font-size: 16px;

    .video-metadata-first-line {
      max-width: 100%;
      margin: 0.25em 0.5em 0.25em 0;
    }

    .video-metadata-second-line {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      & > * {
        margin-right: 0.5em;
      }
    }
  }

  .preview-modal-details-metadata.detail-modal {
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    column-gap: 2em;
  }

  .button-controls-container {
    display: flex;
    align-items: center;
    min-height: 2em;
    margin-bottom: 1em;

    & > * {
      margin: 0.25em;
    }
  }

  .square-button {
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    box-align: center;
    box-pack: center;
    position: relative;
    padding: 0.8rem;
    border: 0px;
    border-radius: 4px;
    opacity: 1;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
  }

  .square-button.color-primary {
    background-color: white;
    color: black;
  }

  .square-button.has-label.has-icon {
    padding-left: 2rem;
    padding-right: 2.4rem;
  }

  .space-between {
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
  }

  .play-button-text {
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
  }

  .detail-modal-container {
    padding: 0 3em;
  }

  .circle-button,
  .thumb-button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    cursor: pointer;
    padding: 0.7rem;
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

  .circle-button.has-icon,
  .thumb-button-wrapper.has-icon {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }

  .circle-button.color-primary {
    color: black;
    background-color: white;
  }

  .circle-button-container,
  .thumb-button-container {
    line-height: 0;
  }

  .circle-button.round.color-supplementary,
  .thumb-button-wrapper.round.color-supplementary {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: white;
  }

  .circle-button.round.color-supplementary:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.1);
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

  .circle-button-svg-container.small {
    height: 1.575rem;
    width: 1.575rem;
  }

  .circle-button-svg-conatiner.medium {
    height: 2.4rem;
    width: 2.4rem;
  }

  .my-list-button {
    position: relative;
  }

  .thumb-button {
    position: relative;
    z-index: 1;

    &:hover {
      .thumbs-selection-container {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        display: block;
        visibility: visible;

        button {
          opacity: 1;
          transform: translateX(0px);
        }
      }
    }
  }

  .thumb-button-wrapper.round.color-supplementary {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: white;
  }

  .thumb-button-wrapper.has-icon,
  .thumbs-close-button-container.has-icon {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }

  .thumbs-selection-container {
    margin-left: 0.0875rem;
    margin-top: -0.0875rem;
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
    width: 13em;
    background-color: rgb(35, 35, 35);
    border-radius: 3rem;
    box-shadow: rgb(0 0 0 / 60%) 0px 0px 2px 0px,
      rgb(0 0 0 / 50%) 0px 8px 16px 0px;
    display: flex;
    padding: 0.8em;
    box-pack: justify;
    justify-content: space-between;
    align-items: center;
    box-align: center;

    & > div {
      margin: 0px 0.175rem;
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
    appearance: none;
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
    width: 2.8rem;
    height: 2.8rem;
    transition: opacity 0.1s linear 0.1s,
      transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
    transform: translateX(1.3125rem);
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

  .thumbs-down-button:hover,
  .thumbs-up-button:hover,
  .thumbs-way-up-button:hover {
    color: white;
    background-color: rgba(128, 128, 128, 0.2) !important;
  }

  .thumbs-way-up-button {
    transform: translateX(-1.3125rem);
  }

  .thumbs-close-button {
    display: none;
    opacity: 0;
    justify-content: center;
    box-pack: center;
    color: white;
    padding: 0px;
    border: 2px solid transparent;

    button {
      box-shadow: rgb(0 0 0 / 60%) 0px 0px 2px 0px,
        rgb(0 0 0 / 50%) 0px 8px 16px 0px;
      background-color: rgb(35, 35, 35) !important;
    }
  }

  .detail-button {
    position: relative;
  }

  .button-controls-expand-button {
    margin-left: auto;
  }

  .video-metadata-container {
    color: white;
    display: flex;
    flex-wrap: wrap;
    box-pack: start;
    justify-content: flex-start;
    box-align: center;
    align-items: center;

    .video-metadata-first-line {
      max-width: 100%;
      margin: 0.25em 0.5em 0.25em 0;
    }

    .video-metadata-second-line {
      display: flex;
      flex-wrap: wrap;
      box-align: center;
      align-items: center;

      & > * {
        margin-right: 0.5em;
      }

      .duration {
        white-space: nowrap;
      }
    }

    .match-score {
      white-space: unset;
      color: #46d369;
    }
  }

  .match-score-wrapper {
    color: white;

    .rating-inner {
      display: flex;
      transition: margin-right 550ms cubic-bezier(0.86, 0, 0.07, 1) 1.65s;
    }

    .meta-thumb-container {
      display: inline-block;
      margin-bottom: -2px;

      svg {
        width: 0.9em !important;
        height: 0.9em !important;
      }
    }

    .show-match-score {
      .match-score {
        max-width: 300px;
        opacity: 1;
        transition: max-width 550ms cubic-bezier(0.86, 0, 0.07, 1) 1.65s,
          opacity 150ms linear 2.2s;
      }

      .thumb-down,
      .thumb-up {
        svg {
          width: 0 !important;
          height: 0 !important;
          opacity: 0;
          transition: width 550ms cubic-bezier(0.86, 0, 0.07, 1) 1.1s,
            opacity 150ms linear 950ms;
        }
      }
    }

    .match-score {
      font-weight: 700;
      color: #46d369;
      display: inline-block;
      white-space: nowrap;
    }
  }

  .maturity-rating {
    display: inline-block;

    span:last-child {
      .svg-icon {
        margin: 0;
      }
    }

    .maturity-number {
      text-transform: uppercase;
      border: 1px solid rgba(255, 255, 255, 0.4);
      padding: 0 0.4rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .svg-icon {
      margin: 0 0.4em 0 0;
      width: 2em;
      height: 2em;
      vertical-align: middle;
    }
  }

  .player-feature-badge {
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.9);
    padding: 0 0.5em;
    font-size: 0.7em;
    border-radius: 3px;
    white-space: nowrap;
  }

  .evidence-list {
    display: flex;
    flex-wrap: wrap;
    justify-items: flex-start;
    margin: 0;
    padding: 0;

    .evidence-item {
      display: flex;
      padding-right: 0.5vw;
    }

    .evidence-separator::before {
      color: #646464;
      content: "\\2022";
      display: inline-block;
      padding-right: 0.5vw;
    }
  }

  .evidence-text {
    color: white;
    position: relative;
    text-shadow: 0 1px 1px rgb(0 0 0 / 70%);
    line-height: 1.4;
  }

  .preview-modal-tags {
    font-size: 14px;
    line-height: 20px;
    margin: 0.5em;
    margin-left: 0;
    word-break: break-word;

    .preview-modal-tags-label {
      color: #777;
    }

    .tag-item,
    .tag-more {
      color: #ddd;
      margin: 0;
      cursor: pointer;
      outline-color: white;
    }
  }

  .episode-selector {
    background-color: #181818;
    padding: 1rem 0;
    padding-bottom: 0;

    .episode-selector-header {
      display: flex;
      box-pack: justify;
      justify-content: space-between;
      box-align: baseline;
      align-items: baseline;
    }

    .episode-selector-dropdown {
      font-size: 12px;
      font-weight: 600;
    }

    .episode-selector-season-name {
      font-size: 18px;
    }

    .episode-selector-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      box-orient: vertical;
      box-direction: normal;
      flex-direction: column;

      .episode-item.current {
        background-color: #333;
      }
    }

    .section-divider,
    .section-divider.collapsed {
      height: 0;
      margin-top: 0;
    }
  }

  .title-card-list-container {
    border-bottom: 1px solid #404040;
    padding: 1rem;
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    align-items: center;
    display: flex;
    min-height: 10rem;

    .title-card-title-index {
      font-size: 1.5rem;
      color: #d2d2d2;
      display: flex;
      justify-content: center;
      flex: 0 0 7%;
      box-flex: 0;
      box-pack: center;
    }

    .title-card-image-wrapper {
      position: relative;
      overflow: hidden;
      box-flex: 0;
      flex: 0 0 18%;
      border-radius: 4px;

      .title-card-play-icon {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        box-align: center;
        align-items: center;
        box-pack: center;
        background-image: linear-gradient(
          195deg,
          rgba(24, 24, 24, 0.7) 0,
          rgba(24, 24, 24, 0.5) 10%,
          transparent 25%
        );

        .title-card-playSVG {
          width: 3rem;
          height: 3rem;
          border: 1px solid white;
          border-radius: 2rem;
          padding: 0.5rem;
          opacity: 1;
          background-color: rgba(30, 30, 20, 0.5);
          transition: opacity 200ms ease-in;
        }
      }

      img {
        max-width: 100%;
        display: block;
      }
    }

    .title-card-list-metadata-wrapper {
      min-height: 100%;
      box-flex: 0;
      flex: 0 0 70%;
      font-size: 1rem;

      .title-card-list-title {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        padding-bottom: 0.5rem;
        box-pack: justify;

        .title-card-title-text {
          color: white;
          font-size: 1rem;
          font-weight: 700;
          overflow-wrap: anywhere;
        }

        .duration {
          padding-left: 10px;
        }
      }

      .title-card-synopsis {
        padding: 0 1rem 1rem;
        margin: 0;
        color: #d2d2d2;
      }
    }
  }

  .title-card-list-container:hover {
    .title-card-image-wrapper {
      .title-card-playSVG {
        opacity: 1;
      }
    }
  }

  .title-card-list-container:first-of-type {
    border-top: 1px solid #404040;
  }

  .preview-modal-small-text {
    font-size: 14px;
    line-height: 20px;
  }

  .section-container.collapsed {
    overflow: hidden;
    max-height: 50rem;
  }

  .more-like-this-container {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-gap: 1rem;
    align-items: stretch;
    box-align: stretch;

    .title-card-container {
      margin: 0.1rem;
      height: 100%;
      flex: 0 0 22%;
      min-height: 20em;
    }

    .video-metadata-container-container {
      .video-metadata-container {
        padding: 0;
        min-width: unset;
      }
    }
  }

  .title-card-container {
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    .title-card-image-wrapper {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        display: block;
      }

      .title-card-play-icon {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        box-align: center;
        align-items: center;
        opacity: 0;
        transition: opacity 200ms;
        box-pack: center;
      }

      .duration {
        position: absolute;
        top: 5%;
        right: 5%;
        white-space: nowrap;
        font-size: 16px;
      }

      .title-card-video-metadata {
        .year {
          order: 2;
          box-ordinal-group: 3;
        }
      }
    }

    .title-card-metadata-wrapper {
      background-color: #2f2f2f;
      min-height: 100%;

      .title-card-synopsis {
        padding: 0 1rem 1rem;
        margin: 0;
        color: #d2d2d2;
      }
    }

    .title-card-image-wrapper.has-duration::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        198deg,
        rgba(0, 0, 0, 0.9) 0,
        rgba(24, 24, 24, 0.5) 20%,
        transparent 28%
      );
    }
  }

  .title-card-container:hover {
    .title-card-image-wrapper {
      .title-card-play-icon {
        opacity: 1;
      }
    }
  }

  .video-metadata-container-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-align: center;
    box-pack: justify;
  }

  .video-metadata-container.video-metadata-two-lines {
    flex-direction: column;
    box-align: center;
    align-items: flex-start;
    justify-content: center;
    box-orient: vertical;
    box-direction: normal;
    box-pack: center;
  }

  .video-metadata-container {
    .video-metadata-container-first-line {
      max-width: 100%;
      margin: 0.25rem 0.5rem 0.25rem 0;
    }

    .video-metadata-container-second-line {
      display: flex;
      flex-wrap: wrap;
      box-align: center;
      align-items: center;

      & > * {
        margin-right: 0.5rem;
      }
    }
  }

  .match-score-wrapper {
    .rating-inner {
      transition: margin-right 550ms cubic-bezier(0.86, 0, 0.07, 1) 1.65s;
      display: flex;
    }

    .meta-thumb-container {
      display: inline-block;
      margin-bottom: -2px;
    }

    .show-match-score {
      .thumb-down,
      .thumb-up {
        svg {
          width: 0 !important;
          height: 0 !important;
          transition: width 550ms cubic-bezier(0.86, 0, 0.07, 1) 1.1s,
            opacity 150ms linear 950ms;
        }
      }
    }
  }

  .svg-icon {
    border: solid 1px transparent;
    margin: 0 -1px;
  }

  .section-divider.collapsed {
    margin-top: -6rem;
    background-image: linear-gradient(
      to top,
      #181818 0,
      rgba(24, 24, 24, 0.7) 20%,
      rgba(24, 24, 24, 0.4) 30%,
      transparent 50%
    );
  }

  .section-divider {
    position: relative;
    width: 100%;
    height: 6rem;
    border-bottom: 2px solid #404040;
    display: flex;
    box-pack: center;
    justify-content: center;
    box-shadow: none;
    margin: auto;

    .section-collapse-button,
    .section-expand-button {
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
    }
  }

  .about-wrapper {
    background-color: #181818;
    padding-bottom: 2rem;

    p {
      margin: 0;
    }

    .about-header {
      .preview-modal-section-header {
        font-weight: 400;
      }
    }

    .maturity-rating-wrapper {
      display: flex;
      margin-top: 0.5rem;
      font-size: 14px;
      line-height: 20px;

      span.title {
        color: #777;
        margin-right: 1rem;
        white-space: nowrap;
      }
    }

    .maturity-rating {
      & > * {
        margin-right: 1rem;
        display: inline-block;
        vertical-align: middle;
      }
    }

    .broadcaster {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .trailers-and-more-wrapper {
    background-color: #181818;

    .trailers-and-more-container {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
      align-items: stretch;
      justify-items: stretch;
      box-align: stretch;

      .title-card-image-wrapper {
        max-height: 70%;
      }

      .title-card-container {
        min-height: unset;
      }

      .trailers-and-more-item {
        .title-card-play-icon {
          background-image: none;
        }

        .title-card-metadata-wrapper {
          background-color: inherit;
        }
      }
    }
  }

  .title-card-container {
    .title-card-metadata-wrapper {
      .title-card-title {
        padding: 1rem;

        .title-card-title-text {
          color: white;
          font-size: 1rem;
          font-weight: 700;
        }
      }
    }
  }

  .trailers-and-container {
    .title-card-image-wrapper {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        display: block;
      }
    }
  }

  .supplemental-message {
    font-weight: 600;
    display: flex;
    align-items: center;
  }
`;

export const AccountHeaderStyle = styled.div`
  height: 90px;
  position: relative;
  color: #333;
  font-size: 1rem;

  .member-header {
    min-width: 190px;
    background-color: rgba(0, 0, 0, 0.97);
    padding: 0 45px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;

    .header {
      min-width: 1020px;
      height: 70px;
      padding-left: 135px;
      max-width: 1130px;

      .logo {
        position: absolute;
        left: 45px;
        top: 0;
        text-decoration: none;
        padding: 18px 0;
        font-size: 2rem;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        width: 118px;

        .svg-icon-netflix-logo {
          fill: #e50914;
        }
      }
    }

    .last {
      width: auto !important;
    }

    .secondary-navigation {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 70px;
    }

    .account-tools {
      float: right;
      height: 70px;

      .current-profile {
        padding: 0 45px 0 0;

        .profile-arrow {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 5px 0 5px;
          border-color: white transparent transparent transparent;
          margin-left: 6px;
          display: inline-block;
          vertical-align: middle;
          font-weight: 700;
        }
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    #profile-selector {
      height: 70px;
      cursor: pointer;
      font-size: 0.75rem;
      position: relative;
      outline: 0;

      .current-profile {
        .avatar {
          margin: 5px;
          width: 32px;
          display: inline-block;
          vertical-align: middle;
          border-radius: 4px;
        }
      }

      .trigger {
        visibility: hidden;
        opacity: 0;
        bottom: 0;
        top: inherit;
        left: 11px;
        width: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #e5e5e5;
        position: absolute;
        margin-top: -3px;
        right: 15px;
        transition: opacity 200ms;
      }

      .trigger-active {
        visibility: visible;
        opacity: 1;
      }

      .profiles-container {
        visibility: hidden;
        position: absolute;
        width: 156px;
        left: -56px;
        opacity: 0;
        transition: opacity 200ms;
        line-height: normal;
      }

      .profiles-container-active {
        visibility: visible;
        opacity: 1;
      }

      .profiles {
        overflow: hidden;
        height: auto;
        background-color: rgba(0, 0, 0, 0.97);
        border-top: 2px solid #e5e5e5;
        position: relative;
      }

      .profile {
        overflow: hidden;
        padding: 10px 5px 0 0;
        display: flex;
        align-items: center;

        a {
          flex-grow: 1;
        }

        img {
          float: left;
          margin-right: 10px;
          width: 32px;
          border-radius: 4px;
        }
      }

      .profile-manage {
        background-color: rgba(0, 0, 0, 0.97);
      }

      .manage {
        margin-bottom: 0;
        padding: 10px 5px 10px 0;
      }

      .links {
        overflow: hidden;
        border-top: 1px solid #666;
        padding: 10px 0;
        padding-bottom: 0;
        background-color: rgba(0, 0, 0, 0.97);

        a {
          padding: 0 10px;
        }

        .sign-out-link {
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          margin-bottom: 0;
          padding: 5px 0;
        }
      }

      a {
        text-decoration: none;
        color: white;
        padding: 0 10px;
        line-height: 32px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    ul.structural {
      padding: 0;
      margin: 0;

      & > li {
        list-style: none;
        margin-left: 0;
      }
    }

    ul {
      & > li {
        margin-bottom: 5px;
      }
    }
  }
`;

export const AccountBodyStyle = styled.div`
  margin: 20px 30px 0;
  padding: 0;
  color: #333;
  font-size: 1rem;
  direction: ltr;
  line-height: 1.328125;

  a {
    text-decoration: none;
    color: #0080ff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &.profile-link:hover {
      text-decoration: none;
    }
  }

  ul {
    margin: 1rem 0;

    ul {
      margin: 0;
    }
  }

  .responsive-account-container {
    display: block;
    min-width: 300px;
    min-height: 400px;
    position: relative;
    margin: 0 auto;
    overflow-wrap: anywhere;
  }

  .responsive-account-container {
    width: 95%;
    max-width: 1024px;
    font-size: 1em;
  }

  .account-header-inline {
    vertical-align: middle;
    display: inline-block;
    font-size: 2.15rem;
    margin: 0 0 0.55em;
    font-weight: 400;
    line-height: 1.3226744186;
  }

  .account-section-membersince {
    display: inline-flex;
    align-items: center;
    color: #555;
    font-size: 0.8rem;
    font-weight: 800;
    margin-left: 20px;
    padding: 5px 14px 5px 0;
    text-align: center;
  }

  .account-section-membersince {
    display: inline-flex;
    align-items: center;
    color: #555;
    font-size: 0.8rem;
    font-weight: 800;
    margin-left: 20px;
    padding: 5px 14px 5px 0;
    text-align: center;
  }

  .account-section-membersince-svg {
    background: url(https://assets.nflxext.com/ffe/siteui/account/svg/membersince.svg)
      no-repeat 0 0;
    height: 26px;
    width: 26px;
    margin-right: 5px;
    padding-right: 26px;
  }

  .responsive-account-content {
    font-size: 1em;
  }

  .membership-section-wrapper.membership-section-with-button {
    padding-bottom: 10px;
  }

  .account-section {
    margin-bottom: 5px;
    background-color: white;
    border: 1px solid #999;
    position: relative;
    border-top: 1px solid #999;
    border-right: none;
    border-bottom: none;
    border-left: none;
    padding: 0;
    background-color: inherit;
    min-height: 4.5em;
  }

  .account-section-header {
    width: 270px;
    position: absolute;
    left: 0;
    padding-right: 10px;
    z-index: 2;
  }

  .account-section-heading {
    font-size: 1.125em;
    color: #757575;
    font-weight: 400;
    padding: 0;
    margin-top: 15px;
    margin-bottom: 20px;
    /* height: 81px; */
  }

  .btn {
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 0.1px;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    border: 0;
  }

  .btn-gray,
  .btn-plain {
    color: black;
    background-color: #e6e6e6;
    background-image: linear-gradient(to bottom, #e6e6e6, #ddd);
    box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
  }

  .btn.btn-small {
    font-size: 0.8125rem;
    padding: 12px 2em;
    min-width: 98px;
    min-height: 37px;
    padding-left: 1em;
    padding-right: 1em;
    line-height: 1em;
  }

  .btn.account-cancel-button,
  .btn.account-pause-button {
    position: relative;
    bottom: 10px;
    left: 0;
    width: 200px;
    max-width: 200px;
    display: block;
    margin: 20px 10px 10px 0;
    text-transform: none;
  }

  .account-section-content {
    margin-top: 15px;
    padding-left: 270px;
  }

  .account-subsection {
    position: relative;

    &::after {
      content: " ";
      display: block;
      width: 0;
      height: 0;
      overflow: hidden;
      clear: both;
    }

    & ~ .account-subsection {
      border-top: 1px solid #999;
      padding-top: 15px;

      .u-ta-right-desktop {
        text-align: right;
      }
    }

    & ~ .account-subsection.light-divider {
      border-color: #e5e5e5;
    }
  }

  .account-section-group {
    float: left;
    width: 50%;
    background-color: inherit;

    & + .account-section-group {
      text-align: right;
      float: right;
    }
  }

  .account-section-group.-wide {
    width: 66%;
  }

  .account-section-group.-thin {
    width: 34%;
  }

  .account-section-group.payment-details {
    padding-bottom: 12px;
  }

  .account-section-item {
    margin-bottom: 10px;
    line-height: 1.25;
  }

  .account-section-email {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .account-section-item-disabled {
    color: #757575;
  }

  .account-section-link {
    width: 100%;
    padding: 15px 0 5px;
    color: #0073e6;
    display: inline;
    padding-right: 0;
    padding-top: 5px;
    border-top: none;
  }

  .quality-icon {
    height: 20px;
    margin-top: -3px;
    padding: 0 5px;
    vertical-align: middle;
  }

  .clearfix::after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
    clear: both;
  }

  .profile-hub {
    .profile-header {
      display: flex;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      padding: 15px 0;

      svg {
        width: 20px;
        height: 20px;
        fill: #aaa;
      }

      img {
        height: 60px;
        border-radius: 4px;
      }
    }

    .profile-summary {
      flex-grow: 1;
      align-self: center;
      padding-left: 20px;
      font-size: 0.8em;
      color: #787878;
    }

    .profile-action-icons {
      display: flex;
      align-items: center;
      align-self: center;
      border: none;
      background-color: transparent;

      svg {
        color: #aaa;
      }
    }

    .profile-links {
      display: none;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }

    .account-section-item:first-child {
      .profile-link {
        border: none;
      }
    }

    .profile-link {
      padding: 16px 0 20px;
      margin-left: 84px;
      display: flex;
      min-height: 90px;
      border-top: 1px solid #ccc;
    }

    .profile-main {
      flex-grow: 1;
      color: #787878;
      font-size: 0.8em;
      align-self: center;
    }

    .profile-change {
      font-size: 0.8em;
      align-self: center;
    }

    .expanded {
      .profile-links {
        display: block;
      }

      .profile-action-icons {
        svg.svg-icon-chevron-down {
          transform: rotate(180deg);
        }
      }
    }

    li {
      padding: 0;
      margin: 0;
      list-style-type: none;

      &:first-child {
        .profile-header {
          padding: 0 0 20px 0;
        }
      }

      &:last-of-type {
        .profile-header {
          border-bottom: 0;
        }
      }
    }

    h3 {
      margin: 0 0 0.3em 0;
      font-weight: 600;
      font-size: 1.2em;
      color: #333;
    }

    h4 {
      margin: 4px 0;
      font-size: 1.2em;
      color: #333;
    }
  }
`;

export const LockBodyStyle = styled.div`
  margin: 20px 30px 0;
  padding: 0;

  a {
    color: #0080ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }

  .responsive-account-container {
    display: block;
    min-width: 300px;
    min-height: 400px;
    position: relative;
    color: #333;
    -webkit-tap-highlight-color: transparent;
    margin: 0 auto;
    overflow-wrap: anywhere;
    width: 95%;
    max-width: 1024px;
    font-size: 1rem;
  }

  .profile-hub-header {
    display: flex;
    box-align: center;
    align-items: center;
    margin-bottom: 30px;

    h1 {
      flex-grow: 1;
      margin: 0;
      font-size: 2rem;
      line-height: 1.3125;
      color: #333;
      font-weight: 400;
    }

    img {
      width: 50px;
      height: 50px;
      align-self: center;
      border-radius: 4px;
    }
  }

  .password-check-subheader {
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0.75em 0 0.25em;
    line-height: 1.3352272727;
  }

  .password-check-input-wrapper {
    display: flex;
    align-items: center;
    margin: 15px 0 0;
    box-align: center;

    .password-input {
      margin: 0 15px 0 0;
      padding: 0;
      min-height: 90px;

      & > .ui-text-input {
        width: 300px;
      }
    }

    .password-check-forgot {
      margin-top: -45px;
    }
  }

  .profile-lock-container {
    .profile-lock-subheader {
      margin-top: 18px;
      margin-bottom: 20px;
      font-size: 1.5rem;
      line-height: 31.5px;
    }

    .ui-binary-input {
      margin-bottom: 20px;
    }

    .tooltip {
      padding-top: 2px;
      margin-left: 10px;
      position: relative;

      svg {
        width: 1rem;
        height: 1rem;
        color: #077af5;
      }
    }

    .pin-input-container {
      margin-bottom: 10px;
    }

    .pin-input-error {
      margin-bottom: 20px;
    }
  }

  .pin-input-error {
    color: red;
    margin: 0;
  }

  .pin-input-container {
    display: inline-block;
    border: 1px solid #b1b4b7;
    direction: ltr;
    vertical-align: middle;
  }

  .pin-number-input {
    font-size: 1.7rem;
    padding: 0.2em;
    margin: 0;
    width: 1.2em;
    text-align: center;
    min-height: 38px;
    min-width: 38px;
    border: none;
    line-height: 1.2681985294;

    & + .pin-number-input {
      border-left: 1px solid #ccc; /*rtl:ignore*/
    }
  }

  .ui-input-label {
    position: relative;
  }

  .ui-label {
    font-size: 1rem;
    font-weight: 400;
    margin-right: 15px;
    color: grey;
    display: block;
  }

  .ui-text-input {
    display: inline-block;
    font-size: 1rem;
    padding: 10px 11px;
    border: 1px solid #b3b3b3;
    border-radius: 2px;
    appearance: none;
    max-width: 500px;
    color: black;
    height: 44px;
    outline: none;
  }

  .ui-text-input.error {
    border-color: #b00500;
  }

  .btn {
    position: relative;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 0.1px;
    border-radius: 2px;
    text-align: center;
    border: 0;
  }

  .btn.btn-small {
    display: inline-block;
    font-size: 13px;
    padding: 12px 13px;
    margin: 6.5px;
    margin-left: 0;
    line-height: 1;
    width: auto;
    min-width: 98px;
    min-height: 37px;
  }

  .btn-bar {
    padding: 0 0 1rem;
    clear: both;
  }

  .btn-blue {
    background-color: #0080ff;
    color: white;
    background-image: linear-gradient(to bottom, #0080ff, #0277ec);
    box-shadow: 0 1px 0 rgb(0 0 0 / 55%);
  }

  .btn-gray {
    color: black;
    background-color: #e6e6e6;
    background-image: linear-gradient(to bottom, #e6e6e6, #ddd);
    box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
  }

  .ui-binary-input {
    position: relative;
    padding-left: 36px;
    user-select: none;
    font-size: 1rem;

    input[type="checkbox"] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;

      &:checked + label::after {
        position: absolute;
        color: #0080ff;
        font-family: "Netflix Icon";
        content: "\\e804";
        font-size: 28px;
        top: -2px;
        left: -36px;
        line-height: 1.1997857143;
      }

      &:checked + label::before {
        box-shadow: 0 0 5px 2px rgb(150 200 255 / 60%);
        border-color: grey;
      }

      & + label {
        color: #333;
        position: relative;
        display: block;
        line-height: 19.2px;
        padding: 6px 0;

        &::before {
          width: 25px;
          height: 25px;
          content: "";
          position: absolute;
          display: block;
          top: 2px;
          left: -36px;
          padding: 0;
          border: 1px solid #b3b3b3;
          background-color: white;
          box-sizing: content-box;
        }
      }
    }
  }
`;

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

export const ProfileStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #141414;
  z-index: 0;
  text-align: center;
  line-height: 1.4;
  color: white;

  b {
    font-weight: 600;
  }

  ul {
    padding: 0;
    margin-top: 25.6px;
    margin-bottom: 25.6px;
  }

  li {
    display: inline-block;
    vertical-align: top;
    position: relative;

    a {
      text-decoration: none;
      color: white;
      cursor: pointer;

      &:hover {
        .profile-name {
          color: #e5e5e5;
        }

        .profile-icon::after {
          border-color: #e5e5e5;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      .profile-name {
        color: #e5e5e5;
      }

      .profile-icon::after {
        border-color: #e5e5e5;
      }
    }
  }

  .centered-div {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-pack: center;

    .list-profiles {
      max-width: 80%;
      background-color: #141414;

      .profile-gate-label {
        width: 100%;
        color: white;
        font-size: 3.5vw;
        font-weight: unset;
        margin: 0.67em 0;
      }

      .choose-profile {
        margin: 2em 0;
      }

      .avatar-wrapper {
        position: relative;
      }
    }
  }

  .profile-pin-prompt {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 300ms ease-out;

    .pin-input-container {
      border: none;
      box-flex: 0;
      flex: 0 1 auto;
      display: flex;
      color: #000;
      margin: 0.5em;
      direction: ltr;
    }

    .pin-number-input {
      width: 3.5em;
      height: 3.5em;
      font-size: 49px;
      padding: 0.2em;
      margin: 0.2em;
      text-align: center;
      border: 0.05em solid white;
      box-sizing: border-box;
      box-shadow: none;
      background: 0 0;
      color: white;
      transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out,
        -moz-transform 0.1s ease-out, -o-transform 0.1s ease-out;
      line-height: 3;

      &:focus {
        transform: scale(1.1);
      }
    }
  }

  .pin-input-error {
    min-height: 30px;
    color: #b9090b;
    font-size: 1.3vw;
    margin: 1em 0;
  }

  .profile-pin-prompt-forgot {
    position: absolute;
    bottom: 5vw;
    font-size: 1.3vw;

    .nf-flat-button {
      color: #ccc;
    }
  }

  .nf-flat-button {
    padding: 0.57em 1.35em;

    .nf-flat-button-text {
      vertical-align: middle;
      padding: 0;
      margin: 0;
      top: auto;
      white-space: nowrap;
    }
  }

  .nf-icon-button {
    display: inline-block;
    position: relative;
  }

  .nf-flat-button-type-borderless {
    font-size: inherit;
    margin: 0;
    background: 0 0;
    box-shadow: none;
    text-transform: none;
    font-weight: 400;
    border: 0.1em solid transparent;
  }

  .profile-pin-dismiss {
    position: absolute;
    top: 100px;
    right: 30px;

    a {
      display: block;
    }

    svg {
      width: 2vw;
      height: 2vw;
      color: #ccc;
    }
  }

  .profile-pin-prompt-status {
    color: #aaa;
    font-size: 1.3vw;
  }

  .profile-pin-prompt-label {
    width: 100%;
    color: white;
    font-size: 2.5vw;
    opacity: 1;
    font-weight: 700;
    transition: opacity 400ms ease-out;
    margin: 0.5em 0 1em 0;
  }

  .profile-pin-prompt-pad-wrapper {
    display: flex;
    box-align: center;
    align-items: center;
    box-orient: vertical;
    box-direction: normal;
    flex-direction: column;
  }

  li.profile {
    width: 10vw;
    max-width: 200px;
    min-width: 84px;

    & > a:hover {
      .add-profile-icon {
        background-color: #e5e5e5;
        border-radius: 4px;
      }
    }

    .svg-icon-profile-lock {
      width: 20px;
      height: 20px;
      color: #666;
    }
  }

  li.profile:not(:last-child) {
    margin: 0 2vw 0 0;
  }

  .add-profile-icon {
    font-size: 6.25rem;
    color: grey;
    text-align: center;
    text-decoration: none;
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "\\e716";
    }
  }

  .profile-icon {
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    position: relative;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #333;
    border-radius: 4px;
    border: none;
    opacity: ${(props) => (props.edit ? "0.5" : "1")};

    &::after {
      content: "";
      border-radius: 4px;
      border: 0.3em solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-sizing: content-box;
    }
  }

  .profile-button {
    display: block;
    margin: 2em 0 1em 0;
    font-size: 1.2vw;
    border: 1px solid grey;
    color: grey;
    padding: 0.5em 1.5em;
    letter-spacing: initial;
    cursor: pointer;
    background-color: transparent;
    box-sizing: content-box;
    text-decoration: none;

    &:hover {
      color: white;
      border-color: white;
    }
  }

  .profile-button.preferred-action {
    background: white;
    color: black;
    border: 1px solid white;
    font-weight: 600;
  }

  .profile-button.preferred-action.preferred-active,
  .profile-button.preferred-action:focus,
  .profile-button.preferred-action:hover {
    background-color: #c00;
    border: 1px solid #c00;
    color: white;
  }

  .profile-name {
    line-height: 1.5;
    font-size: 1.5rem;
    min-height: 1.8em;
    color: grey;
    text-align: center;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0.6em 0;
  }

  .list-profiles {
    .svg-edit {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .svg-icon-edit {
        width: 2.625rem;
        height: 2.625rem;
        max-width: 70px;
        max-height: 70px;
        border: 1px solid transparent;
        margin: 0 -1px;
      }
    }
  }

  .profile-actions-container {
    text-align: left;
    position: relative;

    h1 {
      font-size: 4vw;
      margin: 0;
      font-weight: 400;
    }

    h2 {
      font-size: 1.3vw;
      color: #666;
      font-weight: 400;
      margin: 0.83em 0;
    }

    h2.profile-entry-header {
      margin: 0 0 7px 0;
      color: #ccc;

      svg {
        vertical-align: middle;
      }
    }

    .profile-button {
      display: inline-block;
      margin-right: 20px;
    }
  }

  .profile-entry {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;

    input[type="checkbox"] {
      display: none;

      & + label {
        border: 1px solid #333;
        border-radius: 0;
        display: inline-block;
        position: relative;
        margin-right: 0.5em;
        font-size: 0.8vw;
        width: 2.5em;
        height: 2.5em;
      }
    }
  }

  .profile-metadata {
    display: flex;
    padding: 1.75em 0;

    img {
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .main-profile-avatar {
      white-space: nowrap;
      margin-right: 1.5vw;
      width: 8vw;
      min-width: 80px;
      max-width: 180px;

      img {
        border-radius: 4px;
        height: 8vw;
        width: 8vw;
        max-height: 180px;
        max-width: 180px;
        min-height: 80px;
        min-width: 80px;
      }
    }

    .profile-entry-inputs {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      vertical-align: middle;

      input[type="text"] {
        width: 18em;
        height: 2em;
        background: #666;
        border: 1px solid transparent;
        margin: 0 0.8em 0 0;
        padding: 0.2em 0.6em;
        color: white;
        font-size: 1.3vw;
        text-indent: 0.1vw;
        line-height: 1.5397536058;
        outline: none;
      }
    }

    .add-kids-option {
      display: flex;
      align-items: center;
      position: relative;
      margin: 5px 0;
    }

    .add-kids-marker {
      font-weight: 400;
      font-size: 1.3vw;
    }
  }

  .profile-add-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .kids-profile-tooltip {
    position: absolute;
    left: -6em;
    bottom: 3em;
    width: 18em;
    font-size: 1vw;
    background: white;
    color: black;
    padding: 0.8em;
    text-align: center;
    z-index: -1;
    transition: opacity 0.3s linear 50ms, z-index 1ms linear 350ms;
    opacity: 0;
  }

  .kids-profile-tooltip.show-tooltip {
    opacity: 1;
    z-index: 1;
    transition: opacity 0.3s linear 0.4s, z-index 1ms linear;
    box-sizing: content-box;

    &::after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-top-color: white;
      border-width: 0.7em;
      margin-left: -0.7em;
    }
  }

  .avatar-box {
    position: relative;

    .avatar-edit-icon {
      cursor: pointer;
      position: absolute;
      bottom: 7%;
      left: 7%;
      border: none;
      background-color: transparent;
      height: 35px;
      padding: 1px 6px;

      svg {
        width: 28px;
        height: 28px;
        max-width: 45px;
        max-height: 45px;
        background-color: rgba(0, 0, 0, 0.7);
        filter: drop-shadow(1px 1px 2px #000);
        border-radius: 5rem;
        color: white;
      }
    }
  }

  .profile-edit-inputs {
    position: relative;
    display: flex;
    box-orient: horizontal;
    box-direction: normal;
    flex-direction: row;
    box-align: center;
    align-items: center;
  }

  .profile-entry {
    label {
      display: inline;
    }

    input[type="text"] {
      width: 18em;
      height: 2em;
      background: #666;
      border: 1px solid transparent;
      margin: 0 0.8em 0 0;
      padding: 0.2em 0.6em;
      color: white;
      font-size: 1.3vw;
      text-indent: 0.1vw;
    }
  }

  .profile-name-entry:focus {
    outline: none;
  }

  .profile-entry-dropdowns {
    display: flex;
    box-orient: vertical;
    box-direction: normal;
    flex-direction: column;

    .profile-dropdown {
      margin-top: 1rem;

      .profile-dropdown-label {
        font-size: 1.3vw;
        margin-bottom: 7px;
        color: #ccc;
      }

      .nf-dropdown.theme-lakira {
        min-width: 18rem;
      }
    }
  }

  .nf-dropdown.theme-lakira {
    position: relative;
    text-align: left;

    .label {
      height: 2.5rem;
      padding-left: 10px;
      line-height: 2.5rem;
      letter-spacing: 1px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.9);
      display: inline-block;
      color: white;
      background-color: black;
      appearance: none;
      border-radius: 0;
      position: relative;
      padding-right: 50px;

      .arrow {
        border-color: #fff transparent transparent;
        border-style: solid;
        border-width: 5px 5px 0;
        height: 0;
        position: absolute;
        right: 10px;
        top: 44%;
        width: 0;
      }
    }
  }

  .profile-entry-lock {
    margin: 1.5vw 0 0 0;
    border-top: 1px solid #333;
    padding: 1.5vw 0 0 0;

    svg {
      width: 1.3vw;
      height: 1.3vw;
      margin-right: 1vw;
    }
  }

  .profile-entry-restrictions {
    margin: 1.5vw 0 0 0;
    border-top: 1px solid #333;
    padding: 1.5vw 0 0 0;
    font-size: 1vw;

    .profile-maturity-label {
      border-radius: 2px;
      background-color: #333;
      padding: 7px 10px;
      font-weight: 600;
      margin-right: 5px;
    }

    .profile-button {
      font-size: 1vw;
      margin: 1em 0 1em 0;
    }
  }

  .profile-entry-autoplay {
    margin: 1.5vw 0 0 0;
    border-top: 1px solid #333;
    padding: 1.5vw 0 0 0;

    .autoplay-option {
      display: flex;
      box-align: center;
      align-items: center;
      margin: 5px 0;
      font-size: 0.9vw;
    }
  }

  .profile-entry {
    input[type="checkbox"] {
      display: none;

      &:checked + label {
        border: 1px solid #333;
        color: #99a1a7;
      }
    }
  }

  .svg-icon {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }
`;

export const FooterStyle = styled.div`
  min-width: 190px;
  width: 100%;
  padding-bottom: 20px;
  font-size: 1rem;
  color: #757575;
  position: relative;
  background-color: ${(props) => props.registration && "#f3f3f3"};
  background-color: ${(props) => props.dark && "rgba(0, 0, 0, 0.75)"};
  margin-top: ${(props) => props.youraccount && "80px"};

  ${(props) =>
    props.home &&
    `
  max-width: 980px;
  margin: 20px auto 0;
  padding: 0 4%;
  color: grey;
  box-sizing: content-box;
  background-color: transparent;
`}

  .footer-divider {
    display: ${(props) => props.login && "none"};
    height: 0;
    width: 100%;
    border-top: ${(props) =>
      (props.registration || props.youraccount) && "1px solid #e5e5e5"};
  }

  .footer-site {
    margin: 0 auto;
    width: 90%;
    padding-top: ${(props) =>
      (props.registration || props.youraccount) && "30px"};
    padding-bottom: ${(props) => props.login && "30px"};
    max-width: ${(props) => props.center && "1000px"};

    ${(props) =>
      props.home &&
      `
    margin: 0;
    width: 100%;
    box-sizing: content-box;
  `}
  }

  .social-links {
    display: flex;
    margin-bottom: 1em;

    a {
      margin-right: 15px;
      text-decoration: none;
      color: white;
      cursor: pointer;
      background-color: transparent;

      svg {
        height: 25px;
        width: 36px;
        border: 1px solid transparent;
        margin: 0 -1px;
        box-sizing: content-box;
      }
    }
  }

  .footer-top {
    padding: 0;
    margin-bottom: 30px;
    line-height: 1.3125;
  }

  .footer-top-a {
    color: #757575;
  }

  .footer-contents {
    max-width: 1000px;
    font-size: 0.8125rem;
    margin-bottom: 14px;

    .footer-list {
      list-style: none;
      padding: 0;
      margin-bottom: 16px;
      display: inline-block;
      min-width: 100px;
      width: 25%;
      padding-right: 12px;
      vertical-align: top;
      font-size: 0.8125rem;
      line-height: 1.3076923077;

      ${(props) =>
        props.home &&
        `
    line-height: 1.4;
    `}

      & > span {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .member-footer-service {
    .service-code {
      font-size: 0.8125rem;
      padding: 0.5em;
      background: 0 0;
      color: grey;
      border: 1px solid grey;
      cursor: pointer;
    }
  }

  .language-selector {
    margin-top: ${(props) => (props.registration ? "null" : "20px")};

    ${(props) =>
      props.login &&
      `
  margin-top: 20px;`}

    .language-switcher {
      width: auto;
      display: inline-block;
      position: relative;
    }

    .select {
      position: relative;
      display: inline-block;
      width: 100%;

      &::before {
        font-family: "Netflix Icon";
        position: absolute;
        top: 17px;
        left: 15px;
        color: #999;
        content: "\\e896";
        font-size: 1rem;
        line-height: 1.1875;

        ${(props) =>
          props.login &&
          `
      top: 14px;
      left: 15px;
      `}
      }

      &::after {
        font-family: "Netflix Icon";
        position: absolute;
        top: 22px;
        right: 10px;
        color: #999;
        content: "\\e898";
        font-size: 6px;

        ${(props) =>
          props.login &&
          `
        top: 18px;
      `}
      }

      select {
        text-indent: 0;
        appearance: none;
        padding: ${(props) =>
          props.registration ? "10px 30px 12px 42px" : "12px 26px 12px 50px"};
        line-height: 1.7;
        background-color: ${(props) => (props.dark ? "black" : "white")};
        border: 1px solid
          ${(props) => (props.registration ? "#a6a6a6" : "#333333")};
        color: #999;
        font-size: ${(props) => (props.login ? "0.8125rem" : "1rem")};
        border-radius: 2px;
        width: 100%;

        ${(props) =>
          props.login &&
          `
      border: 1px solid #333;
      font-size: 0.8125rem;
      padding: 12px 26px 12px 50px;
      width: 42.5px;
      box-sizing: content-box;`}
      }
    }
  }

  .footer-country {
    font-size: 0.8125rem;
    margin: 24px 0 13px;
    line-height: 1.3076923077;
  }

  .footer-text {
    font-size: 0.75rem;
    line-height: 1em;
    margin: 20px 0 0;
    color: #757575;
    padding-bottom: ${(props) => props.home && "15px"};
    padding-bottom: ${(props) => props.youraccount && "20px"};

    ${(props) =>
      props.home &&
      `
  font-size: 0.6875rem;
  line-height: 1.4;

  `}

    & > div {
      margin-top: 4px;

      & > a {
        color: #757575;
        text-decoration: none;
      }
    }

    .member-footer-instance {
      padding: 0 4px;
      display: inline-block;
    }
  }

  .service-code-wrapper {
    color: #757575;
    margin: 45px 0 20px;
  }

  .service-code {
    border: 1px solid #757575;
    padding: 8px;
    display: inline-block;
    color: #757575;
    font-size: 0.8521em;
    min-width: 90px;
    text-align: center;
    box-sizing: content-box;
  }
`;

export const FixedHeaderStyle = styled.div`
  color: white;
  height: 70px;
  line-height: 1.4;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .fixed-header-container {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .main-header {
      background-color: transparent;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 10%,
        rgba(0, 0, 0, 0)
      );
      height: 68px;
      z-index: 2;
      padding: 0 60px;
      font-size: 0.875rem;
      position: relative;
      display: flex;
      align-items: center;
      transition: background-color 400ms ease;
      background-color: ${(props) =>
        props.fixed && !props.mylist ? "rgb(20, 20, 20)" : "transparent"};

      .main-header-logo {
        text-decoration: none;

        &::before {
          font-size: 1.5625rem;
          font-family: "Netflix Icon";
          content: "\\e5d0";
          color: #e50914;
          margin-right: 25px;
        }
      }

      .first-nav {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

        .nav-menu {
          display: none;
        }

        .nav-tab {
          margin-left: 20px;
          list-style-type: none;
          color: #e5e5e5;

          a {
            color: #e5e5e5;
            text-decoration: none;
            position: relative;
            transition: color 400ms;
            display: flex;
            align-items: center;
            height: 100%;
            cursor: pointer;
          }

          a:hover {
            color: #b3b3b3;
          }
        }
      }

      .secondary-nav {
        position: absolute;
        top: 0;
        right: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-grow: 1;
        height: 100%;

        .nav-element {
          margin-right: 20px;

          .search-box {
            display: inline-block;
            vertical-align: middle;

            .search-tab {
              display: inline-block;
              cursor: pointer;
              border: none;
              background: 0 0;
              padding: 1px 6px;

              .search-icon {
                font-size: 1.3em;
                margin-right: 0;
                vertical-align: middle;
                line-height: 1;
                color: white;
                text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
                font-family: "Netflix Icon";

                &::before {
                  content: "\\e636";
                }
              }
            }
          }

          .notifications {
            position: relative;
            white-space: normal;

            .notifications-menu {
              background-color: transparent;
              border: none;
              font-size: 1.5em;
              line-height: 1;
              margin-top: 0.2em;
              padding: 2px 6px 3px;
              position: relative;
              cursor: pointer;

              .notifications-icon {
                font-family: "Netflix Icon";

                &::before {
                  content: "\\e663";
                  color: white;
                }
              }
            }
          }

          .account-menu-item {
            position: relative;
            font-size: 0.75rem;
            z-index: 0;

            .account-dropdown-button {
              display: flex;
              align-items: center;
              width: 100%;
              cursor: pointer;

              .callout-arrow {
                position: absolute;
                bottom: -19px;
                left: 50%;
                border-width: 7px;
                margin-left: -7px;
                border-color: transparent transparent #e5e5e5;
                border-style: solid;
                height: 0;
                width: 0;
                transition: opacity 150ms;
              }

              .profile {
                z-index: -1;
                position: relative;

                .profile-link {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  color: white;

                  .profile-icon {
                    vertical-align: middle;
                    width: 32px;
                    height: 32px;
                    border-radius: 4px;
                  }
                }
              }

              .caret {
                margin-left: 10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 5px 5px 0 5px;
                border-color: white transparent transparent transparent;
                transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
                  -webkit-transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
                  -moz-transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
                  -o-transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
              }

              .caret.open {
                transform: rotate(180deg);
              }
            }

            .account-dropdown {
              position: absolute;
              right: 0;
              top: 52px;
              width: 181px;
              margin-left: 0;
              padding: 0;

              a {
                color: white;
                text-decoration: none;

                &:hover {
                  text-decoration: underline;
                }
              }

              .submenu-list {
                display: block;
                width: 100%;
                margin: 0;
                padding: 0;
                height: auto;
              }

              .account-links {
                padding: 10px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.25);
              }

              .profiles {
                height: auto;
                padding: 10px 0 5px 0;
                overflow: hidden;

                .submenu-item {
                  line-height: 32px;

                  & > div {
                    display: flex;
                    align-items: center;

                    .avatar-wrapper {
                      display: inline;

                      .profile-icon {
                        margin-right: 10px;
                        vertical-align: middle;
                        height: 32px;
                        width: 32px;
                        border-radius: 4px;
                      }
                    }
                  }
                }

                .profile-link {
                  span {
                    line-height: 32px;
                  }
                }

                .profile-name {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 100px;
                  font-size: 0.8125rem;
                  line-height: 1.3846153846;
                  vertical-align: middle;
                  display: inline-block;
                  white-space: pre;
                  color: white;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }

              .submenu-item {
                padding: 5px 10px;
                display: block;
                font-size: 0.8125rem;
                line-height: 1.2307692308;

                .submenu-link-icon {
                  display: flex;
                  align-items: center;

                  svg {
                    color: #b3b3b3;
                    padding: 0 13px 0 5px;
                    box-sizing: content-box;
                  }
                }
              }

              .sign-out-links {
                .submenu-link {
                  text-align: center;
                  width: 100%;
                  display: block;
                }
              }
            }

            .submenu.theme-lakira {
              background-color: rgba(0, 0, 0, 0.9);
              color: white;
              font-size: 0.8125rem;
              line-height: 1.3125;
              border: 1px solid rgba(255, 255, 255, 0.15);
            }
          }
        }

        .nav-element:last-child {
          margin-right: 0;
        }

        &.search-focused {
          .search-box {
            margin-left: 100px;
          }
        }

        .icon-search {
          font-size: 1.1375rem;
          margin-right: 0;
          vertical-align: middle;
          padding: 0 6px;
          cursor: pointer;

          &::before {
            content: "\\e636";
          }
        }
      }
    }

    .search-input {
      display: flex;
      box-align: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.85);

      input {
        color: white;
        display: inline-block;
        background: 0 0;
        border: none;
        padding: 7px 14px 7px 7px;
        font-size: 14px;
        width: 212px;
        outline: none;

        &:focus {
          outline: none;
        }
      }

      .icon-close {
        cursor: pointer;
        margin: 0 6px;
        font-size: 13px;

        &::before {
          content: "\\e762";
        }
      }
    }

    .sub-header {
      position: relative;
      height: 68px;
      z-index: 1;

      .sub-header-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        padding: 0 60px;
        height: 68px;

        .gallery-header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 0;
          min-height: 0;
          padding: 0;
          flex-grow: 1;

          .title {
            font-size: 2.1875rem;
            display: inline-block;
            /* margin-right: 20px; */
            line-height: 1.0285714286;
          }

          .genre-title {
            font-size: 2.375rem;
            line-height: 1;
            font-weight: 600;
            margin-right: 15px;
          }

          .sub-genres {
            display: inline-block;
            vertical-align: top;
            margin: 0 30px;
          }
        }
      }
    }

    .arrow-genre-details {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .nfDropDown.theme-lakira {
      position: relative;
      text-align: left;

      .label {
        height: 2.1875rem;
        padding-left: 10px;
        line-height: 2.1875rem;
        letter-spacing: 1px;
        font-size: 1.09375rem;
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.9);
        display: inline-block;
        color: white;
        background-color: black;
        appearance: none;
        border-radius: 0;
        position: relative;
        padding-right: 50px;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          outline: 0;
        }

        .arrow {
          border-color: white transparent transparent;
          border-style: solid;
          border-width: 5px 5px 0;
          height: 0;
          position: absolute;
          right: 10px;
          top: 44%;
          width: 0;
        }
      }
    }
  }

  .sub-menu.theme-lakira {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    line-height: 21px;
    border: solid 1px rgba(255, 255, 255, 0.15);
    cursor: default;

    .sub-menu-list {
      height: auto;
      cursor: default;
    }

    .sub-menu-list.multi-column {
      display: table-cell;
    }

    .sub-menu-item {
      cursor: default;
      line-height: 24px;
      display: block;
    }

    .sub-menu-link {
      text-transform: none;
      display: inline-block;
      width: 100%;
      color: white;
    }
  }

  .nfDropDown.theme-lakira {
    .sub-menu {
      overflow-x: hidden;
      z-index: 2;
      padding: 0;
      margin: 0;
      top: 2.1875rem;
      left: 0;
      font-size: 0.875rem;

      .sub-menu-list {
        padding: 5px 0;
        margin: 0;
      }

      .sub-menu-item {
        a {
          padding: 1px 20px 1px 10px;
        }
      }

      .sub-menu-link {
        display: inline-block;
        width: 100%;
        padding: 1px 0;
      }
    }
  }

  .gallery-header .sub-genres .sub-menu .sub-menu-link {
    white-space: nowrap;
  }

  .bread-crumbs {
    font-size: 18px;
    color: grey;

    ul {
      padding: 0;
      margin: 0;

      li {
        list-style: none;
        display: inline;
        padding-right: 10px;
        z-index: 3;
        position: relative;

        &::after {
          padding-left: 10px;
          content: ">";
        }

        a {
          color: grey;
        }
      }
    }
  }
`;

export const LoadingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: #141414;
  z-index: 0;
  line-height: 1.4;
  font-size: 14px;

  .centered-div {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .centered-div.loading-wrapper {
    opacity: 1;
  }

  .loading-profile-wrapper {
    transform: scale(0.4);
    opacity: 1;
    transition-duration: 450ms;

    .akira-spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 480px;
      margin-left: -240px;
      margin-top: -240px;
    }
  }

  .akira-spinner {
    color: #e50914;
    display: inline-block;
    animation: ${spinAnimation} 750ms infinite;
    animation-timing-function: linear;

    &::before {
      font-family: "Netflix Icon";
      content: "\\e765";
    }
  }

  .profile-icon {
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-height: 84px;
    position: relative;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #333;
    border-radius: 4px;
    border: none;

    &::after {
      content: "";
      display: block;
      border-radius: 4px;
      border: 0.3em solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  ul {
    padding: 0;
    margin: 1em 0;
  }

  li {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
`;

export const MainViewStyle = styled.span`
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

export const BackDropStyle = styled.div`
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

export const RowContainerStyle = styled.div`
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

export const SignUpHeaderStyle = styled.div`
  border-bottom: ${(props) =>
    props.login ? "transparent" : "1px solid #e6e6e6"};
  background: ${(props) =>
    props.login
      ? "linear-gradient(to bottom,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 100%)"
      : "white"};
  height: 90px;
  position: ${(props) => (props.login ? "absolute" : "relative")};
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.login &&
    `
top: 0;
left: 0;
right: 0;
width: 100%;`}

  .netflix-logo {
    margin-left: 3%;
    text-decoration: none;
    line-height: 90px;
    vertical-align: middle;
    fill: #e50914;
    display: inline-block;

    .svg-icon-netflix-logo {
      height: 45px;
      width: 167px;
      vertical-align: middle;
    }
  }

  .login-link {
    margin: 0 3%;
    color: #333;
    font-weight: 700;
    font-size: 1.1875rem;
    line-height: 90px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RegistrationStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  word-break: keep-all;

  b {
    font-weight: 700;
  }

  .main-container {
    padding-bottom: 95px;
    flex-grow: 1;
    background-color: white;
    width: 100%;
    overflow: hidden;
    word-break: keep-all;

    .center-container {
      padding: 20px 32px 60px;
      margin: 0 auto 15px;
      max-width: 978px;

      .registration-container {
        max-width: 340px;
        text-align: center;
        margin: 0 auto;

        .step-logo-container {
          display: inline-block;

          .step-logo {
            display: block;
            margin: 100px 0 20px;
            width: 260px;
            background: url("https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png")
              no-repeat 50% 50%;
            height: 90px;
            background-size: 260px;
          }
        }

        .step-header-container {
          display: block;

          .step-header {
            display: inline-block;

            .step-indicator {
              display: block;
              font-size: 0.8125rem;
              line-height: 1.4615384615;
            }

            .step-title {
              font-size: 2rem;
              display: inline-block;
              font-weight: 700;
              margin: 0 0 0.4em;
              line-height: 1.3125;
            }
          }
        }

        .step-text {
          font-size: 1.125rem;
          line-height: 1.3333333333;
          max-width: 300px;
          display: inline-block;
        }
      }

      .submit-button-container {
        display: block;
        max-width: 340px;
        margin: 0 auto;
        margin-top: 24px;
        text-align: center;

        .submit-button {
          color: white;
          min-height: 64px;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 1;
          border: none;
          border-radius: 4px;
          background-color: #e50914;
          width: 100%;
          cursor: pointer;

          &:hover {
            background-color: #f6121d;
          }
        }
      }

      .reg-form-container {
        text-align: left;
        max-width: 440px;
        margin: 0 auto;

        & > div:first-child {
          .step-header {
            margin-top: 20px;

            .step-indicator {
              font-size: 0.8125rem;
              line-height: 1.4615384615;
              display: block;
            }

            .step-title {
              font-size: 2rem;
              line-height: 1.3125;
              margin: 0 0 0.4em;
              font-weight: 600;
            }
          }

          & > div:last-child {
            & > div {
              font-size: 1.125rem;
              line-height: 1.3333333333;
            }

            & > div:nth-child(2) {
              margin-top: 10px;
            }
          }

          .simple-form {
            margin: 10px 0 20px;

            .form-list {
              margin-bottom: 10px;

              .form-input {
                max-width: 500px;
                position: relative;
                display: block;

                .input-placement {
                  position: relative;

                  input {
                    height: 60px;
                    padding: 10px 10px 0;
                    width: 100%;
                    appearance: none;
                    font-size: 1rem;
                    border-radius: 2px;
                    border: 1px solid #8c8c8c;
                    display: block;
                    color: black;
                    outline: none;

                    &#email {
                      border-color: ${(props) =>
                        props.email ? "#5fa53f" : "#b92d2b"};
                    }

                    &#password {
                      border-color: ${(props) =>
                        props.password ? "#5fa53f" : "#b92d2b"};
                    }
                  }

                  .place-label {
                    position: absolute;
                    top: 6px;
                    left: 10px;
                    font-weight: 700;
                    font-size: 0.8125rem;
                    color: #8c8c8c;
                  }
                }

                .input-error {
                  font-size: 0.8125rem;
                  line-height: 1.3076923077;
                  color: #b92d2b;
                }
              }

              .checkbox-wrapper {
                position: relative;
                padding-left: 36px;
                min-height: 32px;
                font-size: 1rem;
                max-width: 500px;
                user-select: none;

                input[type="checkbox"] {
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0;
                  margin: 0;
                }

                label {
                  margin: 8px 0;
                  padding: 6px 0;
                  display: block;
                  position: relative;
                  line-height: 1.2;

                  &::before {
                    content: "";
                    border: 1px solid black;
                    width: 25px;
                    height: 25px;
                    display: block;
                    position: absolute;
                    top: 2px;
                    left: -36px;
                    box-sizing: content-box;
                  }

                  &.privacy-consent::before {
                    border-color: ${(props) => !props.mandatory && "#b92d2b"};
                  }

                  &.email-consent::before {
                    border-color: ${(props) => !props.optional && "#b92d2b"};
                  }

                  ${(props) =>
                    props.mandatory &&
                    `
                &.privacy-consent::after {
                  display: block;
                  position: absolute;
                  top: 7px;
                  left: -32px;
                  height: 6px;
                  width: 14px;
                  content: "";
                  border-left: 4px solid #0071eb;
                  border-bottom: 4px solid #0071eb;
                  transform: rotate(-45deg);
                  box-sizing: content-box;
                }
                `}

                  ${(props) =>
                    props.optional &&
                    `&.email-consent::after {
                  display: block;
                  position: absolute;
                  top: 7px;
                  left: -32px;
                  height: 6px;
                  width: 14px;
                  content: "";
                  border-left: 4px solid #0071eb;
                  border-bottom: 4px solid #0071eb;
                  transform: rotate(-45deg);
                  box-sizing: content-box;
                }`}
                }

                .helper {
                  color: #b92d2b;
                  font-size: 0.8125rem;
                  line-height: 1em;
                }
              }
            }
          }
        }

        .submit-button-container {
          display: block;
          max-width: 440px;
          margin: 0 auto;
          margin-top: 24px;
          text-align: center;

          .submit-button {
            color: white;
            min-height: 64px;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 1;
            border: none;
            border-radius: 4px;
            background-color: #e50914;
            width: 100%;
            cursor: pointer;

            &:hover {
              background-color: #f6121d;
            }
          }
        }
      }

      .payment-form {
        .payment-form-container {
          text-align: center;
          max-width: 440px;
          margin: 0 auto;

          & > div:first-child {
            text-align: left;
            .step-header-container {
              display: block;

              .step-header {
                display: inline-block;

                .step-indicator {
                  display: block;
                  font-size: 0.8125rem;
                  line-height: 1.4615384615;
                }

                .step-title {
                  font-size: 2rem;
                  display: inline-block;
                  font-weight: 700;
                  margin: 0 0 0.4em;
                  line-height: 1.3125;
                }
              }
            }
          }

          .field-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            text-align: left;

            .logos {
              display: inline-block;
              white-space: nowrap;
              margin-top: -4px;
              overflow: auto;
              vertical-align: middle;
              height: 30px;

              .logo-icon {
                margin-top: 4px;
                margin-right: 6px;
                margin-bottom: 1px;
                width: auto;
                background-image: none;
                height: 25px;
              }
            }

            .form {
              & > ul {
                text-align: left;
                margin-top: 10px;

                .form-list {
                  list-style: none;
                  margin-bottom: 10px;

                  .form-input {
                    position: relative;
                    max-width: 500px;

                    .input-placement {
                      position: relative;

                      .input {
                        input {
                          height: 60px;
                          padding: 10px 10px 0;
                          width: 100%;
                          outline: none;
                          font-size: 1rem;
                          border: 1px solid #8c8c8c;
                          border-radius: 2px;

                          &#username {
                            border-color: ${(props) =>
                              props.username ? "#5fa53f" : "#b92d2b"};
                          }

                          &#card-number {
                            border-color: ${(props) =>
                              props.card ? "#5fa53f" : "#b92d2b"};
                          }
                        }

                        label {
                          position: absolute;
                          color: #8c8c8c;
                          top: 6px;
                          left: 10px;
                          font-weight: 600;
                          font-size: 0.8125rem;
                          line-height: 1.3076923077;
                        }
                      }
                    }

                    .input-error {
                      font-size: 0.8125rem;
                      line-height: 1.3076923077;
                      color: #b92d2b;
                    }
                  }
                }
              }
            }

            .order-info {
              background-color: #f4f4f4;
              border-radius: 5px;
              list-style-type: none;
              margin: 0;
              padding: 0;
              text-align: left;

              .order-info-item {
                .item-container {
                  display: flex;

                  .item-content {
                    flex: 1 1 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 72px;
                    padding: 7px 14px;
                    overflow: hidden;

                    .item-title {
                      font-size: 1rem;
                      font-weight: 600;
                      color: #333;
                      line-height: 1;
                    }

                    .item-desc {
                      padding-top: 5px;
                      font-size: 1rem;
                      font-weight: 400;
                      color: #737373;
                    }
                  }

                  .order-info-item-button {
                    font-size: 1rem;
                    appearance: none;
                    background: 0 0;
                    border: none;
                    margin: 0;
                    padding: 14px;
                    flex: 0 0 auto;
                    font-weight: 600;
                    color: #0071eb;
                    cursor: pointer;

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
              }
            }

            .tou-container {
              margin-top: 20px;
              box-sizing: content-box;
              color: #333333;

              .terms-of-use {
                box-sizing: content-box;

                .consent-input {
                  box-sizing: border-box;
                  position: relative;
                  padding-left: 36px;
                  min-height: 32px;
                  font-size: 1rem;
                  max-width: 500px;

                  input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                  }

                  .checkbox-label {
                    margin: 8px 0;
                    position: relative;
                    display: block;
                    line-height: 1.2;
                    padding: 6px 0;
                    box-sizing: content-box;
                    font-weight: 400;

                    &.bold {
                      font-weight: 600;
                    }

                    &::before {
                      content: "";
                      position: absolute;
                      display: block;
                      top: 2px;
                      left: -36px;
                      padding: 0;
                      border: 1px solid #333333;
                      width: 25px;
                      height: 25px;
                      box-sizing: content-box;
                    }

                    &::after {
                      display: block;
                      position: absolute;
                      top: 7px;
                      left: -32px;
                      width: 14px;
                      height: 6px;
                      color: #0071eb;
                      border-bottom: 4px solid;
                      border-left: 4px solid;
                      transform: rotate(-45deg);
                      box-sizing: content-box;
                    }

                    &.all::after {
                      ${(props) => props.all && `content: "";`}
                    }
                    &.tou::after {
                      ${(props) => props.tou && `content: "";`}
                    }
                    &.third-party::after {
                      ${(props) => props.tp && `content: "";`}
                    }
                    &.abroad::after {
                      ${(props) => props.abroad && `content: "";`}
                    }
                    &.gateway::after {
                      ${(props) => props.gateway && `content: "";`}
                    }
                    &.anytime::after {
                      ${(props) => props.anytime && `content: "";`}
                    }

                    span {
                      line-height: 1.2;
                      text-align: center;
                      vertical-align: middle;
                    }
                  }
                }

                .checkboxes {
                  box-sizing: border-box;

                  .checkboxes-heading {
                    box-sizing: content-box;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 0.75em;
                    margin-bottom: 1.5rem;
                  }

                  & > ul {
                    padding: 0;
                    margin: 0;

                    & > li {
                      list-style: none;
                      margin-left: 0;
                      margin-bottom: 5px;
                    }
                  }

                  .error-summary {
                    color: #e50914;
                  }
                }
              }
            }
          }
        }

        .submit-button-container {
          display: block;
          max-width: 440px;
          margin: 0 auto;
          margin-top: 24px;
          text-align: center;

          .submit-button {
            color: white;
            min-height: 64px;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 1;
            border: none;
            border-radius: 4px;
            background-color: #e50914;
            width: 100%;
            cursor: pointer;

            &:hover {
              background-color: #f6121d;
            }
          }
        }
      }

      .plan-form-container {
        max-width: 1024px;
        margin: 0 auto;
        overflow: hidden;

        & > div {
          display: block;

          .step-header-container {
            display: block;
            padding: 0 16px;
            box-sizing: content-box;

            .step-header {
              display: inline-block;

              .step-indicator {
                display: block;
                font-size: 0.8125rem;
                line-height: 2.0769230769;
              }

              .step-title {
                font-size: 2rem;
                display: inline-block;
                font-weight: 700;
                margin: 0 0 0.4em;
                line-height: 1.21875;
              }
            }
          }

          .change-anytime {
            padding: 0 16px;
            margin-bottom: 20px;

            .check-group {
              margin: 4px 0 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              text-align: left;

              .check-item {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                margin: 0;
                margin-top: 6px;

                svg {
                  align-self: flex-start;
                  color: #e50914;
                  flex: none;
                  height: 24px;
                  width: 24px;
                  overflow: hidden;
                }

                span {
                  margin-left: 10px;
                  font-size: 1.125rem;
                  line-height: 1.3333333333;
                }
              }

              .check-item:first-child {
                margin-top: 0;
              }
            }
          }
        }

        .plan-grid {
          .plan-grid-header {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .plan-grid-selection {
              width: 60%;
              display: flex;
              justify-content: center;

              .plan-grid-choice {
                width: calc(100% / 3);
                padding: 12px 0;
                flex: 1 1 auto;
                position: relative;

                .plan-choice {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  opacity: 0;
                  width: 120px;
                  height: 120px;
                  appearance: none;
                  z-index: -1;
                  background: 0 0;
                  margin: 0;
                }

                span {
                  opacity: 0.6;
                  padding: 1px;
                  width: 120px;
                  height: 120px;
                  background-color: #e50914;
                  color: white;
                  font-weight: 700;
                  border-radius: 2px;
                  font-size: 1.0625rem;
                  margin: 0 auto;
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  &.checked {
                    opacity: 1;
                  }

                  &.checked::after {
                    content: "";
                    display: block;
                    border: 0 solid transparent;
                    border-top-color: #e50914;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-width: 10px;
                    border-bottom-width: 0;
                  }
                }
              }
            }
          }

          .plan-grid-table {
            display: flex;
            flex-direction: column;
            padding-bottom: 10px;
            border-collapse: collapse;

            .plan-grid-tbody {
              display: flex;
              flex-direction: column;

              tr {
                border-bottom: 1px solid #ccc;
                min-height: 60px;
                display: flex;
                align-items: center;
                box-sizing: content-box;

                &:last-child {
                  border-bottom: none;
                }

                td {
                  padding: 12px 16px;
                  line-height: 1.3125;
                  width: calc(60% / 3);
                }

                .plan-grid-feature {
                  width: 40%;
                  color: #333;
                  fill: #333;
                  flex: 0 0 auto;
                  text-align: left;
                }

                .plan-grid-string {
                  font-weight: 700;
                  flex: 1 1 auto;
                  text-align: center;
                  color: #737373;
                }

                .plan-grid-string.checked {
                  color: #e50914;
                }

                .plan-grid-boolean {
                  padding: 11px 16px 5px;
                  text-align: center;
                  color: #737373;
                }

                .plan-grid-boolean.checked {
                  color: #e50914;
                  fill: #e50914;
                }
              }
            }
          }

          .plan-grid-disclaimer {
            padding: 0 150px 0 16px;
            color: #737373;
            font-size: 0.8125rem;
            line-height: 1.3076923077;
            display: block;
          }

          .plan-grid-disclaimer:last-child {
            margin-top: 10px;
          }
        }
      }

      .plan-container {
        max-width: 340px;
        margin: 0 auto;
        text-align: center;

        .step-logo-container {
          display: inline-block;
          text-align: center;

          .step-logo {
            margin: 100px 0 20px;
            text-align: center;
            width: 50px;
            height: 50px;
            display: block;
            background: url("https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png")
              no-repeat 50% 50%;
            background-size: 50px;
          }
        }

        .step-header-container {
          display: block;

          .step-header {
            display: inline-block;

            .step-indicator {
              display: block;
              font-size: 0.8125rem;
              line-height: 1.4615384615;
            }

            .step-title {
              font-size: 2rem;
              display: inline-block;
              font-weight: 700;
              margin: 0 0 0.4em;
              line-height: 1.3125;
            }
          }
        }

        .context-body {
          max-width: 300px;
          display: inline-block;

          .check-group {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 15px 0 20px;
            text-align: left;

            .check-item {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              margin: 0;
              margin-top: 20px;

              svg {
                align-self: flex-start;
                color: #e50914;
                flex: none;
                height: 24px;
                width: 24px;
                overflow: hidden;
              }

              span {
                margin-left: 10px;
                font-size: 1.125rem;
                line-height: 1.3333333333;
              }
            }

            .check-item:first-child {
              margin-top: 0;
            }
          }
        }
      }

      .payment-container {
        text-align: center;
        max-width: 500px;
        margin: 0 auto;

        .payment-header {
          margin-bottom: 20px;

          .step-logo-container {
            display: inline-block;

            .step-logo {
              display: block;
              margin: 20px 0;
              width: 50px;
              background: url("https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png")
                no-repeat 50% 50%;
              height: 50px;
              background-size: 50px;
            }
          }

          .step-header-container {
            display: block;

            .step-header {
              display: inline-block;
              margin-top: 20px;

              .step-indicator {
                display: block;
                font-size: 0.8125rem;
                line-height: 1.4615384615;
              }

              .step-title {
                font-size: 2rem;
                display: inline-block;
                font-weight: 700;
                margin: 0 0 0.4em;
                line-height: 1.3125;
              }
            }
          }

          .step-text {
            font-size: 1.125rem;
            line-height: 1.3333333333;
            max-width: 205px;
            margin: 0 auto;
            display: inline-block;

            .text-row {
              .bold-text {
                font-weight: 700;
              }
            }

            .text-row:last-child {
              margin-top: 10px;
            }
          }
        }

        .security {
          display: flex;
          flex-direction: row-reverse;
          height: 1rem;
          justify-content: flex-start;
          align-items: flex-end;

          .security-text {
            font-size: 0.8125rem;
            line-height: 1.0769230769;
          }

          svg {
            height: 16px;
            width: 16px;
            margin-left: 2px;
          }
        }

        .payment-selection {
          min-height: 50px;
          position: relative;

          .payment-option {
            min-height: 60px;
            height: auto;
            display: flex;
            align-items: center;
            cursor: pointer;
            text-align: left;
            padding: 0;
            position: relative;
            background-color: white;
            margin: 5px 0;
            border: 2px solid #ccc;
            border-radius: 5px;

            .names-and-logos {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 15px 0;
              flex-wrap: wrap;
              width: 90%;

              .text-container {
                margin: 5px 0 5px 15px;
                min-height: 20px;
                line-height: 1.25;
              }

              .logo-container {
                margin: 0 15px;
                min-height: 20px;

                .logos {
                  display: inline-block;
                  white-space: nowrap;
                  margin-top: -4px;
                  overflow: auto;
                  vertical-align: middle;
                  height: 30px;

                  .logo-icon {
                    margin-top: 4px;
                    margin-right: 6px;
                    margin-bottom: 1px;
                    width: auto;
                    background-image: none;
                    height: 25px;
                  }
                }
              }
            }

            .next-icon {
              background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/reg_selection/chevron_060915_2.svg");
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
              font-size: 1.1875rem;
              line-height: 1;
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
              vertical-align: bottom;
              display: inline-block;
              width: 1em;
              height: 1em;
              margin: 0 0.2em;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;

export const EmailFormStyle = styled.form`
  max-width: 950px;
  padding-top: 0.85rem;
  display: flex;
  flex-direction: column;

  & > h3 {
    max-width: none;
    font-size: 1.2rem;
    padding: 0 5%;
    padding-bottom: 20px;
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.328125;
  }

  & > div {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    text-align: center;

    & > ul {
      flex: 1 0 auto;
      text-align: right;
      vertical-align: top;
      padding: 0;
      margin: 0;

      & > li {
        list-style: none;
        margin-left: 0;
        margin-bottom: 10px;
        display: list-item;

        & > div {
          max-width: 500px;
          position: relative;

          & > div {
            position: relative;

            & > label > input {
              min-width: 500px;
              font-size: 1rem;
              height: 70px;
              padding: 10px 10px 0;
              width: 100%;
              border-radius: 2px;
              color: black;
              border: 1px solid #8c8c8c;
              appearance: none;
              outline: none;
              border-bottom: ${(props) => !props.valid && "2px solid #ffa00a"};
            }

            & > label > label {
              font-size: 0.8125rem;
              position: absolute;
              font-weight: 700;
              line-height: 1.3076923077;
              top: 6px;
              left: 10px;
              color: #8c8c8c;
            }

            & > div {
              color: #ffa00a;
              position: absolute;
              text-align: left;
              margin-bottom: -6px;
              padding: 6px 3px;
              font-size: 0.9375rem;
              line-height: 1.3;
            }
          }
        }
      }
    }

    & > div {
      display: inline-block;
      flex: 1 0 auto;

      .button-start {
        border: none;
        border-left: 1px solid #333;
        margin: 0;
        font-size: 1.875rem;
        min-height: 70px;
        padding: 0 1em;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        position: relative;
        appearance: none;
        background-color: #e50914;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: #f40612;
        }

        .button-text {
          padding: 0.5rem 0;
          flex: 1 1 auto;
          text-align: center;
          font-weight: 400;
        }

        .button-svg {
          height: 0.75em;
          width: 0.35em;
          flex: 0 1 auto;
          margin: 0 0 0 0.5em;
          position: relative;

          & > svg {
            position: absolute;
            top: 0;
            left: 0;
            margin: 1px 0;
            height: 100%;
            transform: scaleX(1);
            overflow: hidden;
          }
        }
      }
    }
  }
`;

export const HomeBodyStyle = styled.div`
  background-color: black;
  .main-card {
    position: relative;
    border-bottom: 8px solid #222222;
    margin-bottom: 0;
    background: 0 0;
    color: white;
    padding: 70px 45px;
    background-color: black;
    word-break: keep-all;
  }

  .main-card-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flip {
    .main-card-container {
      flex-flow: row-reverse;
    }

    .main-card-text {
      padding: 0 0 0 3rem;
    }
  }

  .main-card-background {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    .main-card-background-wrapper {
      height: 693.992px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-width: 100%;
      }

      & > div {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0.8) 100%
        );
      }
    }
  }

  .main-card-img-container {
    width: 48%;
    height: 100%;
    display: flex;
    flex: 0 1 auto;

    .main-card-img {
      max-width: 100%;
      height: auto;
    }
  }

  .main-card-text {
    font-size: 1.625rem;
    font-weight: 400;

    .main-card-title {
      font-size: 3.125rem;
      margin-bottom: 0.5rem;
    }
  }

  .animation {
    .main-card-text {
      width: 52%;
      height: 100%;
      flex: 0 1 auto;
      padding: 0 3rem 0 0;
      z-index: 3;
      box-sizing: content-box;

      .main-card-title {
        font-weight: 600;
        line-height: 1.31;
      }

      .main-card-subtitle {
        font-size: 1.625rem;
        font-weight: 400;
        line-height: 1.3269230769;
        margin: 0.75em 0 0.25em;
      }
    }
  }

  .main-card-animation-container {
    position: relative;
    overflow: hidden;
  }

  .main-card-animation {
    video {
      display: inline-block;
      object-fit: contain;
    }
  }

  .start {
    .main-card-text {
      position: relative;
      width: 100%;
      padding: 75px 0;
      max-width: 950px;
      margin: 0 auto;
      text-align: center;
      z-index: 1;

      & > h1 {
        font-size: 4rem;
        max-width: 800px;
        margin: 0 auto;
        font-weight: 600;
        line-height: 1.3125;
      }

      & > h2 {
        font-size: 1.625rem;
        font-weight: 400;
        margin: 1rem auto;
        max-width: 800px;
        line-height: 1.3269230769;
      }

      & > h3 {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0.75em 0 0.25em;
      }
    }
  }

  .watch-on-tv {
    .main-card-text {
      margin: -5% 0;
    }

    .main-card-animation-container {
      margin: -10% -5% -5% 0;

      .main-card-img {
        position: relative;
        z-index: 2;
      }
    }

    .main-card-animation {
      width: 100%;
      height: 100%;
      max-width: 73%;
      max-height: 54%;
      position: absolute;
      top: 46%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    video {
      width: 100%;
      height: 100%;
    }
  }

  .download-and-watch {
    .main-card-animation-container {
      margin: -8% 0 -4% -15%;
      min-height: 100px;
      width: 100%;
    }

    .main-card-animation {
      padding: 0.5em 0.75em;
      position: absolute;
      left: 50%;
      bottom: 8%;
      transform: translateX(-50%);
      margin: 0 auto;
      background-color: black;
      display: flex;
      align-items: center;
      width: 60%;
      min-width: 15em;
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: 0.75em;
      box-shadow: 0 0 2em 0 black;
      box-sizing: content-box;

      &::after {
        height: 3.75em;
        width: 3em;
        outline: 2px solid black;
        outline-offset: -2px;
        display: block;
        background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif")
          center center no-repeat;
        background-size: 100%;
        content: "";
        flex: 0 0 auto;
      }
    }

    .main-card-animation-img {
      margin: 0 1em 0 0;
      flex: 0 0 auto;

      img {
        height: 5em;
      }
    }

    .main-card-animation-text {
      flex: 1 1 auto;
      margin: 0.3em 0;
      box-sizing: content-box;

      & > div:first-child {
        font-size: 1rem;
        font-weight: 600;
        color: white;
        line-height: 1.3125;
      }

      & > div:last-child {
        font-size: 0.9em;
        color: #0071eb;
        line-height: 1.3194444444;
      }
    }
  }

  .watch-on-device {
    .main-card-animation-container {
      margin: -5% -10% 0 0;
    }

    .main-card-img {
      position: relative;
      z-index: 2;
    }

    .main-card-animation {
      width: 100%;
      height: 100%;
      max-width: 63%;
      max-height: 47%;
      position: absolute;
      top: 34%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    video {
      width: 100%;
      height: 100%;
    }
  }

  .faq-section {
    text-align: center;

    .main-card-title {
      line-height: 1.31;
      font-weight: 600;
    }

    .faq-lists {
      width: 75%;
      margin: 2em auto;
      max-width: 815px;
    }

    .faq-list {
      list-style-type: none;
      margin: 0 0 8px 0;
    }

    .faq-question,
    .faq-answer {
      display: block;
      text-align: left;
      background-color: #303030;
    }

    .svg-icon-thin-x {
      position: absolute;
      right: 1em;
      top: 50%;
      height: 1em;
      width: 1em;
      fill: white;
      transform: translateY(-50%);
    }

    .svg-closed {
      transform: translateY(-50%) rotate(-45deg);
    }

    .faq-question {
      padding: 0.8em 2.2em 0.8em 1.2em;
      margin-bottom: 1px;
      position: relative;
      width: 100%;
      border: none;
      color: white;
      font-size: 1.625rem;
      cursor: pointer;
    }

    .faq-answer {
      overflow: hidden;

      span {
        display: inline-block;
        padding: 1.2em;
        line-height: 1.25;
      }
    }

    .faq-answer.closed {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    .faq-answer.open {
      max-height: 1200px;
      transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    form {
      margin: 0 auto;
    }
  }
  .footer {
    max-width: 1000px;
    margin: 0 auto;
    border-bottom: none;
    padding-bottom: 0;
    box-sizing: content-box;

    a {
      text-decoration: none;
    }
  }
`;

export const HomeHeaderStyle = styled.div`
  background-color: transparent;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  inset: 0;
  height: 5rem;
  z-index: 10;
  box-sizing: content-box;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 0.5rem;
    height: auto;
    position: relative;
    margin: 0 3.5rem;

    & > a {
      background-color: #e50914;
      padding: 7px 17px;
      font-weight: 400;
      font-size: 1rem;
      color: white;
      line-height: 1.3125;
      cursor: pointer;
      text-decoration: none;
    }
  }

  .netflix-logo {
    margin-right: auto;

    & > svg {
      fill: #e50914;
      width: 10.4375rem;
      height: 2.8125rem;
    }
  }

  .language-selector {
    margin-right: 2rem;
    display: inline-block;
    margin: 0 0.75rem;
    margin-right: 2rem;

    & > div {
      width: auto;
      display: inline-block;
      position: relative;

      & > div {
        position: relative;
        display: inline-block;
        width: 100%;

        & > select {
          padding: 0.5rem 1.375rem;
          line-height: 1.3em;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.4);
          color: white;
          border: 1px solid #aaa;
          border-radius: 2px;
          font-size: 0.875rem;
          color: white;
          appearance: none;

          & > option {
            display: block;
            white-space: nowrap;
            min-height: 1.2em;
            padding: 0 2px 1px;
            color: white;
            font-size: 0.875rem;
            line-height: 1.3em;
          }
        }
      }

      &::before {
        font-family: "Netflix Icon";
        font-size: 0.75rem;
        left: 0.5rem;
        color: white;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        content: "\\e896";
        z-index: 1;
      }

      &::after {
        font-family: "Netflix Icon";
        font-size: 0.375rem;
        color: white;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        content: "\\e898";
      }
    }
  }
`;

export const SearchStyle = styled.div`
  background-color: #141414;

  .main-view {
    position: relative;
    min-height: 1000px;
    z-index: 0;
  }

  .gallery.search {
    padding-top: 3vw;
    margin-top: 0;
  }

  .gallery {
    margin: 0;
    overflow: hidden;
    min-height: 1000px;
  }

  .search-title-header {
    min-height: 65px;
  }

  .rail {
    font-size: 0.9375vw;
    margin: 1em 0 0 0;
    display: inline-block;
    min-height: 10px;
    width: 100%;
  }

  .suggestions {
    margin: 10px 0 20px 60px;
    display: flex;
    line-height: 1.6;
  }

  .suggestion-rail-container {
    display: flex;
  }

  .suggestions {
    .suggestions-label {
      color: grey;
      box-flex: 0;
      flex: 0 auto;
      margin-right: 5px;
      white-space: nowrap;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;

      li {
        flex: 0 auto;
        border-right: 1px solid grey;
        list-style: none;
        padding: 0 0.5em;
        box-flex: 0;
        color: white;
      }
    }
  }
`;

export const LogoutStyle = styled.div`
  background-color: black;
  color: white;
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 0;

  .background-wrapper {
    background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg");
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  .login-body {
    color: #333;
    padding: 0 5%;
    margin: 0 auto -236px;
    min-height: 100vh;
    background-color: transparent;
    max-width: 450px;
    box-sizing: content-box;

    &::before {
      content: "";
      height: 91px;
      display: block;
    }

    .logout {
      width: 350px;
      background-color: #fafafa;
      padding: 30px 45px;
      color: #333;
      margin: 20px auto 0;
      line-height: 1.5;
      box-sizing: content-box;

      .logout-title {
        margin-bottom: 20px;
        padding: 0;
        font-size: 2em;
        box-sizing: content-box;
      }

      .logout-body {
        margin: 1rem 0;
      }
    }

    .btn-blue {
      color: white;
      background-color: #0080ff;
      background-image: linear-gradient(to bottom, #0080ff, #0277ec);
      box-shadow: 0 1px 0 rgb(0 0 0 / 55%);
    }

    .btn {
      position: relative;
      margin: 0.5em 0.5em 0.5em 0;
      text-decoration: none;
      display: inline-block;
      line-height: 1em;
      letter-spacing: 0.1px;
      border-radius: 2px;
      text-align: center;
      border: 0;
    }

    .btn.btn-logout {
      width: 100%;
    }

    .btn.btn-large {
      font-size: 1.25rem;
      padding: 14px 2em;
      min-width: 112px;
      min-height: 48px;
    }

    &::after {
      content: "";
      height: 236px;
      display: block;
    }
  }
`;

export const LogoutHeaderStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border: 0;
  z-index: 5;
  border-bottom: transparent;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0) 100%
  );
  height: 90px;

  .header-logo {
    margin-left: 3%;
    text-decoration: none;
    vertical-align: middle;
    fill: #e50914;
    display: inline-block;
    line-height: 90px;
  }

  .svg-icon-netflix-logo {
    width: 106px;
    height: 35px;
    vertical-align: middle;
    fill: #e50914;
  }

  .login-button {
    color: white;
    background-color: #e50914;
    margin: 18px 3% 0;
    padding: 7px 17px;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: 3px;
    font-weight: 400;
    text-decoration: none;
    float: right;
  }
`;

export const MyListStyle = styled.div`
  background-color: #141414;
  color: white;

  .main-view {
    position: relative;
    min-height: 1000px;
    z-index: 0;

    .gallery {
      margin: 0;
      margin-top: 3.5%;
      padding-top: 4.375rem;
      overflow: hidden;
      min-height: 1000px;

      .gallery-content {
        position: relative;
        z-index: 0;
      }
    }
  }
`;

export const LoginStyle = styled.div`
  background-color: black;
  min-height: 100%;
  position: relative;
  color: white;
  z-index: 0;

  .login-wrapper-background {
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0.5;

    img {
      min-height: 100%;
      min-width: 100%;
    }
  }

  .login-body {
    margin: 0 auto -236px;
    min-height: 100vh;
    background-color: transparent;
    max-width: 450px;
    padding: 0 5%;
    box-sizing: content-box;

    &::before {
      content: "";
      height: 91px;
      display: block;
    }

    &::after {
      content: "";
      height: 236px;
      display: block;
    }

    & > div {
      .login-main {
        min-height: 660px;
        margin: 0;
        padding: 60px 68px 40px;
        margin-bottom: 90px;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        width: 100%;

        .login-form-main {
          flex-grow: 1;

          .login-form-title {
            color: white;
            font-size: 2rem;
            line-height: 1.28125;
            font-weight: 700;
            margin-bottom: 28px;
          }

          .login-form {
            .login-input {
              padding-bottom: 16px;
              max-width: 100%;
              position: relative;

              .login-input-placement {
                position: relative;
                border-radius: 4px;

                .input-email,
                .input-password {
                  input {
                    background-color: #333;
                    border-radius: 4px;
                    border: 0;
                    color: white;
                    height: 50px;
                    font-size: 1rem;
                    padding: 16px 20px 0;
                    width: 100%;
                    outline: none;

                    &:focus {
                      background-color: #454545;
                    }
                  }

                  label {
                    position: absolute;
                    top: 7px;
                    left: 20px;
                    font-size: 0.6875rem;
                    color: #8c8c8c;
                  }
                }

                .input-email {
                  &::after {
                    border-bottom: 2px solid #e87c03;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    ${(props) =>
                      !props.validEmail &&
                      `
                  content: "";`}
                    display: block;
                    height: 6px;
                    width: 100%;
                  }
                }

                .input-password {
                  &::after {
                    border-bottom: 2px solid #e87c03;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    ${(props) =>
                      !props.validPassword &&
                      `
                  content: "";`}
                    display: block;
                    height: 6px;
                    width: 100%;
                  }
                }
              }

              .email-input-error,
              .password-input-error {
                color: #e87c03;
                margin-bottom: -6px;
                padding: 6px 3px;
                font-size: 0.8125rem;
              }
            }

            .login-button {
              border-radius: 4px;
              font-size: 1rem;
              font-weight: 700;
              margin: 24px 0 12px;
              width: 100%;
              max-width: 100%;
              padding: 16px;
              line-height: 1;
              border: none;
              background-color: #e50914;
              color: white;
              cursor: pointer;
            }

            .login-remember-or-help {
              display: flex;
              position: relative;

              .login-remember {
                flex-grow: 1;
                padding-left: 20px;
                font-size: 1rem;
                display: inline-block;
                margin-bottom: -5px;

                .login-remember-me {
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0;
                  padding: 0;
                  margin: 0;
                  margin-right: 10px;
                }

                & > label {
                  padding: 0;
                  position: relative;
                  display: block;
                  color: #333;
                  line-height: 1.2;

                  .login-remember-me-text {
                    color: #b3b3b3;
                    font-size: 0.8125rem;
                    font-weight: 500;
                  }

                  &::before {
                    content: "";
                    width: 16px;
                    height: 16px;
                    background-color: #737373;
                    border-radius: 2px;
                    position: absolute;
                    top: 2px;
                    left: -20px;
                  }

                  ${(props) =>
                    props.remember &&
                    `&::after {
                  font-family: "Netflix Icon";
                  content: "\\e804";
                  color: black;
                  font-size: 1.125rem;
                  position: absolute;
                  top: 0;
                  left: -21px;
                }`}
                }
              }

              .login-help {
                color: #b3b3b3;
                font-size: 0.8125rem;
                line-height: 1.2692307692;
                font-weight: 500;
                padding-top: 2px;
                cursor: pointer;
              }
            }
          }
        }

        .login-form-other {
          .fb-login-form-container {
            margin-bottom: 0;

            .fb-login-form {
              display: block;
            }
            .fb-minimal {
              hr {
                display: none;
              }

              .fb-login {
                min-height: 0;
                width: auto;
                border: none;
                border-radius: 2px;
                background: 0 0;
                padding: 0;
                margin: 0;
                margin-top: 16px;
                display: inline-block;
                font-size: 0.8125rem;
                line-height: 1em;
                min-width: 98px;
                position: relative;
                vertical-align: middle;
                text-align: center;

                .fb-login-button {
                  background: 0 0;
                  cursor: pointer;
                  border: none;
                  font-size: 0.875rem;
                  line-height: 1em;

                  img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    vertical-align: middle;
                  }

                  .fb-text {
                    color: #737373;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    line-height: 1em;
                    text-align: center;
                    vertical-align: middle;
                  }
                }
              }
            }
          }

          .signup-now {
            color: #737373;
            font-size: 1rem;
            font-weight: 500;
            margin-top: 16px;
            line-height: 1.28125;

            a {
              text-decoration: none;
              color: white;
            }
          }

          .recaptcha-term {
            color: #8c8c8c;
            font-size: 0.8125rem;
            margin-top: 11px;
            position: relative;
            text-align: left;

            p {
              margin: 13px 0;
              line-height: 1.2307692308;
            }

            span {
              line-height: 1.2692307692;
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import EmailForm from "components/main/EmailForm";
import Footer from "components/common/footer";
import styled from "styled-components";

const HeaderWrapperStyle = styled.div`
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
        font-size: 0.75rem;
        left: 0.5rem;
        color: white;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        content: "ㅇ";
      }

      &::after {
        color: white;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        content: "ㅜ";
      }
    }
  }
`;

const MainCardsContainerStyle = styled.div`
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

    .faq-question {
      padding: 0.8em 2.2em 0.8em 1.2em;
      margin-bottom: 1px;
      position: relative;
      width: 100%;
      border: none;
      background-color: #303030;
      text-align: left;
      display: block;
      color: white;
      font-size: 1.625rem;
      cursor: pointer;

      svg {
        position: absolute;
        right: 1em;
        top: 50%;
        height: 1em;
        width: 1em;
        fill: white;
        transform: translateY(-50%) rotate(-45deg);
      }
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

export default function Main() {
  return (
    <>
      <HeaderWrapperStyle>
        <div>
          <span className="netflix-logo">
            <svg viewBox="0 0 111 30" focusable="false">
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
          </span>
          <div className="language-selector">
            <div>
              <div>
                <select>
                  <option>한국어</option>
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
          <a>로그인</a>
        </div>
      </HeaderWrapperStyle>
      <MainCardsContainerStyle>
        <div className="main-card start">
          <div className="main-card-background">
            <div className="main-card-background-wrapper">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
              <div></div>
            </div>
          </div>
          <div className="main-card-text">
            <h1>영화와 시리즈를 무제한으로.</h1>
            <h2>
              다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </h2>
            <EmailForm />
            <h3></h3>
          </div>
        </div>
        <div className="main-card animation watch-on-tv">
          <div className="main-card-container">
            <div className="main-card-text">
              <h1 className="main-card-title">TV로 즐기세요.</h1>
              <h2 className="main-card-subtitle">
                스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
                플레이어 등 다양한 디바이스에서 시청하세요.
              </h2>
            </div>
            <div className="main-card-img-container">
              <div className="main-card-animation-container">
                <img
                  className="main-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                />
                <div className="main-card-animation">
                  <video
                    className="main-card-video"
                    autoPlay
                    playsInline
                    muted
                    loop
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  ></video>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="main-card animation flip download-and-watch">
          <div className="main-card-container">
            <div className="main-card-text">
              <h1 className="main-card-title">
                즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.
              </h1>
              <h2 className="main-card-subtitle">
                간편하게 저장하고 빈틈없이 즐겨보세요.
              </h2>
            </div>
            <div className="main-card-img-container">
              <div className="main-card-animation-container">
                <img
                  className="main-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                />
                <div className="main-card-animation">
                  <div className="main-card-animation-img">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                  </div>
                  <div className="main-card-animation-text">
                    <div>기묘한 이야기</div>
                    <div>저장 중...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-card animation watch-on-device">
          <div className="main-card-container">
            <div className="main-card-text">
              <h1 className="main-card-title">
                다양한 디바이스에서 시청하세요.
              </h1>
              <h2 className="main-card-subtitle">
                각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로
                스트리밍하세요. 추가 요금이 전혀 없습니다.
              </h2>
            </div>
            <div className="main-card-img-container">
              <div className="main-card-animation-container">
                <img
                  className="main-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                />
                <div className="main-card-animation">
                  <video
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    autoPlay
                    playsInline
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-card animation flip kids-profile">
          <div className="main-card-container">
            <div className="main-card-text">
              <h1 className="main-card-title">
                어린이 전용 프로필을 만들어 보세요.
              </h1>
              <h2 className="main-card-subtitle">
                자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게
                이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
              </h2>
            </div>
            <div className="main-card-img-container">
              <div className="main-card-animation-container">
                <img
                  className="main-card-img"
                  src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-card faq-section">
          <div className="main-card-text">
            <h1 className="main-card-title">자주 묻는 질문</h1>
            <ul className="faq-lists">
              <li className="faq-list">
                <button className="faq-question">
                  넷플릭스란 무엇인가요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className="svg-icon svg-icon-thin-x svg-open"
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
              </li>
              <li className="faq-list">
                <button className="faq-question">
                  넷플릭스 요금은 얼마인가요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className="svg-icon svg-icon-thin-x svg-open"
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
              </li>
              <li className="faq-list">
                <button className="faq-question">
                  어디에서 시청할 수 있나요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className="svg-icon svg-icon-thin-x svg-open"
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
              </li>
              <li className="faq-list">
                <button className="faq-question">
                  멤버십을 해지하려면 어떻게 하나요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className="svg-icon svg-icon-thin-x svg-open"
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
              </li>
              <li className="faq-list">
                <button className="faq-question">
                  넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className="svg-icon svg-icon-thin-x svg-open"
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
              </li>
              <li className="faq-list">
                <button className="faq-question">
                  아이들이 넷플릭스를 봐도 좋을까요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className="svg-icon svg-icon-thin-x svg-open"
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
              </li>
            </ul>
            <EmailForm />
          </div>
        </div>
        <div className="main-card footer">
          <Footer />
        </div>
      </MainCardsContainerStyle>
    </>
  );
}

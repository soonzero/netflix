import React, { useEffect, useState } from "react";
import EmailForm from "components/main/emailform";
import Footer from "components/common/footer";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "images/nflogo.svg";
import { HomeBodyStyle, HomeHeaderStyle } from "components/common/styled";

export default function Main() {
  // Module
  const navigate = useNavigate();

  // Local State
  const [answer, setAnswer] = useState(undefined);

  // Life Cycle
  useEffect(() => {
    if (localStorage.getItem("user")) {
      sessionStorage.setItem(
        "user",
        JSON.parse(JSON.stringify(localStorage.getItem("user")))
      );
      navigate(`/browse`);
    } else {
      if (sessionStorage.getItem("user") != null) {
        navigate(`/browse`);
      }
    }
  }, []);

  // Function
  function answerHandler(number) {
    if (answer == number) {
      setAnswer(undefined);
    } else {
      setAnswer(number);
    }
  }

  return (
    <>
      <HomeHeaderStyle>
        <div>
          <span className="netflix-logo">
            <LogoSVG />
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
          <Link to="/login">로그인</Link>
        </div>
      </HomeHeaderStyle>
      <HomeBodyStyle>
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
              <li className="faq-list" onClick={() => answerHandler(0)}>
                <button className="faq-question">
                  넷플릭스란 무엇인가요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className={
                      answer == 0
                        ? "svg-icon svg-icon-thin-x svg-open"
                        : "svg-icon svg-icon-thin-x svg-closed"
                    }
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
                <div
                  className={
                    answer == 0 ? `faq-answer open` : `faq-answer closed`
                  }
                >
                  <span>
                    넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
                    다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
                    디바이스에서 시청할 수 있는 스트리밍 서비스입니다. <br />
                    <br />
                    저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는
                    만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며
                    매주 새로운 시리즈와 영화가 제공됩니다.
                  </span>
                </div>
              </li>
              <li className="faq-list" onClick={() => answerHandler(1)}>
                <button className="faq-question">
                  넷플릭스 요금은 얼마인가요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className={
                      answer == 1
                        ? "svg-icon svg-icon-thin-x svg-open"
                        : "svg-icon svg-icon-thin-x svg-closed"
                    }
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
                <div
                  className={
                    answer == 1 ? `faq-answer open` : `faq-answer closed`
                  }
                >
                  <span>
                    스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등
                    다양한 디바이스에서 월정액 요금 하나로 넷플릭스를
                    시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지
                    다양합니다. 추가 비용이나 약정이 없습니다.
                  </span>
                </div>
              </li>
              <li className="faq-list" onClick={() => answerHandler(2)}>
                <button className="faq-question">
                  어디에서 시청할 수 있나요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className={
                      answer == 2
                        ? "svg-icon svg-icon-thin-x svg-open"
                        : "svg-icon svg-icon-thin-x svg-closed"
                    }
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
                <div
                  className={
                    answer == 2 ? `faq-answer open` : `faq-answer closed`
                  }
                >
                  <span>
                    언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로
                    로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며,
                    인터넷이 연결되어 있고 넷플릭스 앱을 지원하는
                    디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어
                    플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.
                    <br />
                    <br />
                    iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할
                    수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에
                    연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든
                    함께니까요.
                  </span>
                </div>
              </li>
              <li className="faq-list" onClick={() => answerHandler(3)}>
                <button className="faq-question">
                  멤버십을 해지하려면 어떻게 하나요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className={
                      answer == 3
                        ? "svg-icon svg-icon-thin-x svg-open"
                        : "svg-icon svg-icon-thin-x svg-closed"
                    }
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
                <div
                  className={
                    answer == 3 ? `faq-answer open` : `faq-answer closed`
                  }
                >
                  <span>
                    넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도
                    없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할
                    수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을
                    시작하거나 종료하세요.
                  </span>
                </div>
              </li>
              <li className="faq-list" onClick={() => answerHandler(4)}>
                <button className="faq-question">
                  넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className={
                      answer == 4
                        ? "svg-icon svg-icon-thin-x svg-open"
                        : "svg-icon svg-icon-thin-x svg-closed"
                    }
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
                <div
                  className={
                    answer == 4 ? `faq-answer open` : `faq-answer closed`
                  }
                >
                  <span>
                    넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종
                    상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고
                    있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼
                    시청하세요.
                  </span>
                </div>
              </li>
              <li className="faq-list" onClick={() => answerHandler(5)}>
                <button className="faq-question">
                  아이들이 넷플릭스를 봐도 좋을까요?
                  <svg
                    id="thin-x"
                    viewBox="0 0 26 26"
                    className={
                      answer == 5
                        ? "svg-icon svg-icon-thin-x svg-open"
                        : "svg-icon svg-icon-thin-x svg-closed"
                    }
                    focusable="true"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </button>
                <div
                  className={
                    answer == 5 ? `faq-answer open` : `faq-answer closed`
                  }
                >
                  <span>
                    멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의
                    공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를
                    관리할 수 있습니다. <br /> <br />
                    키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도
                    있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고
                    자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.
                  </span>
                </div>
              </li>
            </ul>
            <EmailForm />
          </div>
        </div>
        <div className="main-card footer">
          <Footer dark />
        </div>
      </HomeBodyStyle>
    </>
  );
}

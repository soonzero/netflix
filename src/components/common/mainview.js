import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as DetailInfo } from "images/detailinfo-main.svg";
import { ReactComponent as Play } from "images/play-main.svg";
import { MainViewStyle } from "./styled";

export default function MainView(props) {
  // Local Variables
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const profileIdx = JSON.parse(sessionStorage.getItem("selectedProfile"));

  // Local States
  const [mainContent, setMainContent] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Life Cycle
  useEffect(() => {
    if (isLoading) {
      getMain();
    } else {
      return;
    }
  }, [isLoading]);

  // Functions
  const setModalAndIdx = (event) => {
    const contentIdx = event.currentTarget.getAttribute("name");
    props.setContent(contentIdx);
    props.setModal("detail");
  };

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
        setMainContent(contents.data.result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const browseType = () => {
    if (props.contents == "main") {
      return "H";
    } else if (props.contents == "series") {
      return "S";
    } else {
      return "M";
    }
  };

  return (
    <MainViewStyle>
      {!isLoading && mainContent && (
        <>
          <div
            className={props.genre ? "billboard-row genre" : "billboard-row"}
          >
            <div className="billboard">
              <div className="hero-image-wrapper">
                <img
                  className="hero-static-image"
                  src={mainContent.mainImageUrl}
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
                        <img src={mainContent.logoImageUrl} />
                      </div>
                    </div>
                    <div className="info-wrapper">
                      <div className="info-wrapper-fade">
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
                        name={mainContent.contentIdx}
                        onClick={setModalAndIdx}
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
        </>
      )}
    </MainViewStyle>
  );
}

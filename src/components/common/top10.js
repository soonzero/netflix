import React, { useEffect, useState } from "react";
import { ReactComponent as Rank1 } from "images/rank-1.svg";
import { ReactComponent as Rank2 } from "images/rank-2.svg";
import { ReactComponent as Rank3 } from "images/rank-3.svg";
import { ReactComponent as Rank4 } from "images/rank-4.svg";
import { ReactComponent as Rank5 } from "images/rank-5.svg";
import { ReactComponent as Rank6 } from "images/rank-6.svg";
import { ReactComponent as Rank7 } from "images/rank-7.svg";
import { ReactComponent as Rank8 } from "images/rank-8.svg";
import { ReactComponent as Rank9 } from "images/rank-9.svg";
import { ReactComponent as Rank10 } from "images/rank-10.svg";
import axios from "axios";
import { ContainerStyle, TitleCardsStyle } from "./styled";

export default function Top10() {
  const profileIdx = parseInt(sessionStorage.getItem("selectedProfile"));
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const [top10, setTop10] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getTop10 = async () => {
    try {
      const contents = await axios({
        method: "GET",
        url: `/browse/top-ten?userIdx=${userIdx}&profileIdx=${profileIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setTop10(contents.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getTop10();
    } else {
      return;
    }
  }, []);

  const svgRank = (index) => {
    if (index == 0) {
      return <Rank1 />;
    } else if (index == 1) {
      return <Rank2 />;
    } else if (index == 2) {
      return <Rank3 />;
    } else if (index == 3) {
      return <Rank4 />;
    } else if (index == 4) {
      return <Rank5 />;
    } else if (index == 5) {
      return <Rank6 />;
    } else if (index == 6) {
      return <Rank7 />;
    } else if (index == 7) {
      return <Rank8 />;
    } else if (index == 8) {
      return <Rank9 />;
    } else if (index == 9) {
      return <Rank10 />;
    }
  };

  return (
    <TitleCardsStyle>
      <h2 className="row-header">
        <div className="row-title">
          <div className="row-header-title">오늘 한국의 TOP10 콘텐츠</div>
          <div className="arrow-header"></div>
        </div>
        <ContainerStyle>
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
                  </ul>
                  <div className="slider-mask show-peek">
                    <div className="slider-content row-with-x-columns">
                      {!isLoading &&
                        top10.map((c, i) => {
                          return (
                            <div key={c.title} className="slider-item">
                              <div className={`title-card-container css-0`}>
                                <div className="title-card">
                                  <div className="ptrack-content">
                                    <a href="/" className="slider-refocus">
                                      <div className="boxart-container boxart-rounded boxart-size-7x10">
                                        {svgRank(i)}
                                        <img
                                          className="boxart-image-in-padded-container"
                                          src={`${c.thumbnailUrl}`}
                                        />
                                        <div className="fallback-text-container">
                                          <p className="fallback-text">
                                            {c.title}
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
                  <span className="handle handle-next active">
                    <b className="indicator-icon icon-right-caret"></b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* {props.mylist && sliderItems(props.items)} */}
        </ContainerStyle>
      </h2>
    </TitleCardsStyle>
  );
}

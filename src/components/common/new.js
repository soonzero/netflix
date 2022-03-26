import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerStyle, TitleCardsStyle } from "./styled";

export default function New() {
  const profileIdx = parseInt(sessionStorage.getItem("selectedProfile"));
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const [newContents, setNewContents] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getNewContents = async () => {
    try {
      const contents = await axios({
        method: "GET",
        url: `/browse/latest?userIdx=${userIdx}&profileIdx=${profileIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setNewContents(contents.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getNewContents();
    } else {
      return;
    }
  }, []);

  return (
    <TitleCardsStyle>
      <h2 className="row-header">
        <div className="row-title">
          <div className="row-header-title">신규 콘텐츠</div>
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
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="slider-mask show-peek">
                    <div className="slider-content row-with-x-columns">
                      {!isLoading &&
                        newContents.map((c, i) => {
                          return (
                            <div key={c.title} className="slider-item">
                              <div className={`title-card-container css-0`}>
                                <div className="title-card">
                                  <div className="ptrack-content">
                                    <a href="/" className="slider-refocus">
                                      <div className="boxart-container boxart-rounded boxart-size-16x9">
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
        </ContainerStyle>
      </h2>
    </TitleCardsStyle>
  );
}

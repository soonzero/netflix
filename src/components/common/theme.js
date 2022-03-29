import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TitleCardsStyle, ContainerStyle } from "./styled";
import Card from "./card";
import Indicator from "./indicator";

export default function Theme(props) {
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const [contents, setContents] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [indicator, setIndicator] = useState();

  const getContents = async (theme) => {
    setIsLoading(true);
    try {
      const contents = await axios({
        method: "GET",
        url: `/browse/genre/series?userIdx=${userIdx}&profileIdx=${profileIdx}&genre=${theme}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setContents(contents.data.result);
      props.setModalInfo(contents.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getContents(props.theme);
    } else {
      return;
    }
  }, []);

  return (
    <TitleCardsStyle>
      {!isLoading && (
        <h2 className="row-header" onMouseOver={() => props.setRow(props.row)}>
          <div className="row-title">
            <div className="row-header-title">{props.theme}</div>
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
                      {indicator > 1 && <Indicator indicator={indicator} />}
                    </ul>
                    <div className="slider-mask show-peek">
                      <div className="slider-content row-with-x-columns">
                        {!isLoading &&
                          contents.map((content, index) => {
                            return (
                              <Card
                                key={index}
                                name={content.contentIdx}
                                content={content}
                                row={props.row}
                                index={index}
                                modal={props.modal}
                                setModal={props.setModal}
                                setIndex={props.setIndex}
                                setContent={props.setContent}
                              />
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
      )}
    </TitleCardsStyle>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerStyle, TitleCardsStyle } from "./styled";
import Card from "./card";
import Indicator from "./indicator";

export default function NewSeason(props) {
  // Local Variables
  const profileIdx = parseInt(sessionStorage.getItem("selectedProfile"));
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;

  // Local States
  const [newSeason, setNewSeason] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [indicator, setIndicator] = useState();

  // Life Cycle
  useEffect(() => {
    if (isLoading) {
      getNewSeasonContents();
    } else {
      return;
    }
  }, []);

  // Function
  const getNewSeasonContents = async () => {
    try {
      const contents = await axios({
        method: "GET",
        url: `/browse/soon/new-season?userIdx=${userIdx}&profileIdx=${profileIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setNewSeason(contents.data.result);
      setIndicator(Math.ceil(contents.data.result.length / 6));
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TitleCardsStyle>
      <h2 className="row-header">
        <div className="row-title">
          <div className="row-header-title">새로운 시즌 공개 예정</div>
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
                        newSeason.map((content, index) => {
                          return (
                            <Card
                              key={index}
                              name={content.contentIdx}
                              content={newSeason}
                              row={props.row}
                              index={index}
                              modal={props.modal}
                              setModal={props.setModal}
                              setIndex={props.setIndex}
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
        </ContainerStyle>
      </h2>
    </TitleCardsStyle>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerStyle, TitleCardsStyle } from "./styled";
import { store } from "index";
import Card from "./card";

export default function ThisWeek(props) {
  // Local Variables
  const profileIdx = parseInt(sessionStorage.getItem("selectedProfile"));
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;

  // Local States
  const [thisWeek, setThisWeek] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Life Cycle
  useEffect(() => {
    if (isLoading) {
      getThisWeek();
    } else {
      return;
    }
  }, []);

  // Function
  const getThisWeek = async () => {
    setIsLoading(true);
    try {
      const contents = await axios({
        method: "GET",
        url: `/browse/soon?userIdx=${userIdx}&profileIdx=${profileIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setThisWeek(contents.data.result);
      props.setModalInfo(contents.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TitleCardsStyle>
      <h2 className="row-header" onMouseOver={() => props.setRow(props.row)}>
        <div className="row-title">
          <div className="row-header-title">이번 주 공개 콘텐츠</div>
          <div className="arrow-header"></div>
        </div>
        <ContainerStyle>
          <div className="row-container">
            <div className="ptrack-container">
              <div className="row-content slider-hover-trigger-layer">
                <div className="slider">
                  <div className="slider-mask show-peek">
                    <div className="slider-content row-with-x-columns">
                      {!isLoading &&
                        thisWeek.map((content, index) => {
                          return (
                            <Card
                              notYet
                              key={index}
                              name={content.contentIdx}
                              content={content}
                              row={props.row}
                              index={index}
                              modal={props.modal}
                              setModal={props.setModal}
                              setIndex={props.setIndex}
                              setContent={props.setContent}
                              setYet={props.setYet}
                              setReleaseDate={props.setReleaseDate}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerStyle>
      </h2>
    </TitleCardsStyle>
  );
}

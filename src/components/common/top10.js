import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";
import { ContainerStyle, TitleCardsStyle } from "./styled";

export default function Top10(props) {
  // Local Variables
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;

  // Local States
  const [top10, setTop10] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Life Cycle
  useEffect(() => {
    if (isLoading) {
      getTop10();
    } else {
      return;
    }
  }, []);

  // Function
  const getTop10 = async () => {
    setIsLoading(true);
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
      props.setModalInfo(contents.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TitleCardsStyle>
      {!isLoading && (
        <>
          <h2
            className="row-header"
            onMouseOver={() => props.setRow(props.row)}
          >
            <div className="row-title">
              <div className="row-header-title">오늘 한국의 TOP10 콘텐츠</div>
            </div>
          </h2>
          <ContainerStyle>
            <div className="row-container">
              <div className="ptrack-container">
                <div className="row-content slider-hover-trigger-layer">
                  <div className="slider">
                    <ul className="pagination-indicator">
                      <li className="active"></li>
                      <li></li>
                    </ul>
                    <div className="slider-mask show-peek">
                      <div className="slider-content row-with-x-columns">
                        {!isLoading &&
                          top10.map((content, index) => {
                            return (
                              <Card
                                key={index}
                                name={content.contentIdx}
                                top10
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
                    <span className="handle handle-next active">
                      <b className="indicator-icon icon-right-caret"></b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ContainerStyle>
        </>
      )}
    </TitleCardsStyle>
  );
}

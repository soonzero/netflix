import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerStyle, TitleCardsStyle } from "./styled";
import { store } from "index";
import Card from "./card";
import Indicator from "./indicator";

export default function List(props) {
  const profileIdx = parseInt(sessionStorage.getItem("selectedProfile"));
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [indicator, setIndicator] = useState();

  const getList = async () => {
    setIsLoading(true);
    try {
      const contents = await axios({
        method: "GET",
        url: `/my-list?userIdx=${userIdx}&profileIdx=${profileIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setIndicator(Math.ceil(contents.data.result.length / 6));
      setList(contents.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getList();
    } else {
      return;
    }
  }, []);

  store.subscribe(getList);

  return (
    <TitleCardsStyle>
      <h2 className="row-header" onMouseOver={() => props.setRow(props.row)}>
        <div className="row-title">
          <div className="row-header-title">내가 찜한 콘텐츠</div>
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
                        list.map((content, index) => {
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
      </h2>
    </TitleCardsStyle>
  );
}

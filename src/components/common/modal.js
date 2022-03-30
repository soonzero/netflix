import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as ModalClose } from "images/close-modal.svg";
import { ReactComponent as ModalPlay } from "images/play-modal.svg";
import { ReactComponent as ModalAddToMyList } from "images/addToMyList-modal.svg";
import { ReactComponent as ModalDetail } from "images/detail-modal.svg";
import { ReactComponent as ModalThumbsDownFilled } from "images/thumbsdownfilled-modal.svg";
import { ReactComponent as ModalThumbsUpFilled } from "images/thumbsupfilled-modal.svg";
import styled from "styled-components";
import axios from "axios";
import { ModalStyle } from "./styled";
import LikeContents from "./likecontents";
import AddList from "./addlist";
import Episodes from "./episodes";
import Similar from "./similar";
import Trailer from "./trailer";

const BackDropStyle = styled.div`
  opacity: 0.7;
  display: block;

  .preview-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
  }
`;

export default function Modal(props) {
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const profileIdx = JSON.parse(sessionStorage.getItem("selectedProfile"));
  const modalStyle = props.modal == "mini" ? "mini-modal" : "detail-modal";
  const [isReady, setIsReady] = useState(false);
  const [myList, setMyList] = useState();
  const [info, setInfo] = useState();
  const [like, setLike] = useState();
  const [hate, setHate] = useState();
  const [season, setSeason] = useState();
  const [creators, setCreators] = useState();
  const [features, setFeatures] = useState();
  const [trailers, setTrailers] = useState();
  const [similar, setSimilar] = useState();
  const [seasonNum, setSeasonNum] = useState(1);
  const [episodes, setEpisodes] = useState();

  const positionX = (index) => {
    if (index == 0) {
      return "100px";
    } else if (index == 5) {
      return "-100px";
    } else {
      return "0";
    }
  };

  const getAllInfo = async (index) => {
    try {
      const check = await axios({
        method: "GET",
        url: `/my-list/check?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      if (check.data.result == 1) {
        setMyList(1);
      } else {
        setMyList(0);
      }

      const contents = await axios({
        method: "GET",
        url: `/detail?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setInfo(contents.data.result);

      const seasons = await axios({
        method: "GET",
        url: `detail/seasons-count?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setSeason(seasons.data.result);

      const makers = await axios({
        method: "GET",
        url: `detail/directors-actors?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setCreators(makers.data.result);

      const feature = await axios({
        method: "GET",
        url: `detail/genres-features?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setFeatures(feature.data.result);

      const extraInfo = await axios({
        method: "GET",
        url: `detail/trailers?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      if (extraInfo.data.code == 1000) {
        setTrailers(extraInfo.data.result);
      }

      if (contents.data.result.type == "S") {
        const similarContents = await axios({
          method: "GET",
          url: `detail/similar/series?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });

        setSimilar(similarContents.data.result);
      } else if (contents.data.result.type == "M") {
        const similarContents = await axios({
          method: "GET",
          url: `detail/similar/movies?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });

        setSimilar(similarContents.data.result);
      }

      if (contents.data.result.type == "S") {
        const seriesEpisodes = await axios({
          method: "GET",
          url: `detail/episodes?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}&seasonNumber=${seasonNum}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setEpisodes(seriesEpisodes.data.result);
      }

      setIsReady(true);
    } catch (e) {
      console.log(e);
    }
  };

  const getLike = async (index) => {
    try {
      const check = await axios({
        method: "GET",
        url: `/likehate/likes?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      if (check.data.result == 1) {
        setLike(1);
      } else {
        setLike(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getHate = async (index) => {
    try {
      const check = await axios({
        method: "GET",
        url: `/likehate/hates?userIdx=${userIdx}&profileIdx=${profileIdx}&contentIdx=${index}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      if (check.data.result == 1) {
        setHate(1);
      } else {
        setHate(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllInfo(props.content);
    getLike(props.content);
    getHate(props.content);
  }, [myList, like]);

  return (
    <>
      <ModalStyle>
        {isReady && info && (
          <div
            className={`focus-trap-wrapper preview-modal-wrapper has-smaller-buttons ${modalStyle}`}
          >
            <div
              className={`preview-modal-container has-smaller-buttons ${modalStyle}`}
              onMouseLeave={
                props.modal == "mini" ? () => props.setModal() : null
              }
              style={{
                width: props.modal == "mini" ? "595px" : "850px",
                top:
                  props.modal == "detail"
                    ? "2em"
                    : props.noMain
                    ? `${90 + 386.5 * props.row}px`
                    : `${1028 + 375 * props.row}px`,
                left:
                  props.modal == "mini"
                    ? `${-40 + 407 * props.index}px`
                    : `auto`,
                transformOrigin:
                  props.modal == "mini" ? "center center" : "50% 12.5%",
                transform:
                  props.modal == "mini"
                    ? `translateX(${positionX(
                        props.index
                      )}) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)`
                    : "none",
                zIndex: props.modal == "mini" ? "2" : "3",
                opacity: "1",
                boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
                marginBottom: props.modal == "mini" ? "0" : "2em",
                minWidth: props.modal == "mini" ? "unset" : "850px",
              }}
            >
              <div
                className={`preview-modal-player-container has-smaller-buttons ${modalStyle}`}
              >
                <div
                  className="video-merch-player-boxart-wrapper"
                  style={{
                    position: `${
                      props.modal == "mini" ? "static" : "absolute"
                    }`,
                  }}
                >
                  {props.modal == "mini" && (
                    <img
                      className="preview-modal-boxart"
                      style={{ opacity: "0" }}
                      src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
                    />
                  )}
                  <img
                    style={{ display: "none" }}
                    src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaoks6pw8ZOxUOaxLhB2FPbtfuwDgBMKR_vuaAJRzl3UBLGwan61y9-KfS8CliS6q_-rYdCCyrXQAXL0LgmwOWZPPRX0voh7c0Cx4BJsIdG7gd3GdGOcEj5biIwh4GkIlmNPH_UCtBTajPDGvgSHn08vVYXrsnbGApss1wyTuSZUSvRk-z44ni4Z8fCr.webp?r=296"
                  />
                  {props.modal == "mini" && (
                    <img
                      className="preview-modal-boxart"
                      style={{ opacity: "1" }}
                      src={info.mainImageUrl}
                    />
                  )}
                </div>
                {props.modal == "detail" && (
                  <div className="story-art detail-modal has-smaller-buttons">
                    <img
                      className="player-modal-player-story-art detail-modal has-smaller-buttons"
                      src={info.mainImageUrl}
                      style={{ opacity: "1" }}
                    />
                    <img
                      src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdY5i3vL3kouiyFbiGstbEtWDXNUvQDbQ-KcWQfYHxil_SnklbRB1jyR-uHuqljzA-0SE4-9CIwMxVp_AqiIiXe5VFaw.webp?r=720"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
                <div style={{ opacity: "1" }}>
                  <div
                    className="preview-modal-player-title-treatment-wrapper"
                    style={{ opacity: "1" }}
                  >
                    <div
                      className={`preview-modal-player-title-treatment-left preview-modal-player-title-treatment ${modalStyle} has-smaller-buttons ${modalStyle} has-smaller-buttons`}
                    >
                      {props.modal == "detail" && (
                        <>
                          <img
                            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYuN1YheNqzVhunPxUtjnU7THv9OczxX5zpVfrLhe8XxbvcQ2XpA0iF4fNjqAGGIrvCg-fiLrvVJayK3xCwq4yX97IK8Wl9doCA.webp?r=8bd"
                            style={{ display: "none" }}
                          />
                          <img
                            className="preview-modal-player-title-treatment-logo"
                            src={info.logoImageUrl}
                            style={{ width: "100%", opacity: "1" }}
                          />
                          <div className="button-controls-container">
                            <a className="primary-button play-link is-toolkit">
                              <button
                                type="button"
                                className="color-primary has-label has-icon square-button"
                              >
                                <div className="circle-button-container">
                                  <div className="medium circle-button-svg-container">
                                    <ModalPlay />
                                  </div>
                                </div>
                                <div
                                  className="space-between"
                                  style={{ width: "1rem" }}
                                ></div>
                                <span className="play-button-text">재생</span>
                              </button>
                            </a>
                            <AddList myList={myList} content={props.content} />
                            <LikeContents
                              like={like}
                              hate={hate}
                              content={props.content}
                            />
                          </div>
                          <div className="button-controls-messaging"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="preview-modal-close"
                onClick={() => props.setModal()}
              >
                <ModalClose />
              </div>
              {props.modal == "mini" ? (
                <div
                  className="preview-modal-info"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <a>
                    <div className="mini-modal-container">
                      <div className="preview-modal-info-container">
                        <div className="preview-modal-metadata-and-controls mini-modal has-smaller-buttons">
                          <div className="preview-modal-metadata-and-controls-container">
                            <div className="button-controls-container mini-modal has-smaller-buttons">
                              <a className="primary-button play-link is-toolkit is-round">
                                <button
                                  className="color-primary has-icon round circle-button"
                                  type="button"
                                >
                                  <div className="circle-button-container">
                                    <div className="small circle-button-svg-container">
                                      <ModalPlay />
                                    </div>
                                  </div>
                                </button>
                              </a>
                              <AddList
                                myList={myList}
                                content={props.content}
                              />
                              <LikeContents
                                like={like}
                                hate={hate}
                                content={props.content}
                              />
                              <div className="button-controls-expand-button detail-button">
                                <button
                                  className="color-supplementary has-icon round circle-button"
                                  type="button"
                                  onClick={() => props.setModal("detail")}
                                >
                                  <div className="circle-button-container">
                                    <div className="small circle-button-svg-container">
                                      <ModalDetail />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div
                              className="preview-modal-metadata-and-controls-info"
                              style={{ opacity: "1" }}
                            >
                              <div>
                                <div className="video-metadata-container">
                                  <div className="video-metadata-first-line">
                                    <span className="match-score-wrapper">
                                      <div className="show-match-score rating-inner">
                                        <div className="meta-thumb-container thumb-down">
                                          <ModalThumbsDownFilled />
                                        </div>
                                        <div className="meta-thumb-container thumb-up">
                                          <ModalThumbsUpFilled />
                                        </div>
                                        <span className="match-score">
                                          {info.percentage !== "New"
                                            ? `${info.percentage} 일치`
                                            : info.percentage}
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                  <div className="video-metadata-second-line">
                                    <span className="maturity-rating">
                                      <span className="maturity-number">
                                        {info.ageRate}+
                                      </span>
                                    </span>
                                    <span className="duration">
                                      {info.type == "M"
                                        ? info.runningTime
                                        : `시즌 ${season}개`}
                                    </span>
                                    <span className="player-feature-badge">
                                      HD
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="preview-modal-metadata-and-controls-tags-container"
                              style={{ opacity: "1" }}
                            >
                              <div className="evidence-list">
                                <div className="evidence-item">
                                  <span className="evidence-text">
                                    진심 어린
                                  </span>
                                </div>
                                <div className="evidence-item">
                                  <span className="evidence-separator"></span>
                                  <span className="evidence-text">
                                    감정을 파고드는
                                  </span>
                                </div>
                                <div className="evidence-item">
                                  <span className="evidence-separator"></span>
                                  <span className="evidence-text">로맨틱</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ) : (
                <div className="preview-modal-info" style={{ opacity: "1" }}>
                  <div className="detail-modal-container">
                    <div className="ptrack-container">
                      <div>
                        <div className="preview-modal-details-metadata detail-modal has-smaller-buttons">
                          <div className="preview-modal-details-metadata-left">
                            <div className="preview-modal-details-metadata-info">
                              <div>
                                <div className="video-metadata-container">
                                  <div className="video-metadata-first-line">
                                    <span className="match-score-wrapper">
                                      <div className="show-match-score rating-inner">
                                        <div className="meta-thumb-container thumb-down">
                                          <ModalThumbsDownFilled />
                                        </div>
                                        <div className="meta-thumb-container thumb-up">
                                          <ModalThumbsUpFilled />
                                        </div>
                                        <span className="match-score">
                                          {info.percentage !== "New"
                                            ? `${info.percentage} 일치`
                                            : info.percentage}
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                  <div className="video-metadata-second-line">
                                    <div className="year">
                                      {info.productionYear}
                                    </div>
                                    <a>
                                      <span className="maturity-rating">
                                        <span>{info.ageRate}+</span>
                                      </span>
                                    </a>
                                    <span className="duration">
                                      {info.type == "M"
                                        ? info.runningTime
                                        : `시즌 ${season}개`}
                                    </span>
                                    <span className="player-feature-badge">
                                      HD
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="css-space"></div>
                            <p className="preview-modal-synopsis preview-modal-text">
                              <div className="ptrack-content">
                                {info.summary}
                              </div>
                            </p>
                          </div>
                          <div className="preview-modal-details-metadata-right">
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                출연:&nbsp;
                              </span>
                              <span className="tag-item">
                                {creators.actorList}
                              </span>
                            </div>
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                장르:&nbsp;
                              </span>
                              <span className="tag-item">
                                {features.genreList}
                              </span>
                            </div>
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                시리즈 특징:&nbsp;
                              </span>
                              <span className="tag-item">
                                {features.featureList}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {info.type == "S" ? (
                      <div className="ptrack-container">
                        <div className="ptrack-content">
                          <div className="episode-selector">
                            <div className="episode-selector-header">
                              <h3 className="preview-modal-section-header episode-selector-label">
                                회차
                              </h3>
                              <div className="episode-selector-dropdown"></div>
                              <div className="episode-selector-season-name">
                                시즌1
                              </div>
                            </div>
                            <div className="episode-selector-container">
                              {episodes.map((e) => {
                                return <Episodes contents={e} />;
                              })}
                              <div className="section-divider collapsed">
                                <button className="color-supplementary section-expand-button has-icon round circle-button">
                                  <div className="circle-button-container">
                                    <div className="small circle-button-svg-container">
                                      <ModalDetail />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="ptrack-container">
                      <div className="ptrack-content">
                        <div className="ptrack-container">
                          <div className="more-like-this-wrapper">
                            <h3 className="preview-modal-section-header more-like-this-header">
                              비슷한 콘텐츠
                            </h3>
                            <div
                              className="section-container collapsed"
                              style={{ maxHeight: "65em" }}
                            >
                              <div className="more-like-this-container">
                                {similar.map((c) => {
                                  return <Similar contents={c} />;
                                })}
                              </div>
                            </div>
                            <div className="section-divider collapsed">
                              <button className="color-supplementary section-expand-button has-icon round circle-button">
                                <div className="circle-button-container">
                                  <div className="small circle-button-svg-container">
                                    <ModalDetail />
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {trailers != undefined ? (
                      <div className="ptrack-container">
                        <div className="ptrack-content">
                          <div className="trailers-and-more-wrapper">
                            <div className="trailers-and-more-header">
                              <h3 className="preview-modal-section-header">
                                예고편 및 다른 영상
                              </h3>
                            </div>
                            <div className="trailers-and-more-container">
                              {trailers.map((t) => {
                                return <Trailer content={t} />;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="ptrack-container">
                      <div className="ptrack-content">
                        <div className="about-wrapper">
                          <div className="about-header">
                            <h3 className="preview-modal-section-header">
                              <strong>{info.title}</strong>&nbsp;상세 정보
                            </h3>
                          </div>
                          <div className="about-container">
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                크리에이터:&nbsp;
                              </span>
                              <span className="tag-item">
                                <a>{creators.directorList}</a>
                              </span>
                            </div>
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                출연:&nbsp;
                              </span>
                              <span className="tag-item">
                                <a>{creators.actorList}</a>
                              </span>
                            </div>
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                장르:&nbsp;
                              </span>
                              <span className="tag-item">
                                <a>{features.genreList}</a>
                              </span>
                            </div>
                            <div className="preview-modal-tags">
                              <span className="preview-modal-tags-label">
                                시리즈 특징:&nbsp;
                              </span>
                              <span className="tag-item">
                                <a>{features.featureList}</a>
                              </span>
                            </div>
                            <div className="maturity-rating-wrapper">
                              <span className="title">관람등급:</span>
                              <span className="maturity-rating">
                                <a className="maturity-number">
                                  {info.ageRate}
                                </a>
                                <p className="maturity-description">
                                  {info.ageRate}세이상관람가
                                </p>
                              </span>
                            </div>
                            <div className="broadcaster">
                              <div>{info.productionYear}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </ModalStyle>
      {props.modal == "detail" && (
        <BackDropStyle>
          <div
            className="preview-modal-backdrop"
            onClick={() => props.setModal(false)}
          ></div>
        </BackDropStyle>
      )}
    </>
  );
}

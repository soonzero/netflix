import Header from "components/common/header";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import MainView from "components/common/mainview";
import SelectProfile from "components/common/selectprofiles.js";
import { useNavigate } from "react-router-dom";
import Top10 from "components/common/top10";
import New from "components/common/new";
import ThisWeek from "components/common/thisweek";
import { HomeStyle } from "components/common/styled";
import Modal from "components/common/modal";
import List from "components/common/list";
import Theme from "components/common/theme";
import axios from "axios";

export default function Browse() {
  // Module
  const navigate = useNavigate();

  // Local Variables

  // Local States
  const [display, setDisplay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [modal, setModal] = useState();
  const [index, setIndex] = useState();
  const [content, setContent] = useState();
  const [profile, setProfile] = useState(
    sessionStorage.getItem("selectedProfile")
  );
  const [myList, setMyList] = useState();
  const selectedProfile = sessionStorage.getItem("selectedProfile");
  const [row, setRow] = useState();
  const [modalInfo, setModalInfo] = useState();
  const [yet, setYet] = useState();
  const [releaseDate, setReleaseDate] = useState();

  // Life Cycle
  useEffect(() => {
    getMyList();
  }, [profile]);

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    } else {
      if (sessionStorage.getItem("selectedProfile")) {
        setIsLoading(false);
      }
      getMyList();
      setDisplay(false);
    }
  }, []);

  useEffect(() => {
    setScrollY(scrollY);
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    if (modal == "detail" || modal == "mini") {
      window.removeEventListener("scroll", handleScroll);
    } else {
      scrollListener();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  // Functions
  function handleScroll() {
    setScrollY(window.scrollY);
  }

  const getMyList = async () => {
    const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
    const token = JSON.parse(sessionStorage.getItem("user")).jwt;
    if (profile) {
      try {
        const list = await axios({
          method: "GET",
          url: `/my-list?userIdx=${userIdx}&profileIdx=${profile}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setMyList(list.data.result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <HomeStyle>
        {!display ? (
          <>
            {!isLoading && myList && (
              <div
                style={{
                  position: modal == "detail" && "fixed",
                  top: modal == "detail" && "0",
                  right: modal == "detail" && "0",
                  left: modal == "detail" && "0",
                }}
              >
                <Header
                  display={sessionStorage.getItem("selectedProfile")}
                  setIsLoading={setIsLoading}
                  setProfile={setProfile}
                />
                <div className="main-view">
                  <div className="main-view-container">
                    <MainView
                      contents="main"
                      modal={modal}
                      setModal={setModal}
                      setModalInfo={setModalInfo}
                      setContent={setContent}
                    />
                    {myList.length != 0 && (
                      <List
                        row={0}
                        setRow={setRow}
                        setIndex={setIndex}
                        modal={modal}
                        setModal={setModal}
                        setContent={setContent}
                        setModalInfo={setModalInfo}
                        yet={yet}
                        setYet={setYet}
                        releaseDate={releaseDate}
                        setReleaseDate={setReleaseDate}
                      />
                    )}
                    <Top10
                      row={myList.length != 0 ? 1 : 0}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      setIndex={setIndex}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                    <New
                      row={myList.length != 0 ? 2 : 1}
                      setIndex={setIndex}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                    <ThisWeek
                      row={myList.length != 0 ? 3 : 2}
                      setIndex={setIndex}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                    <Theme
                      row={myList.length != 0 ? 4 : 3}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      setIndex={setIndex}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      theme="미국 시리즈"
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                    <Theme
                      row={myList.length != 0 ? 5 : 4}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      setIndex={setIndex}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      theme="한국 드라마"
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                    <Theme
                      row={myList.length != 0 ? 6 : 5}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      setIndex={setIndex}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      theme="영국 드라마"
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                    <Theme
                      row={myList.length != 0 ? 7 : 6}
                      setModalInfo={setModalInfo}
                      setRow={setRow}
                      setIndex={setIndex}
                      modal={modal}
                      setModal={setModal}
                      setContent={setContent}
                      theme="아시아 드라마"
                      yet={yet}
                      setYet={setYet}
                      releaseDate={releaseDate}
                      setReleaseDate={setReleaseDate}
                    />
                  </div>
                </div>
                <Footer home center dark />
              </div>
            )}
            {selectedProfile == null && (
              <SelectProfile
                setProfile={setProfile}
                setIsLoading={setIsLoading}
              />
            )}
          </>
        ) : null}
      </HomeStyle>
      {(modal == "mini" || modal == "detail") && (
        <Modal
          row={row}
          content={content}
          index={index}
          modal={modal}
          setModal={setModal}
          modalInfo={modalInfo}
          releaseDate={releaseDate}
          yet={yet}
        />
      )}
    </>
  );
}

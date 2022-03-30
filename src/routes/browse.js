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
import Loading from "components/common/loading";

export default function Browse() {
  const navigate = useNavigate();
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

  const foreignMovie = [
    {
      title: "애덤 프로젝트",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeTraESWinzhSJIaPesk37GZej5XwuZg5uaYDAgAd8Le73K7jxf6DaXx2CbmanXCXUJtucEPszMv0dmilfyaGK4PAyyeMx0GCIh43hBbUg_Uw5jR0qnlqZC_mpZA.jpg?r=7ba`,
    },
    {
      title: "돈 룩 업",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABahVYGWhYyf2fMuO5eWzaQXCBg_Jp6blF-7yEKGK3li3BoxO9at6_T148Nf1fhp3wgGcPPhBDFvUYjyulpm-qgq4zBE2nSrWYjvkYgVHcKNJ0QOCd6mKhmDhw8gl.jpg?r=371`,
    },
    {
      title: "블랙 크랩",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaDJj_ri5gK8RhHfhcwJgkZKLiTbruDiWnj_ibEq1k1yTRS09qL7gSQ-g-MkrjE1EMZ4NWDFLJy6kRCy5WFtiovDxW-HZ_voupSxyvDmjVpvvSSeYkepAjhFuKbm2jjc27x56NWVRKe-eBzYBpzTblVxiHVqdNDXripemMVagms126ApODa1X_4.jpg?r=eb8`,
    },
    {
      title: "구조견 루비",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSLSw8vp56EEHXoM89rr3a_HWGLXWv2Ncc7bmWCPuMEUKxGHqC3-3Mf_H_YeNFoNIuW8yGmqGHAcRH-XTDEW_s407Pg9gCfNmF9rAXIazqXLk_Df1-NNfIDIMNar.jpg?r=4cf`,
    },
    {
      title: "인 타임",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbJHbTGw07w7T2BZOvD_-x_48tOXdWz_fz3VIpZynuudoCVsc2qN5W3qN83LHyUXkJt63fT1Fyl98iB4wgOvzqRrTvg.webp?r=84c`,
    },
    {
      title: "이미테이션 게임",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWVTp1CoYHKW1KwMkmm0HmXY1F3SeRlvUZDu_hSxkpLl4KcHJbgJTyUpUpm_KnlgX_5Or5UluekHFMXfrAJ0UfW7ux0.webp?r=233`,
    },
    {
      title: "인턴",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfyRE92_CeVKVNxiVOOGFZqz3dVyJ1Wbyxk80gyoSvxhKSXAeHJvgPLnvXZtf9VcWBjkorPYwY1GaaTjsxMLsrCgVYc.webp?r=14c`,
    },
    {
      title: "트루먼쇼",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXT-fHBaLnYtjtNrh1qB5ap4yjJSAybcAB3re4Ml10i5554NzpEfToBjLQQf5SkGqSx_goGc7gJCMhLmTKh82o3IoCc.webp?r=408`,
    },
  ];

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

  useEffect(() => {
    getMyList();
  }, [profile]);

  useEffect(() => {
    if (sessionStorage.getItem("selectedProfile")) {
      setIsLoading(false);
    }

    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    } else {
      getMyList();
      setDisplay(false);
    }
  }, []);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    setScrollY(scrollY);
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
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
              <Header display={sessionStorage.getItem("selectedProfile")} />
              <div className="main-view">
                <div className="main-view-container">
                  <MainView
                    contents="main"
                    foreignMovie={foreignMovie}
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
                  />
                  {/* {foreignMovie && (
                    <TitleCard items={foreignMovie} headerTitle="해외 영화" />
                  )} */}
                  <New
                    row={myList.length != 0 ? 2 : 1}
                    setIndex={setIndex}
                    setModalInfo={setModalInfo}
                    setRow={setRow}
                    modal={modal}
                    setModal={setModal}
                    setContent={setContent}
                  />
                  <ThisWeek
                    row={myList.length != 0 ? 3 : 2}
                    setIndex={setIndex}
                    setModalInfo={setModalInfo}
                    setRow={setRow}
                    modal={modal}
                    setModal={setModal}
                    setContent={setContent}
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
      ) : (
        <Loading />
      )}
      {(modal == "mini" || modal == "detail") && (
        <Modal
          row={row}
          content={content}
          index={index}
          modal={modal}
          setModal={setModal}
          modalInfo={modalInfo}
        />
      )}
    </HomeStyle>
  );
}

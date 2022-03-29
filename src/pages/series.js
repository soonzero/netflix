import Footer from "components/common/footer";
import Header from "components/common/header";
import MainView from "components/common/mainview";
import React, { useEffect } from "react";
import styled from "styled-components";
import List from "components/common/list";
import axios from "axios";
import { useState } from "react";
import Top10 from "components/common/top10";
import ThisWeek from "components/common/thisweek";
import { HomeStyle } from "components/common/styled";
import New from "components/common/new";
import Modal from "components/common/modal";
import { useParams } from "react-router-dom";
import Theme from "components/common/theme";

export default function Series() {
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
  const { genre } = useParams();
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState();
  const [content, setContent] = useState();
  const [row, setRow] = useState();
  const [modalInfo, setModalInfo] = useState();
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const [isLoading, setIsLoading] = useState(true);

  const getContents = async () => {
    setIsLoading(true);
    if (genre) {
      try {
        console.log("장르 한다");
        const contents = await axios({
          method: "GET",
          url: `/browse/genre/series?userIdx=${userIdx}&profileIdx=${profileIdx}&genre=${genre}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setContent(contents.data.result);
        setIsLoading(false);
        console.log("장르 끝");
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        console.log("그냥 한다");
        const contents = await axios({
          method: "GET",
          url: `/browse/genre/series?userIdx=${userIdx}&profileIdx=${profileIdx}&genre="미국 드라마"`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setContent(contents.data.result);
        setIsLoading(false);
        console.log("그냥 끝");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    console.log("시작");
    if (isLoading) {
      setIsLoading(true);
      getContents();
    } else {
    }
  }, []);

  return (
    <HomeStyle>
      {!isLoading && (
        <>
          <div
            style={{
              position: modal == "detail" && "fixed",
              top: modal == "detail" && "0",
              right: modal == "detail" && "0",
              left: modal == "detail" && "0",
            }}
          ></div>
          <Header subheader series genre={genre} />
          <div className="main-view">
            <div className="main-view-container">
              <MainView
                foreignMovie={foreignMovie}
                modal={modal}
                setModal={setModal}
                genre
                series
              />
              <List
                row={0}
                setRow={setRow}
                setIndex={setIndex}
                modal={modal}
                setModal={setModal}
                setContent={setContent}
              />
              <Top10
                row={1}
                setModalInfo={setModalInfo}
                setRow={setRow}
                setIndex={setIndex}
                modal={modal}
                setModal={setModal}
                setContent={setContent}
              />
              {/* {content && (
                <Theme
                  row={0}
                  setModalInfo={setModalInfo}
                  setRow={setRow}
                  setIndex={setIndex}
                  modal={modal}
                  setModal={setModal}
                  setContent={setContent}
                  theme={genre}
                />
              )} */}
              {/* <Top10 setIndex={setIndex} modal={modal} setModal={setModal} />
          <New setIndex={setIndex} modal={modal} setModal={setModal} />
          <ThisWeek setIndex={setIndex} modal={modal} setModal={setModal} /> */}
            </div>
          </div>
          <Footer home />
        </>
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

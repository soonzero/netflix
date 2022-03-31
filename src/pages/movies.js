import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HomeStyle } from "components/common/styled";
import Footer from "components/common/footer";
import Header from "components/common/header";
import MainView from "components/common/mainview";
import Top10 from "components/common/top10";
import Modal from "components/common/modal";
import Theme from "components/common/theme";
import Loading from "components/common/loading";

export default function Movies() {
  // Local Variables
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;

  // Local States
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState();
  const [content, setContent] = useState();
  const [row, setRow] = useState();
  const [modalInfo, setModalInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [yet, setYet] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const { genre } = useParams();

  // Life Cycle
  useEffect(() => {
    setIsLoading(true);
    getContents();
  }, [genre]);

  // Function
  const getContents = async () => {
    setIsLoading(true);
    if (genre) {
      if (genre != "세계 여성의 달") {
        try {
          const contents = await axios({
            method: "GET",
            url: `/browse/genre/movie?userIdx=${userIdx}&profileIdx=${profileIdx}&genre=${genre}`,
            baseURL: "https://rtflix.site",
            headers: {
              "X-ACCESS-TOKEN": token,
            },
          });
          setContent(contents.data.result);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const contents = await axios({
            method: "GET",
            url: `/browse/genre/movie?userIdx=${userIdx}&profileIdx=${profileIdx}&genre=${genre} 영화`,
            baseURL: "https://rtflix.site",
            headers: {
              "X-ACCESS-TOKEN": token,
            },
          });
          setContent(contents.data.result);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      try {
        const contents = await axios({
          method: "GET",
          url: `/browse/genre/movie?userIdx=${userIdx}&profileIdx=${profileIdx}&genre="어워드 수상"`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setContent(contents.data.result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <HomeStyle>
      {!isLoading ? (
        <>
          <div
            style={{
              position: modal == "detail" && "fixed",
              top: modal == "detail" && "0",
              right: modal == "detail" && "0",
              left: modal == "detail" && "0",
            }}
          >
            <Header subheader category="movies" genre={genre} />
            <div className="main-view">
              <div className="main-view-container">
                <MainView
                  modal={modal}
                  setModal={setModal}
                  genre
                  movies
                  setContent={setContent}
                />
                {genre && content && (
                  <Theme
                    row={0}
                    category="movies"
                    setModalInfo={setModalInfo}
                    setRow={setRow}
                    setIndex={setIndex}
                    modal={modal}
                    setModal={setModal}
                    setContent={setContent}
                    theme={genre}
                    yet={yet}
                    setYet={setYet}
                    releaseDate={releaseDate}
                    setReleaseDate={setReleaseDate}
                  />
                )}
                <Top10
                  row={genre ? 1 : 0}
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
              </div>
            </div>
            <Footer home />
          </div>
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
          releaseDate={releaseDate}
          yet={yet}
        />
      )}
    </HomeStyle>
  );
}

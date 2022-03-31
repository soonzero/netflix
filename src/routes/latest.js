import Footer from "components/common/footer";
import Header from "components/common/header";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Top10 from "components/common/top10";
import New from "components/common/new";
import Modal from "components/common/modal";
import ThisWeek from "components/common/thisweek";
import { useNavigate } from "react-router-dom";
import Loading from "components/common/loading";

const LatestStyle = styled.div`
  background-color: #141414;
  color: white;
`;

export default function Latest() {
  const navigate = useNavigate();
  const [modalInfo, setModalInfo] = useState();
  const [modal, setModal] = useState();
  const [index, setIndex] = useState();
  const [content, setContent] = useState();
  const [row, setRow] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [yet, setYet] = useState();
  const [releaseDate, setReleaseDate] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
    setIsLoading(false);
  }, []);

  return (
    <LatestStyle>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header fixed />
          <Top10
            row={0}
            setRow={setRow}
            setModalInfo={setModalInfo}
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
            row={1}
            setRow={setRow}
            setModalInfo={setModalInfo}
            setIndex={setIndex}
            modal={modal}
            setModal={setModal}
            setContent={setContent}
            yet={yet}
            setYet={setYet}
            releaseDate={releaseDate}
            setReleaseDate={setReleaseDate}
          />
          <ThisWeek
            row={2}
            setRow={setRow}
            setModalInfo={setModalInfo}
            setIndex={setIndex}
            modal={modal}
            setModal={setModal}
            setContent={setContent}
            yet={yet}
            setYet={setYet}
            releaseDate={releaseDate}
            setReleaseDate={setReleaseDate}
          />
          <Footer center home />
          {(modal == "mini" || modal == "detail") && (
            <Modal
              noMain
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
      )}
    </LatestStyle>
  );
}

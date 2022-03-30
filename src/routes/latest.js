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

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
  }, []);

  return (
    <LatestStyle>
      <Header fixed />
      <Top10
        row={0}
        setRow={setRow}
        setModalInfo={setModalInfo}
        setIndex={setIndex}
        modal={modal}
        setModal={setModal}
        setContent={setContent}
      />
      <New
        row={1}
        setRow={setRow}
        setModalInfo={setModalInfo}
        setIndex={setIndex}
        modal={modal}
        setModal={setModal}
        setContent={setContent}
      />
      <ThisWeek
        row={2}
        setRow={setRow}
        setModalInfo={setModalInfo}
        setIndex={setIndex}
        modal={modal}
        setModal={setModal}
        setContent={setContent}
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
        />
      )}
    </LatestStyle>
  );
}
